import React from 'react';
import { motion } from 'framer-motion';

const Performances = () => {
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

  const performances = [
    {
      title: "Healing Through Movement",
      date: "March 15, 2024",
      venue: "Community Arts Center",
      description: "An evening showcasing the therapeutic power of dance, featuring students from our trauma-informed and somatic movement programs.",
      image: "https://images.pexels.com/photos/3662849/pexels-photo-3662849.jpeg",
      type: "Community Showcase"
    },
    {
      title: "Cultural Celebration Gala",
      date: "April 20, 2024",
      venue: "Downtown Theater",
      description: "A vibrant celebration of global dance traditions featuring Afro-Caribbean rhythms, flamenco, and sacred world dance performances.",
      image: "https://images.pexels.com/photos/6173891/pexels-photo-6173891.jpeg",
      type: "Cultural Event"
    },
    {
      title: "Adaptive Dance Showcase",
      date: "May 10, 2024",
      venue: "Inclusive Arts Space",
      description: "Celebrating the beauty and strength of our adaptive dance community, featuring chair-based dance and Parkinson's program participants.",
      image: "https://images.pexels.com/photos/3662850/pexels-photo-3662850.jpeg",
      type: "Adaptive Showcase"
    },
    {
      title: "Contemporary Expressions",
      date: "June 8, 2024",
      venue: "Modern Dance Theater",
      description: "Student performances featuring contemporary, hip-hop therapy, and K-Pop dance styles in a celebration of modern movement.",
      image: "https://images.pexels.com/photos/3662851/pexels-photo-3662851.jpeg",
      type: "Student Performance"
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
            <span className="text-flamenco-500">Performances</span> & Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Witness the transformative power of movement through our community showcases, cultural celebrations, and healing arts performances
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

      {/* Upcoming Performances */}
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
              Upcoming <span className="text-flamenco-500">Events</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for inspiring performances that celebrate healing, culture, inclusion, and artistic expression through the universal language of dance.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {performances.map((performance, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900 rounded-2xl overflow-hidden group hover:bg-gray-800 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={performance.image}
                    alt={performance.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-flamenco-500 text-black text-sm font-semibold rounded-full">
                      {performance.type}
                    </span>
                    <span className="text-flamenco-400 font-bold">
                      {performance.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-flamenco-400 transition-colors">
                    {performance.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4 text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {performance.venue}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {performance.description}
                  </p>
                  
                  <button className="w-full bg-flamenco-500 hover:bg-flamenco-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    Get Tickets
                  </button>
                </div>
              </motion.div>
            ))}
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
              Be Part of Our Performance Community
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Whether as a performer or audience member, join us in celebrating the healing and transformative power of movement through dance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                Join Our Performers
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Performances;
