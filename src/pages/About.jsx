import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const stats = [
    { number: "26", label: "Dance Styles Offered" },
    { number: "500+", label: "Students Transformed" },
    { number: "15+", label: "Years of Experience" },
    { number: "4", label: "Specialized Programs" }
  ];

  const values = [
    {
      title: "Therapeutic Healing",
      description: "We believe in the profound healing power of movement, offering specialized therapeutic and somatic dance programs for emotional, physical, and spiritual wellness.",
      icon: "🌱"
    },
    {
      title: "Inclusive Community",
      description: "Our adaptive and accessible classes ensure that every body can experience the joy of dance, regardless of ability, age, or background.",
      icon: "🤝"
    },
    {
      title: "Cultural Celebration",
      description: "We honor diverse dance traditions from around the world, creating spaces for cultural connection and empowerment through movement.",
      icon: "🌍"
    },
    {
      title: "Personal Expression",
      description: "From trending styles to classical techniques, we provide pathways for every individual to discover their unique voice through dance.",
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            Our <span className="text-flamenco-500">Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The visionary journey of Clarita Corona and the evolution of movement as medicine
          </p>
        </motion.div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                The Vision of <span className="text-flamenco-500">Clarita Corona</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Arte Flamenco was born from the visionary spirit of Clarita Corona, an acclaimed artist and educator whose revolutionary approach to dance education has transformed countless lives. What began as a celebration of traditional flamenco has evolved into a comprehensive movement sanctuary where healing, culture, and artistic expression converge under Clarita's masterful guidance.
                </p>
                <p className="text-lg">
                  With over 15 years of distinguished experience spanning international performance stages, therapeutic movement certification, and adaptive dance instruction, Clarita recognized that dance transcends entertainment—it is medicine for the soul. Her innovative methodology now encompasses 26 distinct movement modalities across four specialized programs: Therapeutic & Somatic Movement, Adaptive & Healing Classes, Cultural & Empowering Styles, and Trending & Technique-Based Classes.
                </p>
                <p className="text-lg">
                  Under Clarita's leadership, Arte Flamenco has become more than a dance studio—it's a transformative sanctuary where students discover their authentic selves through movement, heal from trauma through therapeutic dance, celebrate cultural heritage, and build unshakeable confidence through artistic expression. Every class reflects Clarita's core belief that movement is a fundamental human right and powerful healing modality.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3662851/pexels-photo-3662851.jpeg"
                  alt="Clarita Corona leading a transformative movement session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-flamenco-500 text-black p-6 rounded-xl">
                <p className="font-bold text-lg">Clarita Corona</p>
                <p className="text-sm">Founder, Acclaimed Artist & Educator</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-flamenco-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clarita's Journey Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Clarita's <span className="text-flamenco-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From acclaimed international performer to pioneering movement therapist, Clarita Corona's path has been one of continuous evolution and deep commitment to the transformative power of dance.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl"
            >
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-2xl font-display font-bold mb-4 text-flamenco-400">
                Acclaimed Artist
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Clarita's artistry has graced international stages from Madrid's prestigious theaters to New York's cultural venues. Her performances blend traditional flamenco mastery with contemporary innovation, earning critical acclaim and touching audiences worldwide.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl"
            >
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-display font-bold mb-4 text-flamenco-400">
                Pioneering Educator
              </h3>
              <p className="text-gray-300 leading-relaxed">
                As an educator, Clarita has revolutionized dance instruction by integrating therapeutic principles with cultural traditions. Her innovative teaching methodology has trained hundreds of instructors and transformed thousands of students' relationships with movement.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl"
            >
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-2xl font-display font-bold mb-4 text-flamenco-400">
                Healing Advocate
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Clarita's certification in somatic movement therapy and trauma-informed practices reflects her deep commitment to dance as medicine. She has pioneered adaptive programs that make movement accessible to all bodies and abilities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-flamenco-500">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guided by Clarita's vision, Arte Flamenco operates on the fundamental belief that movement is medicine, culture is connection, and every body has the inherent right to dance and heal.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-4 text-flamenco-400">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Clarita's <span className="text-flamenco-500">Programs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four specialized pathways designed by Clarita to meet you wherever you are in your movement journey, honoring both healing and artistic expression.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Therapeutic & Somatic Movement",
                description: "Clarita's evidence-based movement practices for healing, stress relief, and emotional wellness. Includes Dance/Movement Therapy, trauma-informed classes, and specialized workshops for anxiety, grief, and women's embodiment.",
                image: "https://images.pexels.com/photos/3662848/pexels-photo-3662848.jpeg",
                classes: "8 specialized classes"
              },
              {
                title: "Adaptive & Healing Classes",
                description: "Inclusive movement programs designed by Clarita for diverse abilities and health conditions. Chair-based dance, Parkinson's programs, chronic pain support, and neurodiverse movement labs.",
                image: "https://images.pexels.com/photos/3662850/pexels-photo-3662850.jpeg",
                classes: "4 adaptive programs"
              },
              {
                title: "Cultural & Empowering Styles",
                description: "Celebrate global dance traditions while building personal empowerment. From Afro-Caribbean rhythms to sacred world dance, flamenco empowerment, and Latin fusion—all guided by Clarita's cultural sensitivity.",
                image: "https://images.pexels.com/photos/6173891/pexels-photo-6173891.jpeg",
                classes: "5 cultural styles"
              },
              {
                title: "Trending & Technique-Based",
                description: "Contemporary and classical techniques for artistic development and fitness. Ballet, contemporary, hip-hop therapy, K-Pop, salsa, tap, and ecstatic dance—all infused with Clarita's therapeutic approach.",
                image: "https://images.pexels.com/photos/3662834/pexels-photo-3662834.jpeg",
                classes: "9 technique classes"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-flamenco-500/20 text-flamenco-400 text-sm font-medium rounded-full">
                      {program.classes}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-flamenco-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {program.description}
                  </p>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black">
              Join Clarita's Movement Revolution
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Whether you're seeking healing, cultural connection, artistic expression, or pure joy—Clarita's transformative programs await. Join our inclusive community where every body belongs and every story matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                Explore Our Programs
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                Meet Clarita
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
