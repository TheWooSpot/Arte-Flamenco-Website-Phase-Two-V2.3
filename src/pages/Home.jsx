import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useInterval from '../hooks/useInterval';

const Home = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const transformationStories = [
    {
      id: 1,
      quote: "The trauma-informed dance classes helped me reconnect with my body after years of disconnection. Clarita's gentle approach created a safe space for healing I never thought possible.",
      name: "Sarah Chen",
      role: "Trauma-Informed Dance Student",
      image: "https://images.pexels.com/photos/3662848/pexels-photo-3662848.jpeg"
    },
    {
      id: 2,
      quote: "As someone with Parkinson's, the adaptive dance program has given me back my confidence and joy in movement. The community here understands and celebrates every small victory.",
      name: "Robert Martinez",
      role: "Dance for Parkinson's Participant",
      image: "https://images.pexels.com/photos/3662845/pexels-photo-3662845.jpeg"
    },
    {
      id: 3,
      quote: "The Afro-Caribbean healing rhythms class connected me to my ancestral roots while providing a powerful outlet for stress. It's therapy, culture, and celebration all in one.",
      name: "Amara Johnson",
      role: "Cultural Dance Student",
      image: "https://images.pexels.com/photos/3662842/pexels-photo-3662842.jpeg"
    },
    {
      id: 4,
      quote: "Through somatic movement exploration, I've learned to listen to my body's wisdom and release years of stored tension. This practice has transformed how I move through life.",
      name: "Elena Rodriguez",
      role: "Somatic Movement Student",
      image: "https://images.pexels.com/photos/3662850/pexels-photo-3662850.jpeg"
    },
    {
      id: 5,
      quote: "The women's embodiment workshops have helped me reclaim my power and sensuality in a safe, supportive environment. I've found my voice through movement.",
      name: "Maya Patel",
      role: "Embodiment Workshop Participant",
      image: "https://images.pexels.com/photos/3662847/pexels-photo-3662847.jpeg"
    }
  ];

  const programs = [
    {
      id: 1,
      title: "Therapeutic & Somatic",
      description: "Evidence-based movement therapy, trauma-informed dance, anxiety relief, and somatic exploration for healing and wellness.",
      classCount: "8 Classes",
      image: "https://images.pexels.com/photos/3662848/pexels-photo-3662848.jpeg",
      color: "bg-emerald-500"
    },
    {
      id: 2,
      title: "Adaptive & Healing",
      description: "Inclusive programs for diverse abilities including chair-based dance, Parkinson's support, and neurodiverse movement labs.",
      classCount: "4 Programs",
      image: "https://images.pexels.com/photos/6173891/pexels-photo-6173891.jpeg",
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Cultural & Empowering",
      description: "Celebrate global traditions through Afro-Caribbean rhythms, sacred world dance, flamenco empowerment, and Latin fusion.",
      classCount: "5 Styles",
      image: "https://images.pexels.com/photos/3662840/pexels-photo-3662840.jpeg",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Trending & Technique",
      description: "Contemporary and classical techniques including hip-hop therapy, K-Pop, ballet, contemporary, salsa, and ecstatic dance.",
      classCount: "9 Classes",
      image: "https://images.pexels.com/photos/3662832/pexels-photo-3662832.jpeg",
      color: "bg-orange-500"
    }
  ];

  // Auto-advance carousel using custom hook
  useInterval(() => {
    setCurrentStory((prev) => (prev + 1) % transformationStories.length);
  }, 5000);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % transformationStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + transformationStories.length) % transformationStories.length);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Styled like Classes page */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <span className="text-white">Arte</span> <span className="text-flamenco-500">Flamenco</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 space-y-2">
            <p>Step Into a World Where Dance Speaks the Language of the Soul</p>
            <p>Immerse Yourself in the Passion, Power, and Poetry of Dance</p>
            <p>Experience the passion, rhythm, and soul of dance in our studio and performances.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/classes" 
              className="px-8 py-4 bg-flamenco-500 text-white rounded-full hover:bg-flamenco-600 transition-colors text-lg font-medium"
            >
              Join Our Classes
            </Link>
            <Link 
              to="/gallery" 
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors text-lg font-medium"
            >
              Upcoming Shows
            </Link>
          </div>
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

      {/* Movement as Medicine Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">
              Movement as <span className="text-flamenco-500">Medicine</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Founded by movement therapist Clarita Corona, Arte Flamenco has evolved from a traditional 
                flamenco studio into a comprehensive movement sanctuary. We offer 26 diverse dance and 
                movement modalities across four specialized programs designed for healing, empowerment, and 
                artistic expression.
              </p>
              
              <p>
                Our approach honors both therapeutic principles and cultural traditions, creating inclusive spaces 
                where every body can experience the transformative power of movement. From trauma-informed 
                dance therapy to adaptive classes, cultural celebrations to trending techniques—we meet you 
                wherever you are in your movement journey.
              </p>
            </div>
            
            <motion.div 
              className="mt-8"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                to="/about" 
                className="inline-flex items-center text-flamenco-500 hover:text-flamenco-400 transition-colors text-lg font-medium"
              >
                Discover our full story 
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-flamenco-500">Programs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four specialized pathways offering 26 diverse movement modalities designed for healing, 
              empowerment, cultural connection, and artistic expression.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 ${program.color} text-black text-sm font-semibold rounded-full`}>
                    {program.classCount}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-flamenco-400 transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {program.description}
                  </p>
                  
                  <motion.div 
                    className="inline-flex items-center text-flamenco-500 hover:text-flamenco-400 transition-colors text-sm font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore classes 
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/classes" 
              className="inline-block bg-flamenco-500 hover:bg-flamenco-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation Stories Carousel */}
      <section className="py-20 px-6 bg-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Transformation <span className="text-flamenco-500">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from those who have experienced the healing and empowering journey of movement 
              at Arte Flamenco.
            </p>
          </motion.div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <motion.div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentStory * 100}%)` }}
              >
                {transformationStories.map((story) => (
                  <div key={story.id} className="w-full flex-shrink-0">
                    <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mx-4">
                      <div className="max-w-4xl mx-auto text-center">
                        <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-gray-200 italic">
                          "{story.quote}"
                        </blockquote>
                        
                        <div className="flex items-center justify-center gap-4">
                          <img 
                            src={story.image}
                            alt={story.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="text-left">
                            <h4 className="text-lg font-semibold text-white">{story.name}</h4>
                            <p className="text-flamenco-400 text-sm">{story.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-flamenco-500 hover:bg-flamenco-600 text-white p-3 rounded-full transition-colors duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button 
              onClick={nextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-flamenco-500 hover:bg-flamenco-600 text-white p-3 rounded-full transition-colors duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {transformationStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentStory ? 'bg-flamenco-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Arte Flamenco Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Why Choose <span className="text-flamenco-500">Arte Flamenco</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More than a dance studio—we're a movement sanctuary where healing, culture, and artistry converge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧘‍♀️",
                title: "Therapeutic Approach",
                description: "Evidence-based movement therapy led by certified professionals, designed for healing and wellness."
              },
              {
                icon: "♿",
                title: "Inclusive & Adaptive",
                description: "Programs designed for all bodies and abilities, ensuring everyone can experience the joy of movement."
              },
              {
                icon: "🌍",
                title: "Cultural Celebration",
                description: "Honor diverse traditions through authentic cultural dances that connect you to global heritage."
              },
              {
                icon: "🎭",
                title: "Artistic Expression",
                description: "Explore your creativity through contemporary and classical techniques that nurture artistic growth."
              },
              {
                icon: "👥",
                title: "Community Connection",
                description: "Join a supportive community where every individual is celebrated and encouraged to thrive."
              },
              {
                icon: "🌟",
                title: "Holistic Wellness",
                description: "Experience physical, emotional, and spiritual benefits through our comprehensive movement programs."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold mb-3 text-flamenco-400">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
