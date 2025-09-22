import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MemberClassSelection = ({ classes, memberUser, onEnrollmentUpdate, onClose }) => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [conflicts, setConflicts] = useState([]);

  // Parse time string to minutes (e.g., "6:00 PM" -> 1080)
  const parseTimeToMinutes = (timeStr) => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    
    if (period === 'PM' && hours !== 12) {
      totalMinutes += 12 * 60;
    } else if (period === 'AM' && hours === 12) {
      totalMinutes = minutes;
    }
    
    return totalMinutes;
  };

  // Parse duration string to minutes (e.g., "75 minutes" -> 75)
  const parseDurationToMinutes = (durationStr) => {
    const match = durationStr.match(/(\d+)/);
    return match ? parseInt(match[1]) : 60;
  };

  // Convert day names to standardized format
  const standardizeDayName = (day) => {
    const dayMap = {
      'monday': 'monday',
      'tuesday': 'tuesday', 
      'wednesday': 'wednesday',
      'thursday': 'thursday',
      'friday': 'friday',
      'saturday': 'saturday',
      'sunday': 'sunday'
    };
    return dayMap[day.toLowerCase()] || day.toLowerCase();
  };

  // Get class schedule with parsed times
  const getClassSchedule = (classItem) => {
    const startTime = parseTimeToMinutes(classItem.schedule.split(' ')[2]); // Extract time from schedule
    const duration = parseDurationToMinutes(classItem.duration);
    const endTime = startTime + duration;
    
    return classItem.days.map(day => ({
      day: standardizeDayName(day),
      startTime,
      endTime,
      className: classItem.title
    }));
  };

  // Check for conflicts between classes
  const checkConflicts = (newSelections) => {
    const allEnrolledClasses = [...(memberUser.enrolledClasses || []), ...newSelections];
    const allSchedules = [];
    
    // Get all schedules
    allEnrolledClasses.forEach(classId => {
      const classItem = classes.find(c => c.id === classId);
      if (classItem) {
        const schedules = getClassSchedule(classItem);
        schedules.forEach(schedule => {
          allSchedules.push({ ...schedule, classId, classItem });
        });
      }
    });

    const detectedConflicts = [];
    
    // Check for overlaps
    for (let i = 0; i < allSchedules.length; i++) {
      for (let j = i + 1; j < allSchedules.length; j++) {
        const schedule1 = allSchedules[i];
        const schedule2 = allSchedules[j];
        
        if (schedule1.day === schedule2.day && schedule1.classId !== schedule2.classId) {
          const overlap = Math.min(schedule1.endTime, schedule2.endTime) - Math.max(schedule1.startTime, schedule2.startTime);
          
          if (overlap > 0) {
            const overlapMinutes = overlap;
            detectedConflicts.push({
              class1: schedule1.className,
              class2: schedule2.className,
              day: schedule1.day,
              overlap: overlapMinutes,
              acceptable: overlapMinutes <= 30
            });
          }
        }
      }
    }
    
    return detectedConflicts;
  };

  // Handle class selection
  const handleClassToggle = (classId) => {
    const newSelections = selectedClasses.includes(classId)
      ? selectedClasses.filter(id => id !== classId)
      : [...selectedClasses, classId];
    
    setSelectedClasses(newSelections);
    
    // Check for conflicts
    const newConflicts = checkConflicts(newSelections);
    setConflicts(newConflicts);
  };

  // Check if class is already enrolled
  const isEnrolled = (classId) => {
    return memberUser.enrolledClasses?.includes(classId) || false;
  };

  // Check if class is selected
  const isSelected = (classId) => {
    return selectedClasses.includes(classId);
  };

  // Confirm selections
  const handleConfirmSelections = () => {
    if (selectedClasses.length > 0) {
      onEnrollmentUpdate(selectedClasses);
    }
    onClose();
  };

  const categories = [
    { id: 'therapeutic', name: 'Therapeutic & Somatic', color: 'bg-emerald-500' },
    { id: 'adaptive', name: 'Adaptive & Healing', color: 'bg-blue-500' },
    { id: 'cultural', name: 'Cultural & Empowering', color: 'bg-purple-500' },
    { id: 'trending', name: 'Trending & Technique', color: 'bg-orange-500' }
  ];

  const getCategoryColor = (category) => {
    const categoryObj = categories.find(cat => cat.id === category);
    return categoryObj ? categoryObj.color : 'bg-gray-500';
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-900 rounded-2xl p-8 w-full max-w-6xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-display font-bold text-white">Select Classes</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Conflict Warnings */}
        {conflicts.length > 0 && (
          <div className="mb-6 space-y-2">
            {conflicts.map((conflict, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  conflict.acceptable 
                    ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">
                    {conflict.acceptable ? 'Schedule Notice' : 'Schedule Conflict'}
                  </span>
                </div>
                <p className="text-sm">
                  <strong>{conflict.class1}</strong> and <strong>{conflict.class2}</strong> overlap by {conflict.overlap} minutes on {conflict.day}s.
                  {conflict.acceptable 
                    ? ' This is within the acceptable 30-minute overlap.'
                    : ' Consider selecting different classes or contact us for assistance.'
                  }
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Class Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {classes.map((classItem) => {
            const enrolled = isEnrolled(classItem.id);
            const selected = isSelected(classItem.id);
            
            return (
              <button
                key={classItem.id}
                onClick={() => !enrolled && handleClassToggle(classItem.id)}
                disabled={enrolled}
                className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                  enrolled
                    ? 'bg-gray-800 border-gray-600 opacity-50 cursor-not-allowed'
                    : selected
                    ? `${getCategoryColor(classItem.category)} border-white text-black`
                    : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    enrolled ? 'bg-green-500 text-black' :
                    selected ? 'bg-black/20 text-black' : `${getCategoryColor(classItem.category)} text-black`
                  }`}>
                    {enrolled ? 'ENROLLED' : classItem.category.toUpperCase()}
                  </span>
                  {selected && !enrolled && (
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                
                <h3 className={`font-bold mb-2 ${selected && !enrolled ? 'text-black' : 'text-white'}`}>
                  {classItem.title}
                </h3>
                
                <div className={`text-sm space-y-1 ${selected && !enrolled ? 'text-black/80' : 'text-gray-300'}`}>
                  <p>{classItem.schedule}</p>
                  <p>{classItem.duration} • {classItem.price}</p>
                  <p className="text-xs">{classItem.days.join(', ')}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleConfirmSelections}
            disabled={selectedClasses.length === 0}
            className="flex-1 bg-flamenco-500 hover:bg-flamenco-600 disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-300"
          >
            Enroll in {selectedClasses.length} Selected Class{selectedClasses.length !== 1 ? 'es' : ''}
          </button>
          <button
            onClick={onClose}
            className="px-6 py-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Cancel
          </button>
        </div>

        {/* Selection Summary */}
        {selectedClasses.length > 0 && (
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <h4 className="font-semibold text-flamenco-400 mb-2">Selected Classes:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedClasses.map(classId => {
                const classItem = classes.find(c => c.id === classId);
                return (
                  <span key={classId} className="px-3 py-1 bg-flamenco-500 text-black text-sm font-medium rounded-full">
                    {classItem?.title}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MemberClassSelection;