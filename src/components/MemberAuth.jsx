import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MemberAuth = ({ onLogin, onClose, preselectedClass }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalConditions: '',
    danceExperience: 'beginner'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock authentication - in production, this would connect to Supabase
    setTimeout(() => {
      if (isLogin) {
        // Demo login credentials
        if (formData.email === 'demo@arteflamenco.com' && formData.password === 'demo123') {
          const mockUser = {
            id: 1,
            email: 'demo@arteflamenco.com',
            firstName: 'Maria',
            lastName: 'Rodriguez',
            phone: '(555) 123-4567',
            memberStatus: 'Gold',
            joinDate: '2024-01-15',
            workshopsCompleted: 12,
            upcomingSessions: 3,
            hoursDanced: 45,
            enrolledClasses: []
          };
          onLogin(mockUser);
        } else {
          setError('Invalid credentials. Use demo@arteflamenco.com / demo123');
        }
      } else {
        // Mock registration
        const newUser = {
          id: Date.now(),
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          memberStatus: 'Bronze',
          joinDate: '2025-01-01',
          workshopsCompleted: 0,
          upcomingSessions: 0,
          hoursDanced: 0,
          enrolledClasses: preselectedClass ? [{ ...preselectedClass, status: 'pending' }] : []
        };
        onLogin(newUser);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fillDemoCredentials = () => {
    setFormData({
      ...formData,
      email: 'demo@arteflamenco.com',
      password: 'demo123'
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-900 rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-flamenco-500/20"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-display font-bold text-white">
            {isLogin ? 'Member Login' : 'Join Arte Flamenco'}
          </h2>
          {preselectedClass && (
            <div className="text-flamenco-400 text-sm">
              You'll be enrolled in: {preselectedClass.title}
            </div>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Toggle Login/Register */}
        <div className="flex bg-gray-800 rounded-lg p-1 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
              isLogin ? 'bg-flamenco-500 text-black' : 'text-gray-300 hover:text-white'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
              !isLogin ? 'bg-flamenco-500 text-black' : 'text-gray-300 hover:text-white'
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Login Form */}
          {isLogin ? (
            <>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                  placeholder="Enter your password"
                />
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border border-flamenco-500/20">
                <h4 className="text-flamenco-400 font-semibold mb-2">Demo Credentials</h4>
                <p className="text-gray-300 text-sm mb-3">
                  <strong>Email:</strong> demo@arteflamenco.com<br />
                  <strong>Password:</strong> demo123
                </p>
                <button
                  type="button"
                  onClick={fillDemoCredentials}
                  className="text-flamenco-400 hover:text-flamenco-300 text-sm underline"
                >
                  Fill demo credentials
                </button>
              </div>
            </>
          ) : (
            /* Registration Form */
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-300 mb-2">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-300 mb-2">
                    Emergency Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="danceExperience" className="block text-sm font-medium text-gray-300 mb-2">
                  Dance Experience Level
                </label>
                <select
                  id="danceExperience"
                  name="danceExperience"
                  value={formData.danceExperience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-300 mb-2">
                  Medical Conditions or Physical Limitations
                </label>
                <textarea
                  id="medicalConditions"
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white resize-none"
                  placeholder="Please describe any conditions we should be aware of..."
                />
              </div>
            </>
          )}

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-400/10 rounded-lg p-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-flamenco-500 hover:bg-flamenco-600 disabled:opacity-50 text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-300"
          >
            {isLoading ? (isLogin ? 'Signing In...' : 'Creating Account...') : (isLogin ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        {isLogin && (
          <div className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <button
              onClick={() => setIsLogin(false)}
              className="text-flamenco-400 hover:text-flamenco-300 underline"
            >
              Register here
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MemberAuth;