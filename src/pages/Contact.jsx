import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Studio Location',
      details: ['123 Movement Way', 'Healing Arts District', 'San Francisco, CA 94102']
    },
    {
      icon: '📞',
      title: 'Phone & Text',
      details: ['(415) 555-MOVE', '(415) 555-6683', 'Text for quick responses']
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['hello@arteflamenco.com', 'clarita@arteflamenco.com', 'We respond within 24 hours']
    },
    {
      icon: '🕒',
      title: 'Studio Hours',
      details: ['Monday - Friday: 9am - 9pm', 'Saturday: 8am - 6pm', 'Sunday: 10am - 5pm']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3662851/pexels-photo-3662851.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            Connect with <span className="text-flamenco-500">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Begin your healing journey through movement. We're here to support you every step of the way
          </p>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Get in <span className="text-flamenco-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're ready to start your movement journey or have questions about our programs, we're here to help you find the perfect path to healing and empowerment.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900 p-6 rounded-2xl text-center hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-display font-bold mb-4 text-flamenco-400">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-bold mb-6 text-flamenco-400">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                    />
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
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                      Program Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white"
                    >
                      <option value="">Select a program</option>
                      <option value="therapeutic">Therapeutic & Somatic</option>
                      <option value="adaptive">Adaptive & Healing</option>
                      <option value="cultural">Cultural & Empowering</option>
                      <option value="trending">Trending & Technique</option>
                      <option value="consultation">Personal Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-flamenco-500 focus:border-transparent text-white resize-none"
                    placeholder="Tell us about your movement goals, any physical considerations, or questions you have about our programs..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-flamenco-500 hover:bg-flamenco-600 text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 text-flamenco-400">
                  Meet Clarita Corona
                </h3>
                <div className="bg-gray-900 rounded-2xl p-8">
                  <img 
                    src="https://images.pexels.com/photos/3662840/pexels-photo-3662840.jpeg"
                    alt="Clarita Corona, Founder and Lead Instructor"
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <p className="text-gray-300 leading-relaxed mb-4">
                    As the founder of Arte Flamenco, I believe every body has the inherent right to move, heal, and express itself authentically. My approach combines 15+ years of performance experience with certified therapeutic training to create inclusive spaces where movement becomes medicine.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Whether you're seeking healing from trauma, celebrating cultural heritage, or exploring new forms of artistic expression, I'm here to guide you on your unique movement journey.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <p className="text-flamenco-400 font-semibold">Clarita Corona</p>
                    <p className="text-gray-400 text-sm">Founder, Acclaimed Artist & Educator</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-flamenco-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-black">
              Your Movement Journey Starts Here
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Take the first step toward healing, empowerment, and authentic self-expression. We're excited to welcome you into our inclusive movement community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                View Class Schedule
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
