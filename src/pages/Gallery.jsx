import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'therapeutic', name: 'Therapeutic Sessions', icon: '🌱' },
    { id: 'cultural', name: 'Cultural Celebrations', icon: '💃' },
    { id: 'performances', name: 'Performances', icon: '🎭' },
    { id: 'community', name: 'Community Events', icon: '🤝' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'therapeutic',
      title: 'Trauma-Informed Dance Session',
      description: 'Safe space for healing through movement',
      image: 'https://images.pexels.com/photos/3662848/pexels-photo-3662848.jpeg'
    },
    {
      id: 2,
      category: 'cultural',
      title: 'Flamenco Empowerment Workshop',
      description: 'Connecting with passion and strength',
      image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg'
    },
    {
      id: 3,
      category: 'performances',
      title: 'Community Showcase Evening',
      description: 'Students sharing their journey through dance',
      image: 'https://images.pexels.com/photos/3662849/pexels-photo-3662849.jpeg'
    },
    {
      id: 4,
      category: 'community',
      title: 'Adaptive Dance Celebration',
      description: 'Inclusive movement for every body',
      image: 'https://images.pexels.com/photos/3662850/pexels-photo-3662850.jpeg'
    },
    {
      id: 5,
      category: 'therapeutic',
      title: 'Somatic Movement Exploration',
      description: 'Reconnecting with body wisdom',
      image: 'https://images.pexels.com/photos/3662851/pexels-photo-3662851.jpeg'
    },
    {
      id: 6,
      category: 'cultural',
      title: 'Afro-Caribbean Rhythms Class',
      description: 'Ancestral healing through dance',
      image: 'https://images.pexels.com/photos/6173891/pexels-photo-6173891.jpeg'
    },
    {
      id: 7,
      category: 'performances',
      title: 'Contemporary Expression Show',
      description: 'Modern movement storytelling',
      image: 'https://images.pexels.com/photos/3662834/pexels-photo-3662834.jpeg'
    },
    {
      id: 8,
      category: 'community',
      title: 'Dance for Parkinson\'s Group',
      description: 'Building confidence through movement',
      image: 'https://images.pexels.com/photos/3662847/pexels-photo-3662847.jpeg'
    },
    {
      id: 9,
      category: 'therapeutic',
      title: 'Women\'s Embodiment Circle',
      description: 'Sisterhood and empowerment through dance',
      image: 'https://images.pexels.com/photos/3662846/pexels-photo-3662846.jpeg'
    },
    {
      id: 10,
      category: 'cultural',
      title: 'Sacred World Dance Ceremony',
      description: 'Honoring global spiritual traditions',
      image: 'https://images.pexels.com/photos/3662845/pexels-photo-3662845.jpeg'
    },
    {
      id: 11,
      category: 'performances',
      title: 'Hip-Hop Therapy Showcase',
      description: 'Urban culture meets healing arts',
      image: 'https://images.pexels.com/photos/3662844/pexels-photo-3662844.jpeg'
    },
    {
      id: 12,
      category: 'community',
      title: 'Neurodiverse Movement Lab',
      description: 'Inclusive expression for all minds',
      image: 'https://images.pexels.com/photos/3662843/pexels-photo-3662843.jpeg'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
            Movement <span className="text-flamenco-500">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Capturing moments of healing, celebration, and transformation through the art of dance and movement
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

      {/* Category Filter */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`h-12 px-6 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-flamenco-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-display font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
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
              Create Your Own Movement Story
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join our community and become part of the transformative journey. Every class, every movement, every moment is a step toward healing and empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                Start Your Journey
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                View Programs
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
