import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClassManagement = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "Dance/Movement Therapy (DMT)",
      category: "therapeutic",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
      location: "Studio A",
      days: ["Tuesday", "Thursday"],
      time: "6:00 PM",
      duration: "75 minutes",
      price: "$40 per session",
      isActive: true,
      maxStudents: 12,
      currentEnrollment: 8
    },
    {
      id: 2,
      name: "Somatic Movement Exploration",
      category: "therapeutic",
      image: "https://images.pexels.com/photos/8436730/pexels-photo-8436730.jpeg",
      location: "Studio B",
      days: ["Wednesday", "Saturday"],
      time: "7:00 PM",
      duration: "60 minutes",
      price: "$35 per class",
      isActive: true,
      maxStudents: 15,
      currentEnrollment: 12
    },
    {
      id: 3,
      name: "Flamenco for Emotional Empowerment",
      category: "cultural",
      image: "https://images.pexels.com/photos/4498398/pexels-photo-4498398.jpeg",
      location: "Main Studio",
      days: ["Tuesday", "Thursday"],
      time: "7:30 PM",
      duration: "75 minutes",
      price: "$40 per class",
      isActive: false,
      maxStudents: 20,
      currentEnrollment: 0
    }
  ]);

  const [editingClass, setEditingClass] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleClassStatus = (classId) => {
    setClasses(classes.map(cls => 
      cls.id === classId ? { ...cls, isActive: !cls.isActive } : cls
    ));
  };

  const handleEdit = (classItem) => {
    setEditingClass({ ...classItem });
  };

  const handleSave = () => {
    if (editingClass) {
      setClasses(classes.map(cls => 
        cls.id === editingClass.id ? editingClass : cls
      ));
      setEditingClass(null);
    }
  };

  const handleDelete = (classId) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      setClasses(classes.filter(cls => cls.id !== classId));
    }
  };

  const handleAddClass = (newClass) => {
    const id = Math.max(...classes.map(c => c.id)) + 1;
    setClasses([...classes, { ...newClass, id, currentEnrollment: 0 }]);
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-display font-bold text-white">Class Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-flamenco-500 hover:bg-flamenco-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Add New Class
        </button>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <motion.div
            key={classItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={classItem.image}
                alt={classItem.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{classItem.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${classItem.isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className={`text-sm ${classItem.isActive ? 'text-green-400' : 'text-red-400'}`}>
                    {classItem.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-300 mb-4">
                <p><span className="text-flamenco-400">Location:</span> {classItem.location}</p>
                <p><span className="text-flamenco-400">Schedule:</span> {classItem.days.join(', ')} at {classItem.time}</p>
                <p><span className="text-flamenco-400">Duration:</span> {classItem.duration}</p>
                <p><span className="text-flamenco-400">Price:</span> {classItem.price}</p>
                <p><span className="text-flamenco-400">Enrollment:</span> {classItem.currentEnrollment}/{classItem.maxStudents}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => toggleClassStatus(classItem.id)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
                    classItem.isActive 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {classItem.isActive ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => handleEdit(classItem)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(classItem.id)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingClass && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Edit Class</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Class Name</label>
                <input
                  type="text"
                  value={editingClass.name}
                  onChange={(e) => setEditingClass({...editingClass, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Background Image URL</label>
                <input
                  type="url"
                  value={editingClass.image}
                  onChange={(e) => setEditingClass({...editingClass, image: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <input
                  type="text"
                  value={editingClass.location}
                  onChange={(e) => setEditingClass({...editingClass, location: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
                  <input
                    type="text"
                    value={editingClass.time}
                    onChange={(e) => setEditingClass({...editingClass, time: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                  <input
                    type="text"
                    value={editingClass.duration}
                    onChange={(e) => setEditingClass({...editingClass, duration: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
                <input
                  type="text"
                  value={editingClass.price}
                  onChange={(e) => setEditingClass({...editingClass, price: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Max Students</label>
                <input
                  type="number"
                  value={editingClass.maxStudents}
                  onChange={(e) => setEditingClass({...editingClass, maxStudents: parseInt(e.target.value)})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSave}
                className="flex-1 bg-flamenco-500 hover:bg-flamenco-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingClass(null)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Class Modal */}
      {showAddForm && (
        <AddClassForm 
          onAdd={handleAddClass}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
};

const AddClassForm = ({ onAdd, onCancel }) => {
  const [newClass, setNewClass] = useState({
    name: '',
    category: 'therapeutic',
    image: '',
    location: '',
    days: [],
    time: '',
    duration: '',
    price: '',
    isActive: true,
    maxStudents: 15
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newClass);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold text-white mb-6">Add New Class</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Class Name</label>
            <input
              type="text"
              required
              value={newClass.name}
              onChange={(e) => setNewClass({...newClass, name: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
            <select
              value={newClass.category}
              onChange={(e) => setNewClass({...newClass, category: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            >
              <option value="therapeutic">Therapeutic & Somatic</option>
              <option value="adaptive">Adaptive & Healing</option>
              <option value="cultural">Cultural & Empowering</option>
              <option value="trending">Trending & Technique</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Background Image URL</label>
            <input
              type="url"
              required
              value={newClass.image}
              onChange={(e) => setNewClass({...newClass, image: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
            <input
              type="text"
              required
              value={newClass.location}
              onChange={(e) => setNewClass({...newClass, location: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
              <input
                type="text"
                required
                value={newClass.time}
                onChange={(e) => setNewClass({...newClass, time: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="e.g., 6:00 PM"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
              <input
                type="text"
                required
                value={newClass.duration}
                onChange={(e) => setNewClass({...newClass, duration: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="e.g., 60 minutes"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
            <input
              type="text"
              required
              value={newClass.price}
              onChange={(e) => setNewClass({...newClass, price: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              placeholder="e.g., $35 per class"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Max Students</label>
            <input
              type="number"
              required
              value={newClass.maxStudents}
              onChange={(e) => setNewClass({...newClass, maxStudents: parseInt(e.target.value)})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              className="flex-1 bg-flamenco-500 hover:bg-flamenco-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Add Workshop
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassManagement;