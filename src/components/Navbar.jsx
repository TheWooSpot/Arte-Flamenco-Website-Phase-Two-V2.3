import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import MemberAuth from './MemberAuth';
import MemberDashboard from '../pages/MemberDashboard';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showMemberAuth, setShowMemberAuth] = useState(false);
  const [memberUser, setMemberUser] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Touch event handlers for mobile compatibility
  const handleTouchStart = (e) => {
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'Performances', path: '/performances' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Shop', path: '/shop' },
  ];

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    setShowAdminLogin(false);
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  const handleMemberLogin = (user) => {
    setMemberUser(user);
    setShowMemberAuth(false);
  };

  const handleMemberLogout = () => {
    setMemberUser(null);
  };

  // If admin is logged in, show the dashboard instead of the regular site
  if (isAdminLoggedIn) {
    return <AdminDashboard onLogout={handleAdminLogout} />;
  }

  // If member is logged in, show the member dashboard
  if (memberUser) {
    return <MemberDashboard user={memberUser} onLogout={handleMemberLogout} />;
  }

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-bold text-white">
            <span className="text-flamenco-600">Arte</span> Flamenco
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-wider hover:text-flamenco-500 transition-colors ${
                  location.pathname === link.path ? 'text-flamenco-500' : 'text-white'
                }`}
                style={{ fontSize: '0.945rem' }}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setShowAdminLogin(true)}
              className="ml-4 px-4 py-2 bg-flamenco-500 hover:bg-flamenco-600 text-black font-medium rounded-lg transition-colors duration-300 text-sm"
            >
              Admin
            </button>
            <button
              onClick={() => setShowMemberAuth(true)}
              className="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-sm"
            >
              Member Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm uppercase tracking-wider hover:text-flamenco-500 transition-colors ${
                      location.pathname === link.path ? 'text-flamenco-500' : 'text-white'
                    }`}
                    style={{ fontSize: '0.945rem' }}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setShowAdminLogin(true);
                    setIsOpen(false);
                  }}
                  className="mt-4 px-4 py-2 bg-flamenco-500 hover:bg-flamenco-600 text-black font-medium rounded-lg transition-colors duration-300 text-sm"
                >
                  Admin Login
                </button>
                <button
                  onClick={() => {
                    setShowMemberAuth(true);
                    setIsOpen(false);
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-sm"
                >
                  Member Login
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <AdminLogin 
          onLogin={handleAdminLogin}
          onClose={() => setShowAdminLogin(false)}
        />
      )}

      {/* Member Auth Modal */}
      {showMemberAuth && (
        <MemberAuth 
          onLogin={handleMemberLogin}
          onClose={() => setShowMemberAuth(false)}
        />
      )}
    </>
  );
};

export default Navbar;
