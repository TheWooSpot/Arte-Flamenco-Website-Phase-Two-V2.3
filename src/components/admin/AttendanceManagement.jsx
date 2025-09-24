import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AttendanceManagement = () => {
  const [selectedClass, setSelectedClass] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const classes = [
    { id: 1, name: 'Dance/Movement Therapy (DMT)' },
    { id: 2, name: 'Somatic Movement Exploration' },
    { id: 3, name: 'Flamenco for Emotional Empowerment' }
  ];

  const [students] = useState([
    {
      id: 1,
      firstName: 'Maria',
      lastName: 'Rodriguez',
      email: 'maria.rodriguez@email.com',
      enrolledClasses: [1, 2]
    },
    {
      id: 2,
      firstName: 'James',
      lastName: 'Wilson',
      email: 'james.wilson@email.com',
      enrolledClasses: [1]
    },
    {
      id: 3,
      firstName: 'Sarah',
      lastName: 'Chen',
      email: 'sarah.chen@email.com',
      enrolledClasses: [2, 3]
    },
    {
      id: 4,
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@email.com',
      enrolledClasses: [1, 3]
    },
    {
      id: 5,
      firstName: 'Emily',
      lastName: 'Davis',
      email: 'emily.davis@email.com',
      enrolledClasses: [2]
    }
  ]);

  const [attendance, setAttendance] = useState({
    '2024-01-15': {
      1: { 1: 'present', 2: 'present', 4: 'absent' },
      2: { 1: 'present', 3: 'present', 5: 'late' }
    },
    '2024-01-16': {
      1: { 1: 'present', 2: 'late', 4: 'present' },
      2: { 1: 'absent', 3: 'present', 5: 'present' }
    }
  });

  const getEnrolledStudents = (classId) => {
    return students.filter(student => student.enrolledClasses.includes(classId));
  };

  const getAttendanceStatus = (studentId, classId, date) => {
    return attendance[date]?.[classId]?.[studentId] || 'unmarked';
  };

  const updateAttendance = (studentId, classId, date, status) => {
    setAttendance(prev => ({
      ...prev,
      [date]: {
        ...prev[date],
        [classId]: {
          ...prev[date]?.[classId],
          [studentId]: status
        }
      }
    }));
  };

  const getAttendanceStats = (classId, date) => {
    const enrolledStudents = getEnrolledStudents(classId);
    const classAttendance = attendance[date]?.[classId] || {};
    
    const stats = {
      present: 0,
      absent: 0,
      late: 0,
      unmarked: 0,
      total: enrolledStudents.length
    };

    enrolledStudents.forEach(student => {
      const status = classAttendance[student.id] || 'unmarked';
      stats[status]++;
    });

    return stats;
  };

  const enrolledStudents = getEnrolledStudents(selectedClass);
  const stats = getAttendanceStats(selectedClass, selectedDate);

  const getStatusColor = (status) => {
    switch (status) {
      case 'present': return 'bg-green-500';
      case 'absent': return 'bg-red-500';
      case 'late': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'present': return 'text-green-400';
      case 'absent': return 'text-red-400';
      case 'late': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-white">Attendance Management</h2>

      {/* Class and Date Selection */}
      <div className="bg-gray-900 rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Select Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(parseInt(e.target.value))}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            >
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>{cls.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>
        </div>
      </div>

      {/* Attendance Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-gray-900 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-white">{stats.total}</div>
          <div className="text-sm text-gray-400">Total Enrolled</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-green-400">{stats.present}</div>
          <div className="text-sm text-gray-400">Present</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{stats.absent}</div>
          <div className="text-sm text-gray-400">Absent</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">{stats.late}</div>
          <div className="text-sm text-gray-400">Late</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-gray-400">{stats.unmarked}</div>
          <div className="text-sm text-gray-400">Unmarked</div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-gray-900 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-800">
          <h3 className="text-xl font-bold text-white">
            {classes.find(c => c.id === selectedClass)?.name} - {selectedDate}
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Student</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Email</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-300">Attendance Status</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {enrolledStudents.map((student) => {
                const status = getAttendanceStatus(student.id, selectedClass, selectedDate);
                return (
                  <motion.tr
                    key={student.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-800 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-white">
                      {student.firstName} {student.lastName}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{student.email}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusTextColor(status)}`}>
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`}></div>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => updateAttendance(student.id, selectedClass, selectedDate, 'present')}
                          className={`px-3 py-1 text-xs rounded transition-colors duration-300 ${
                            status === 'present' 
                              ? 'bg-green-600 text-white' 
                              : 'bg-gray-600 hover:bg-green-600 text-gray-300 hover:text-white'
                          }`}
                        >
                          Present
                        </button>
                        <button
                          onClick={() => updateAttendance(student.id, selectedClass, selectedDate, 'late')}
                          className={`px-3 py-1 text-xs rounded transition-colors duration-300 ${
                            status === 'late' 
                              ? 'bg-yellow-600 text-white' 
                              : 'bg-gray-600 hover:bg-yellow-600 text-gray-300 hover:text-white'
                          }`}
                        >
                          Late
                        </button>
                        <button
                          onClick={() => updateAttendance(student.id, selectedClass, selectedDate, 'absent')}
                          className={`px-3 py-1 text-xs rounded transition-colors duration-300 ${
                            status === 'absent' 
                              ? 'bg-red-600 text-white' 
                              : 'bg-gray-600 hover:bg-red-600 text-gray-300 hover:text-white'
                          }`}
                        >
                          Absent
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-900 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => {
              enrolledStudents.forEach(student => {
                updateAttendance(student.id, selectedClass, selectedDate, 'present');
              });
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            Mark All Present
          </button>
          <button
            onClick={() => {
              enrolledStudents.forEach(student => {
                updateAttendance(student.id, selectedClass, selectedDate, 'absent');
              });
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            Mark All Absent
          </button>
          <button
            onClick={() => {
              enrolledStudents.forEach(student => {
                updateAttendance(student.id, selectedClass, selectedDate, 'unmarked');
              });
            }}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Attendance History */}
      <div className="bg-gray-900 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Recent Attendance History</h3>
        <div className="space-y-4">
          {Object.entries(attendance).slice(-5).map(([date, dateAttendance]) => (
            <div key={date} className="border border-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-white">{date}</h4>
                <div className="text-sm text-gray-400">
                  {Object.keys(dateAttendance).length} class(es) recorded
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(dateAttendance).map(([classId, classAttendance]) => {
                  const className = classes.find(c => c.id === parseInt(classId))?.name || 'Unknown Class';
                  const presentCount = Object.values(classAttendance).filter(status => status === 'present').length;
                  const totalCount = Object.keys(classAttendance).length;
                  
                  return (
                    <div key={classId} className="bg-gray-800 rounded-lg p-3">
                      <div className="text-sm font-medium text-white truncate">{className}</div>
                      <div className="text-xs text-gray-400">
                        {presentCount}/{totalCount} present
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceManagement;