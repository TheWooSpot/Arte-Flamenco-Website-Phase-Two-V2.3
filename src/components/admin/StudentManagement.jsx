import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StudentManagement = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      firstName: 'Maria',
      lastName: 'Rodriguez',
      email: 'maria.rodriguez@email.com',
      phone: '(555) 123-4567',
      enrolledClasses: [1, 2],
      joinDate: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      firstName: 'James',
      lastName: 'Wilson',
      email: 'james.wilson@email.com',
      phone: '(555) 234-5678',
      enrolledClasses: [1],
      joinDate: '2024-02-01',
      status: 'active'
    },
    {
      id: 3,
      firstName: 'Sarah',
      lastName: 'Chen',
      email: 'sarah.chen@email.com',
      phone: '(555) 345-6789',
      enrolledClasses: [2, 3],
      joinDate: '2024-01-20',
      status: 'inactive'
    }
  ]);

  const [classes] = useState([
    { id: 1, name: 'Dance/Movement Therapy (DMT)' },
    { id: 2, name: 'Somatic Movement Exploration' },
    { id: 3, name: 'Flamenco for Emotional Empowerment' }
  ]);

  const [editingStudent, setEditingStudent] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getClassNames = (classIds) => {
    return classIds.map(id => {
      const cls = classes.find(c => c.id === id);
      return cls ? cls.name : 'Unknown Class';
    }).join(', ');
  };

  const handleEdit = (student) => {
    setEditingStudent({ ...student });
  };

  const handleSave = () => {
    if (editingStudent) {
      setStudents(students.map(student => 
        student.id === editingStudent.id ? editingStudent : student
      ));
      setEditingStudent(null);
    }
  };

  const handleDelete = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(student => student.id !== studentId));
    }
  };

  const handleAddStudent = (newStudent) => {
    const id = Math.max(...students.map(s => s.id)) + 1;
    setStudents([...students, { 
      ...newStudent, 
      id, 
      joinDate: new Date().toISOString().split('T')[0],
      status: 'active'
    }]);
    setShowAddForm(false);
  };

  const toggleStudentStatus = (studentId) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, status: student.status === 'active' ? 'inactive' : 'active' }
        : student
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-display font-bold text-white">Student Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-flamenco-500 hover:bg-flamenco-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Add New Student
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-900 rounded-lg p-4">
        <input
          type="text"
          placeholder="Search students by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
        />
      </div>

      {/* Students Table */}
      <div className="bg-gray-900 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Email</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Phone</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Enrolled Classes</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Join Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredStudents.map((student) => (
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
                  <td className="px-6 py-4 text-gray-300">{student.phone}</td>
                  <td className="px-6 py-4 text-gray-300 max-w-xs truncate">
                    {getClassNames(student.enrolledClasses)}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{student.joinDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      student.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(student)}
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => toggleStudentStatus(student.id)}
                        className={`px-3 py-1 text-xs rounded transition-colors duration-300 ${
                          student.status === 'active'
                            ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                      >
                        {student.status === 'active' ? 'Suspend' : 'Activate'}
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors duration-300"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Student Modal */}
      {editingStudent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Edit Student</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    value={editingStudent.firstName}
                    onChange={(e) => setEditingStudent({...editingStudent, firstName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={editingStudent.lastName}
                    onChange={(e) => setEditingStudent({...editingStudent, lastName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={editingStudent.email}
                  onChange={(e) => setEditingStudent({...editingStudent, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  value={editingStudent.phone}
                  onChange={(e) => setEditingStudent({...editingStudent, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Enrolled Classes</label>
                <div className="space-y-2">
                  {classes.map((cls) => (
                    <label key={cls.id} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={editingStudent.enrolledClasses.includes(cls.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setEditingStudent({
                              ...editingStudent,
                              enrolledClasses: [...editingStudent.enrolledClasses, cls.id]
                            });
                          } else {
                            setEditingStudent({
                              ...editingStudent,
                              enrolledClasses: editingStudent.enrolledClasses.filter(id => id !== cls.id)
                            });
                          }
                        }}
                        className="w-4 h-4 text-flamenco-500 bg-gray-800 border-gray-600 rounded focus:ring-flamenco-500"
                      />
                      <span className="text-gray-300">{cls.name}</span>
                    </label>
                  ))}
                </div>
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
                onClick={() => setEditingStudent(null)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Student Modal */}
      {showAddForm && (
        <AddStudentForm 
          classes={classes}
          onAdd={handleAddStudent}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
};

const AddStudentForm = ({ classes, onAdd, onCancel }) => {
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    enrolledClasses: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newStudent);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-2xl">
        <h3 className="text-2xl font-bold text-white mb-6">Add New Student</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
              <input
                type="text"
                required
                value={newStudent.firstName}
                onChange={(e) => setNewStudent({...newStudent, firstName: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
              <input
                type="text"
                required
                value={newStudent.lastName}
                onChange={(e) => setNewStudent({...newStudent, lastName: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              required
              value={newStudent.email}
              onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
            <input
              type="tel"
              required
              value={newStudent.phone}
              onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Enroll in Workshops</label>
            <div className="space-y-2">
              {classes.map((cls) => (
                <label key={cls.id} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={newStudent.enrolledClasses.includes(cls.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setNewStudent({
                          ...newStudent,
                          enrolledClasses: [...newStudent.enrolledClasses, cls.id]
                        });
                      } else {
                        setNewStudent({
                          ...newStudent,
                          enrolledClasses: newStudent.enrolledClasses.filter(id => id !== cls.id)
                        });
                      }
                    }}
                    className="w-4 h-4 text-flamenco-500 bg-gray-800 border-gray-600 rounded focus:ring-flamenco-500"
                  />
                  <span className="text-gray-300">{cls.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              className="flex-1 bg-flamenco-500 hover:bg-flamenco-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Add Student
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

export default StudentManagement;