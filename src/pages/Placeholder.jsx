import { motion } from 'framer-motion';

const Placeholder = ({ title }) => {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          <span className="text-flamenco-500">{title}</span> Page
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          This page is under construction. Please check back soon for updates.
        </p>
      </div>
    </motion.div>
  );
};

export default Placeholder;
