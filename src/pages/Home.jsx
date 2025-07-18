import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-flamenco-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black">
              Begin Your Flamenco Journey
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Whether you're a complete beginner or an experienced dancer, our doors are open to all who wish to explore the passionate world of flamenco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/classes" 
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors text-lg font-medium"
              >
                Start Your Classes
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors text-lg font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
