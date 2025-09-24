import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'apparel', name: 'Dance Apparel', icon: '👕' },
    { id: 'accessories', name: 'Accessories', icon: '💫' },
    { id: 'wellness', name: 'Wellness Tools', icon: '🌱' },
    { id: 'digital', name: 'Digital Content', icon: '📱' }
  ];

  const products = [
    {
      id: 1,
      category: 'apparel',
      title: 'Arte Flamenco Movement Tee',
      price: '$32',
      description: 'Soft, breathable cotton tee perfect for all movement practices',
      image: 'https://images.pexels.com/photos/3662839/pexels-photo-3662839.jpeg',
      featured: true
    },
    {
      id: 2,
      category: 'apparel',
      title: 'Therapeutic Dance Leggings',
      price: '$48',
      description: 'High-waisted, compression leggings designed for comfort and mobility',
      image: 'https://images.pexels.com/photos/3662838/pexels-photo-3662838.jpeg',
      featured: false
    },
    {
      id: 3,
      category: 'accessories',
      title: 'Healing Crystal Set',
      price: '$25',
      description: 'Curated crystals for grounding and energy work during movement',
      image: 'https://images.pexels.com/photos/3662837/pexels-photo-3662837.jpeg',
      featured: true
    },
    {
      id: 4,
      category: 'wellness',
      title: 'Somatic Movement Journal',
      price: '$18',
      description: 'Guided journal for tracking your movement and healing journey',
      image: 'https://images.pexels.com/photos/3662836/pexels-photo-3662836.jpeg',
      featured: false
    },
    {
      id: 5,
      category: 'digital',
      title: 'Trauma-Informed Dance Course',
      price: '$89',
      description: 'Online course with Clarita Corona on therapeutic movement practices',
      image: 'https://images.pexels.com/photos/3662835/pexels-photo-3662835.jpeg',
      featured: true
    },
    {
      id: 6,
      category: 'apparel',
      title: 'Flamenco Practice Skirt',
      price: '$65',
      description: 'Traditional practice skirt for flamenco and cultural dance classes',
      image: 'https://images.pexels.com/photos/3662834/pexels-photo-3662834.jpeg',
      featured: false
    },
    {
      id: 7,
      category: 'accessories',
      title: 'Meditation Cushion',
      price: '$42',
      description: 'Comfortable cushion for pre and post-movement meditation',
      image: 'https://images.pexels.com/photos/3662833/pexels-photo-3662833.jpeg',
      featured: false
    },
    {
      id: 8,
      category: 'wellness',
      title: 'Essential Oil Blend - "Movement"',
      price: '$28',
      description: 'Custom aromatherapy blend to enhance your movement practice',
      image: 'https://images.pexels.com/photos/3662832/pexels-photo-3662832.jpeg',
      featured: true
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
            Movement <span className="text-flamenco-500">Shop</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Curated products to support your healing journey, enhance your practice, and celebrate your movement story
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
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-500"
              >
                {product.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-flamenco-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    FEATURED
                  </div>
                )}
                
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-flamenco-400">
                      {product.price}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-display font-bold mb-3 group-hover:text-flamenco-400 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <button className="w-full bg-flamenco-500 hover:bg-flamenco-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Clarita's <span className="text-flamenco-500">Recommendations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Personally selected products that support your movement journey, enhance your practice, and honor the therapeutic power of dance.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {products.filter(product => product.featured).map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-flamenco-500 text-black text-sm font-bold rounded-full">
                      FEATURED
                    </span>
                    <span className="text-flamenco-400 font-bold text-xl">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-flamenco-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <button className="w-full bg-flamenco-500 hover:bg-flamenco-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    Add to Cart
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
              Support Your Movement Journey
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Every purchase supports our mission to make healing movement accessible to all. Join our community and invest in your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                View All Products
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                Gift Cards Available
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
