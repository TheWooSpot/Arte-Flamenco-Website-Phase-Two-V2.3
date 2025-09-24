import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MemberClassSelection from '../components/MemberClassSelection';

const MemberDashboard = ({ user, onLogout, onUserUpdate }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showClassSelection, setShowClassSelection] = useState(false);

  // Mock classes data (same as in Classes.jsx)
  const classes = [
    {
      id: 1,
      title: "Dance/Movement Therapy (DMT)",
      category: "therapeutic",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["tuesday", "thursday"],
      duration: "75 minutes",
      price: "$40 per session",
      schedule: "Tuesdays & Thursdays 6:00 PM",
      description: "Evidence-based therapeutic approach using movement and dance to promote emotional, cognitive, physical, and social integration.",
      image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg"
    },
    {
      id: 2,
      title: "Somatic Movement Exploration",
      category: "therapeutic",
      skillLevels: ["beginner", "intermediate"],
      days: ["wednesday", "saturday"],
      duration: "60 minutes",
      price: "$35 per class",
      schedule: "Wednesdays & Saturdays 7:00 PM",
      description: "Gentle, mindful movement practices that help you reconnect with your body's natural wisdom.",
      image: "https://images.pexels.com/photos/4498398/pexels-photo-4498398.jpeg"
    },
    {
      id: 3,
      title: "Flamenco for Emotional Empowerment",
      category: "cultural",
      skillLevels: ["intermediate", "advanced"],
      days: ["tuesday", "thursday"],
      duration: "75 minutes",
      price: "$40 per class",
      schedule: "Tuesdays & Thursdays 7:30 PM",
      description: "Traditional flamenco techniques combined with emotional empowerment practices.",
      image: "https://images.pexels.com/photos/3662845/pexels-photo-3662845.jpeg"
    },
    {
      id: 4,
      title: "Chair-Based Dance",
      category: "adaptive",
      skillLevels: ["beginner", "intermediate"],
      days: ["tuesday", "friday"],
      duration: "45 minutes",
      price: "$25 per class",
      schedule: "Tuesdays & Fridays 10:00 AM",
      description: "Joyful, energizing dance classes designed for those who use wheelchairs or prefer seated movement.",
      image: "https://images.pexels.com/photos/3662839/pexels-photo-3662839.jpeg"
    },
    {
      id: 5,
      title: "Hip-Hop Therapy",
      category: "trending",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["wednesday"],
      duration: "60 minutes",
      price: "$30 per class",
      schedule: "Wednesdays 6:00 PM",
      description: "High-energy hip-hop combined with therapeutic principles.",
      image: "https://images.pexels.com/photos/4498608/pexels-photo-4498608.jpeg"
    }
  ];

  // Handle enrollment updates from class selection
  const handleEnrollmentUpdate = (newEnrollments) => {
    const updatedUser = {
      ...user,
      enrolledClasses: [...(user.enrolledClasses || []), ...newEnrollments],
      upcomingSessions: (user.upcomingSessions || 0) + newEnrollments.length
    };
    onUserUpdate(updatedUser);
  };

  // Mock data for enrolled classes
  const enrolledClasses = [
    {
      id: 1,
      name: 'Contemporary Flow',
      instructor: 'Elena Vasquez',
      date: 'March 15, 2024',
      time: '7:00 PM',
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/3662848/pexels-photo-3662848.jpeg'
    },
    {
      id: 2,
      name: 'Flamenco for Emotional Empowerment',
      instructor: 'Isabella Rodriguez',
      date: 'March 18, 2024',
      time: '6:30 PM',
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/3662845/pexels-photo-3662845.jpeg'
    },
    {
      id: 3,
      name: 'Trauma-Informed Dance',
      instructor: 'Clarita Corona',
      date: 'March 20, 2024',
      time: '2:00 PM',
      status: 'pending',
      image: 'https://images.pexels.com/photos/3662850/pexels-photo-3662850.jpeg'
    }
  ];

  // Add user's enrolled classes with pending status to the display
  const allEnrolledClasses = [
    ...enrolledClasses,
    ...(user.enrolledClasses || []).map(classItem => ({
      id: classItem.id,
      name: classItem.title,
      instructor: 'Clarita Corona',
      date: 'TBD',
      time: classItem.schedule?.split(' ').slice(-2).join(' ') || 'TBD',
      status: classItem.status || 'pending',
      image: classItem.image || 'https://images.pexels.com/photos/3662851/pexels-photo-3662851.jpeg'
    }))
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Booked workshop',
      item: 'Contemporary Flow',
      date: 'March 10, 2024',
      type: 'booking'
    },
    {
      id: 2,
      action: 'Completed workshop',
      item: 'Latin Fusion',
      date: 'March 8, 2024',
      type: 'completion'
    },
    {
      id: 3,
      action: 'Joined Arte Flamenco',
      item: '',
      date: user.joinDate,
      type: 'milestone'
    }
  ];

  const membershipPackages = [
    {
      id: 1,
      name: 'Bronze Membership',
      price: '$89/month',
      features: ['4 classes per month', 'Basic workshops', 'Community events'],
      current: user.memberStatus === 'Bronze'
    },
    {
      id: 2,
      name: 'Silver Membership',
      price: '$149/month',
      features: ['8 classes per month', 'All workshops', 'Priority booking', '10% retail discount'],
      current: user.memberStatus === 'Silver'
    },
    {
      id: 3,
      name: 'Gold Membership',
      price: '$199/month',
      features: ['Unlimited classes', 'All workshops', 'Private sessions', '20% retail discount', 'Guest passes'],
      current: user.memberStatus === 'Gold'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderDashboard = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Welcome Section */}
      <motion.div variants={itemVariants} className="bg-gradient-to-r from-flamenco-600 to-red-700 rounded-2xl p-8 text-black">
        <h1 className="text-3xl font-display font-bold mb-2">
          Welcome back, {user.firstName}!
        </h1>
        <p className="text-lg opacity-90">
          Ready to continue your movement journey? You have {user.upcomingSessions} upcoming sessions.
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants} className="bg-gray-900 rounded-2xl p-6">
        <h2 className="text-2xl font-display font-bold text-flamenco-400 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setShowClassSelection(true)}
            className="bg-flamenco-500 hover:bg-flamenco-600 text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-300 text-center"
          >
            Browse Classes
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 border border-flamenco-500/20"
          >
            View Schedule
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 border border-flamenco-500/20"
          >
            Update Profile
          </button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gray-900 rounded-2xl p-6 text-center">
          <div className="text-4xl font-display font-bold text-flamenco-400 mb-2">
            {user.workshopsCompleted}
          </div>
          <div className="text-gray-300 text-sm">Workshops Completed</div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6 text-center">
          <div className="text-4xl font-display font-bold text-flamenco-400 mb-2">
            {user.upcomingSessions}
          </div>
          <div className="text-gray-300 text-sm">Upcoming Sessions</div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6 text-center">
          <div className="text-4xl font-display font-bold text-flamenco-400 mb-2">
            {user.hoursDanced}
          </div>
          <div className="text-gray-300 text-sm">Hours Danced</div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6 text-center">
          <div className="text-4xl font-display font-bold text-flamenco-400 mb-2">
            {user.memberStatus}
          </div>
          <div className="text-gray-300 text-sm">Member Status</div>
        </div>
      </motion.div>

      {/* Upcoming Workshops & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={itemVariants} className="bg-gray-900 rounded-2xl p-6">
          <h3 className="text-xl font-display font-bold text-flamenco-400 mb-6">Upcoming Workshops</h3>
          <div className="space-y-4">
            {allEnrolledClasses.slice(0, 3).map((classItem) => (
              <div key={classItem.id} className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{classItem.name}</h4>
                    <p className="text-flamenco-400 text-sm">{classItem.date} at {classItem.time}</p>
                    <p className="text-gray-400 text-sm">with {classItem.instructor}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    classItem.status === 'confirmed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {classItem.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gray-900 rounded-2xl p-6">
          <h3 className="text-xl font-display font-bold text-flamenco-400 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'booking' ? 'bg-blue-500' :
                  activity.type === 'completion' ? 'bg-green-500' : 'bg-flamenco-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-white">
                    {activity.action} {activity.item && <span className="text-flamenco-400">{activity.item}</span>}
                  </p>
                  <p className="text-gray-400 text-sm">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderSchedule = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-display font-bold text-white">My Schedule</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allEnrolledClasses.map((classItem) => (
          <div key={classItem.id} className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={classItem.image}
                alt={classItem.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-white">{classItem.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  classItem.status === 'confirmed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {classItem.status}
                </span>
              </div>
              <p className="text-flamenco-400 mb-2">{classItem.date} at {classItem.time}</p>
              <p className="text-gray-300 text-sm mb-4">with {classItem.instructor}</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-flamenco-500 hover:bg-flamenco-600 text-black font-medium py-2 px-4 rounded-lg transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderPayments = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-display font-bold text-white">Payment Options</h2>
      
      {/* Membership Packages */}
      <div className="bg-gray-900 rounded-2xl p-6">
        <h3 className="text-xl font-display font-bold text-flamenco-400 mb-6">Membership Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipPackages.map((pkg) => (
            <div key={pkg.id} className={`bg-gray-800 rounded-xl p-6 border-2 ${
              pkg.current ? 'border-flamenco-500' : 'border-gray-700'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">{pkg.name}</h4>
                {pkg.current && (
                  <span className="bg-flamenco-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    CURRENT
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold text-flamenco-400 mb-4">{pkg.price}</div>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-flamenco-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                pkg.current 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-flamenco-500 hover:bg-flamenco-600 text-black'
              }`} disabled={pkg.current}>
                {pkg.current ? 'Current Plan' : 'Upgrade'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Class Payment */}
      <div className="bg-gray-900 rounded-2xl p-6">
        <h3 className="text-xl font-display font-bold text-flamenco-400 mb-6">Pay for Individual Classes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-4">Single Workshop Pass</h4>
            <div className="text-2xl font-bold text-flamenco-400 mb-4">$35</div>
            <p className="text-gray-300 text-sm mb-6">Access to any single workshop of your choice</p>
            <button className="w-full bg-flamenco-500 hover:bg-flamenco-600 text-black font-medium py-3 px-4 rounded-lg transition-colors">
              Purchase
            </button>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-4">5-Workshop Bundle</h4>
            <div className="text-2xl font-bold text-flamenco-400 mb-4">$150</div>
            <p className="text-gray-300 text-sm mb-6">Save $25 with this 5-workshop package</p>
            <button className="w-full bg-flamenco-500 hover:bg-flamenco-600 text-black font-medium py-3 px-4 rounded-lg transition-colors">
              Purchase
            </button>
          </div>
        </div>
      </div>

      {/* Add-a-Friend Package */}
      <div className="bg-gray-900 rounded-2xl p-6">
        <h3 className="text-xl font-display font-bold text-flamenco-400 mb-6">Add-a-Friend Package</h3>
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-white">Bring a Friend</h4>
            <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-full">
              50% OFF
            </span>
          </div>
          <p className="text-gray-300 mb-4">
            Invite a friend to join any workshop at 50% off the regular price. Perfect for sharing the joy of movement!
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div>
              <div className="text-lg font-bold text-flamenco-400">Your Price: $35</div>
              <div className="text-lg font-bold text-flamenco-400">Friend's Price: $17.50</div>
            </div>
          </div>
          <button className="w-full bg-flamenco-500 hover:bg-flamenco-600 text-black font-medium py-3 px-4 rounded-lg transition-colors">
            Purchase Friend Package
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderProfile = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-display font-bold text-white">Profile Settings</h2>
      
      <div className="bg-gray-900 rounded-2xl p-6">
        <h3 className="text-xl font-display font-bold text-flamenco-400 mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
            <input
              type="text"
              value={user.firstName}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
            <input
              type="text"
              value={user.lastName}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={user.email}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
            <input
              type="tel"
              value={user.phone}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              readOnly
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-flamenco-500 hover:bg-flamenco-600 text-black font-medium py-3 px-6 rounded-lg transition-colors">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-6">
        <h3 className="text-xl font-display font-bold text-flamenco-400 mb-6">Account Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{user.workshopsCompleted}</div>
            <div className="text-gray-400 text-sm">Workshops Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{user.hoursDanced}</div>
            <div className="text-gray-400 text-sm">Hours Danced</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{user.memberStatus}</div>
            <div className="text-gray-400 text-sm">Member Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{user.joinDate}</div>
            <div className="text-gray-400 text-sm">Member Since</div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-display font-bold text-flamenco-500">
                Member Dashboard
              </h1>
              <p className="text-gray-400 text-sm">Welcome back, {user.firstName} {user.lastName}</p>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: '🏠' },
              { id: 'schedule', name: 'My Schedule', icon: '📅' },
              { id: 'payments', name: 'Payments', icon: '💳' },
              { id: 'profile', name: 'Profile', icon: '👤' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'border-flamenco-500 text-flamenco-500'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'schedule' && renderSchedule()}
        {activeTab === 'payments' && renderPayments()}
        {activeTab === 'profile' && renderProfile()}
      </main>

      {/* Class Selection Modal */}
      {showClassSelection && (
        <MemberClassSelection
          classes={classes}
          memberUser={user}
          onEnrollmentUpdate={handleEnrollmentUpdate}
          onClose={() => setShowClassSelection(false)}
        />
      )}
    </div>
  );
};

export default MemberDashboard;