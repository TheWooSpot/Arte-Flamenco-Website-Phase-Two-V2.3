import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Classes = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [skillFilter, setSkillFilter] = useState('all');
  const [dayFilter, setDayFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Classes', icon: '🌟', color: 'bg-flamenco-500' },
    { id: 'therapeutic', name: 'Therapeutic & Somatic', icon: '🧘‍♀️', color: 'bg-emerald-500' },
    { id: 'adaptive', name: 'Adaptive & Healing', icon: '♿', color: 'bg-blue-500' },
    { id: 'cultural', name: 'Cultural & Empowering', icon: '💃', color: 'bg-purple-500' },
    { id: 'trending', name: 'Trending & Technique', icon: '🔥', color: 'bg-orange-500' }
  ];

  const skillLevels = [
    { id: 'all', name: 'All Levels', color: 'bg-flamenco-500' },
    { id: 'beginner', name: 'Beginner', color: 'bg-green-500' },
    { id: 'intermediate', name: 'Intermediate', color: 'bg-yellow-500' },
    { id: 'advanced', name: 'Advanced', color: 'bg-red-500' }
  ];

  const daysOfWeek = [
    { id: 'all', name: 'Any Day', color: 'bg-flamenco-500' },
    { id: 'monday', name: 'Monday', color: 'bg-pink-500' },
    { id: 'tuesday', name: 'Tuesday', color: 'bg-indigo-500' },
    { id: 'wednesday', name: 'Wednesday', color: 'bg-teal-500' },
    { id: 'thursday', name: 'Thursday', color: 'bg-cyan-500' },
    { id: 'friday', name: 'Friday', color: 'bg-violet-500' },
    { id: 'saturday', name: 'Saturday', color: 'bg-rose-500' },
    { id: 'sunday', name: 'Sunday', color: 'bg-amber-500' }
  ];

  const classes = [
    // Therapeutic & Somatic Movement
    {
      id: 1,
      title: "Dance/Movement Therapy (DMT)",
      category: "therapeutic",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["tuesday", "thursday"],
      duration: "75 minutes",
      price: "$40 per session",
      schedule: "Tuesdays & Thursdays 6:00 PM",
      description: "Evidence-based therapeutic approach using movement and dance to promote emotional, cognitive, physical, and social integration. Led by certified dance/movement therapist.",
      highlights: [
        "Certified therapeutic approach",
        "Emotional regulation techniques", 
        "Body awareness development",
        "Stress and trauma processing",
        "Group and individual options"
      ],
      image: "https://images.pexels.com/photos/3662848/pexels-photo-3662848.jpeg"
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
      description: "Gentle, mindful movement practices that help you reconnect with your body's natural wisdom and release chronic tension patterns.",
      highlights: [
        "Body awareness cultivation",
        "Tension release techniques",
        "Mindful movement practices",
        "Nervous system regulation",
        "Self-discovery through movement"
      ],
      image: "https://images.pexels.com/photos/3662850/pexels-photo-3662850.jpeg"
    },
    {
      id: 3,
      title: "Expressive Arts Dance",
      category: "therapeutic",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["friday"],
      duration: "90 minutes",
      price: "$42 per class",
      schedule: "Fridays 5:00 PM",
      description: "Creative movement combining dance with visual arts, music, and poetry for holistic self-expression and healing.",
      highlights: [
        "Multi-modal artistic expression",
        "Creative healing process",
        "Personal narrative exploration",
        "Community art creation",
        "Therapeutic integration"
      ],
      image: "https://images.pexels.com/photos/3662851/pexels-photo-3662851.jpeg"
    },
    {
      id: 4,
      title: "Trauma-Informed Dance",
      category: "therapeutic",
      skillLevels: ["beginner", "intermediate"],
      days: ["saturday"],
      duration: "90 minutes",
      price: "$45 per session",
      schedule: "Saturdays 2:00 PM",
      description: "Safe, supportive movement space designed specifically for trauma survivors. Emphasizes choice, empowerment, and gentle re-embodiment.",
      highlights: [
        "Trauma-informed principles",
        "Safety and choice emphasis",
        "Gentle re-embodiment",
        "Nervous system support",
        "Certified trauma-informed instructor"
      ],
      image: "https://images.pexels.com/photos/3662834/pexels-photo-3662834.jpeg"
    },
    {
      id: 5,
      title: "Movement for Anxiety & Stress Relief",
      category: "therapeutic",
      skillLevels: ["beginner"],
      days: ["monday", "wednesday"],
      duration: "45 minutes",
      price: "$30 per class",
      schedule: "Mondays & Wednesdays 12:00 PM",
      description: "Targeted movement practices designed to calm the nervous system, reduce anxiety, and build resilience through gentle, rhythmic movement.",
      highlights: [
        "Anxiety reduction techniques",
        "Nervous system calming",
        "Breathing integration",
        "Stress management tools",
        "Accessible for all bodies"
      ],
      image: "https://images.pexels.com/photos/3662849/pexels-photo-3662849.jpeg"
    },
    {
      id: 6,
      title: "Grief Movement Circles",
      category: "therapeutic",
      skillLevels: ["beginner", "intermediate"],
      days: ["sunday"],
      duration: "90 minutes",
      price: "$40 per session",
      schedule: "First Sunday of each month 3:00 PM",
      description: "Sacred space for processing grief and loss through movement, ritual, and community support. Honors all forms of loss and transition.",
      highlights: [
        "Grief processing support",
        "Ritual and ceremony",
        "Community healing",
        "Emotional expression",
        "Sacred space holding"
      ],
      image: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg"
    },
    {
      id: 7,
      title: "Women's Embodiment Workshops",
      category: "therapeutic",
      skillLevels: ["intermediate", "advanced"],
      days: ["saturday"],
      duration: "2 hours",
      price: "$55 per workshop",
      schedule: "Monthly Saturdays - Check Calendar",
      description: "Empowering workshops exploring feminine embodiment, sensuality, and personal power through movement, breathwork, and sisterhood.",
      highlights: [
        "Feminine embodiment",
        "Sensuality exploration",
        "Personal empowerment",
        "Sisterhood connection",
        "Body positivity focus"
      ],
      image: "https://images.pexels.com/photos/3662847/pexels-photo-3662847.jpeg"
    },
    {
      id: 8,
      title: "Family Movement Therapy",
      category: "therapeutic",
      skillLevels: ["beginner"],
      days: ["sunday"],
      duration: "60 minutes",
      price: "$50 per family",
      schedule: "Sundays 11:00 AM",
      description: "Therapeutic movement sessions designed for families to connect, communicate, and heal together through guided movement experiences.",
      highlights: [
        "Family bonding activities",
        "Communication through movement",
        "Intergenerational healing",
        "Playful therapeutic approach",
        "Relationship strengthening"
      ],
      image: "https://images.pexels.com/photos/3662846/pexels-photo-3662846.jpeg"
    },

    // Adaptive & Healing Classes
    {
      id: 9,
      title: "Chair-Based Dance",
      category: "adaptive",
      skillLevels: ["beginner", "intermediate"],
      days: ["tuesday", "friday"],
      duration: "45 minutes",
      price: "$25 per class",
      schedule: "Tuesdays & Fridays 10:00 AM",
      description: "Joyful, energizing dance classes designed for those who use wheelchairs or prefer seated movement. Full-body expression and cardiovascular benefits.",
      highlights: [
        "Wheelchair accessible",
        "Full-body engagement",
        "Cardiovascular benefits",
        "Social connection",
        "Adaptive choreography"
      ],
      image: "https://images.pexels.com/photos/6173891/pexels-photo-6173891.jpeg"
    },
    {
      id: 10,
      title: "Dance for Parkinson's",
      category: "adaptive",
      skillLevels: ["beginner", "intermediate"],
      days: ["monday", "thursday"],
      duration: "60 minutes",
      price: "$20 per class",
      schedule: "Mondays & Thursdays 11:00 AM",
      description: "Evidence-based dance program specifically designed for people with Parkinson's disease. Improves balance, coordination, and quality of life.",
      highlights: [
        "Parkinson's-specific benefits",
        "Balance improvement",
        "Coordination training",
        "Social engagement",
        "Research-backed approach"
      ],
      image: "https://images.pexels.com/photos/3662845/pexels-photo-3662845.jpeg"
    },
    {
      id: 11,
      title: "Gentle Movement for Chronic Pain",
      category: "adaptive",
      skillLevels: ["beginner"],
      days: ["wednesday"],
      duration: "50 minutes",
      price: "$30 per class",
      schedule: "Wednesdays 2:00 PM",
      description: "Therapeutic movement class designed for those living with chronic pain conditions. Focus on gentle mobility, pain management, and nervous system support.",
      highlights: [
        "Chronic pain support",
        "Gentle mobility work",
        "Pain management techniques",
        "Nervous system care",
        "Adaptive modifications"
      ],
      image: "https://images.pexels.com/photos/3662844/pexels-photo-3662844.jpeg"
    },
    {
      id: 12,
      title: "Neurodiverse Movement Labs",
      category: "adaptive",
      skillLevels: ["beginner", "intermediate"],
      days: ["saturday"],
      duration: "60 minutes",
      price: "$35 per class",
      schedule: "Saturdays 10:00 AM",
      description: "Inclusive movement exploration designed for neurodiverse individuals. Sensory-friendly environment with flexible structure and multiple expression options.",
      highlights: [
        "Neurodiverse-friendly",
        "Sensory considerations",
        "Flexible structure",
        "Multiple expression modes",
        "Inclusive community"
      ],
      image: "https://images.pexels.com/photos/3662843/pexels-photo-3662843.jpeg"
    },

    // Cultural & Empowering Styles
    {
      id: 13,
      title: "Afro-Caribbean Healing Rhythms",
      category: "cultural",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["sunday"],
      duration: "75 minutes",
      price: "$35 per class",
      schedule: "Sundays 4:00 PM",
      description: "Connect with ancestral wisdom through traditional Afro-Caribbean dances. Healing rhythms that celebrate heritage and build community connection.",
      highlights: [
        "Ancestral connection",
        "Traditional rhythms",
        "Cultural celebration",
        "Community building",
        "Healing through heritage"
      ],
      image: "https://images.pexels.com/photos/3662842/pexels-photo-3662842.jpeg"
    },
    {
      id: 14,
      title: "Sacred World Dance",
      category: "cultural",
      skillLevels: ["beginner", "intermediate"],
      days: ["saturday"],
      duration: "90 minutes",
      price: "$40 per class",
      schedule: "First Saturday of each month 6:00 PM",
      description: "Journey through sacred dances from around the world. Meditative, ceremonial movement practices that honor diverse spiritual traditions.",
      highlights: [
        "Global sacred traditions",
        "Meditative movement",
        "Ceremonial practices",
        "Spiritual connection",
        "Cultural respect"
      ],
      image: "https://images.pexels.com/photos/3662841/pexels-photo-3662841.jpeg"
    },
    {
      id: 15,
      title: "Flamenco for Emotional Empowerment",
      category: "cultural",
      skillLevels: ["intermediate", "advanced"],
      days: ["tuesday", "thursday"],
      duration: "75 minutes",
      price: "$40 per class",
      schedule: "Tuesdays & Thursdays 7:30 PM",
      description: "Traditional flamenco techniques combined with emotional empowerment practices. Channel passion, strength, and authentic self-expression.",
      highlights: [
        "Traditional flamenco technique",
        "Emotional empowerment",
        "Authentic expression",
        "Passion cultivation",
        "Personal strength building"
      ],
      image: "https://images.pexels.com/photos/3662840/pexels-photo-3662840.jpeg"
    },
    {
      id: 16,
      title: "Tahitian & Polynesian Dance",
      category: "cultural",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["friday"],
      duration: "60 minutes",
      price: "$38 per class",
      schedule: "Fridays 6:30 PM",
      description: "Experience the joy and power of Polynesian dance traditions. Connect with island culture through authentic movements and storytelling.",
      highlights: [
        "Polynesian cultural traditions",
        "Storytelling through dance",
        "Hip and core strengthening",
        "Cultural appreciation",
        "Joyful expression"
      ],
      image: "https://images.pexels.com/photos/3662839/pexels-photo-3662839.jpeg"
    },
    {
      id: 17,
      title: "Latin Fusion (Cumbia, Bachata, Reggaetón)",
      category: "cultural",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["friday"],
      duration: "60 minutes",
      price: "$30 per class",
      schedule: "Fridays 7:00 PM",
      description: "Energetic fusion of cumbia, bachata, and reggaetón. Celebrate Latin culture while building confidence, community, and cardiovascular fitness.",
      highlights: [
        "Multiple Latin styles",
        "Cultural celebration",
        "Confidence building",
        "Community connection",
        "Fitness benefits"
      ],
      image: "https://images.pexels.com/photos/3662838/pexels-photo-3662838.jpeg"
    },

    // Trending & Technique-Based Classes
    {
      id: 18,
      title: "Salsa (Social & Solo)",
      category: "trending",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["thursday"],
      duration: "60 minutes",
      price: "$30 per class",
      schedule: "Thursdays 8:00 PM",
      description: "Learn salsa in both partner and solo formats. Build social connection, rhythm, and confidence in this vibrant Latin dance tradition.",
      highlights: [
        "Partner and solo options",
        "Social connection",
        "Rhythm development",
        "Confidence building",
        "Latin tradition"
      ],
      image: "https://images.pexels.com/photos/3662837/pexels-photo-3662837.jpeg"
    },
    {
      id: 19,
      title: "Tap Dance",
      category: "trending",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["monday", "wednesday"],
      duration: "60 minutes",
      price: "$32 per class",
      schedule: "Mondays & Wednesdays 5:30 PM",
      description: "Develop rhythm and musicality through the percussive art of tap dance. Build coordination, timing, and musical expression.",
      highlights: [
        "Rhythm and musicality",
        "Coordination development",
        "Musical expression",
        "Percussive technique",
        "Performance skills"
      ],
      image: "https://images.pexels.com/photos/3662836/pexels-photo-3662836.jpeg"
    },
    {
      id: 20,
      title: "Ballet (Classical & Therapeutic)",
      category: "trending",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["tuesday", "saturday"],
      duration: "75 minutes",
      price: "$35 per class",
      schedule: "Tuesdays & Saturdays 9:00 AM",
      description: "Classical ballet technique with therapeutic modifications. Build strength, grace, and posture while honoring individual body needs.",
      highlights: [
        "Classical technique",
        "Therapeutic modifications",
        "Strength building",
        "Posture improvement",
        "Individual adaptations"
      ],
      image: "https://images.pexels.com/photos/3662835/pexels-photo-3662835.jpeg"
    },
    {
      id: 21,
      title: "Contemporary & Lyrical",
      category: "trending",
      skillLevels: ["intermediate", "advanced"],
      days: ["monday"],
      duration: "75 minutes",
      price: "$35 per class",
      schedule: "Mondays 7:00 PM",
      description: "Emotional storytelling through contemporary dance. Develop technical skills while exploring personal narrative and artistic expression.",
      highlights: [
        "Emotional storytelling",
        "Technical development",
        "Personal narrative",
        "Artistic expression",
        "Creative exploration"
      ],
      image: "https://images.pexels.com/photos/3662834/pexels-photo-3662834.jpeg"
    },
    {
      id: 22,
      title: "Hip-Hop Therapy",
      category: "trending",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["wednesday"],
      duration: "60 minutes",
      price: "$30 per class",
      schedule: "Wednesdays 6:00 PM",
      description: "High-energy hip-hop combined with therapeutic principles. Build confidence, release stress, and connect with community through urban dance culture.",
      highlights: [
        "Therapeutic hip-hop",
        "Confidence building",
        "Stress release",
        "Urban culture connection",
        "Community vibes"
      ],
      image: "https://images.pexels.com/photos/3662833/pexels-photo-3662833.jpeg"
    },
    {
      id: 23,
      title: "Jazz Funk",
      category: "trending",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["tuesday"],
      duration: "60 minutes",
      price: "$32 per class",
      schedule: "Tuesdays 6:30 PM",
      description: "Trendy choreography combining jazz technique with funk attitude. Fun, high-energy classes focused on style, performance, and fitness.",
      highlights: [
        "Trendy choreography",
        "Performance style",
        "High-energy fitness",
        "Jazz technique",
        "Funk attitude"
      ],
      image: "https://images.pexels.com/photos/3662832/pexels-photo-3662832.jpeg"
    },
    {
      id: 24,
      title: "K-Pop Dance",
      category: "trending",
      skillLevels: ["beginner", "intermediate"],
      days: ["saturday"],
      duration: "60 minutes",
      price: "$25 per class",
      schedule: "Saturdays 1:00 PM",
      description: "Learn popular K-Pop choreography in a fun, supportive environment. Perfect for teens and young adults looking to connect with contemporary culture.",
      highlights: [
        "Popular choreography",
        "Contemporary culture",
        "Teen-friendly",
        "Fun atmosphere",
        "Social connection"
      ],
      image: "https://images.pexels.com/photos/3662831/pexels-photo-3662831.jpeg"
    },
    {
      id: 25,
      title: "Zumba® Latin Cardio",
      category: "trending",
      skillLevels: ["beginner", "intermediate"],
      days: ["monday", "wednesday", "friday"],
      duration: "45 minutes",
      price: "$20 per class",
      schedule: "Mon/Wed/Fri 6:00 AM & 7:00 PM",
      description: "Accessible Latin-inspired cardio dance for all fitness levels. High-energy, fun workout that feels more like a party than exercise.",
      highlights: [
        "Latin-inspired cardio",
        "All fitness levels",
        "High-energy workout",
        "Party atmosphere",
        "Accessible movement"
      ],
      image: "https://images.pexels.com/photos/3662830/pexels-photo-3662830.jpeg"
    },
    {
      id: 26,
      title: "Ecstatic Dance",
      category: "trending",
      skillLevels: ["beginner", "intermediate", "advanced"],
      days: ["sunday"],
      duration: "90 minutes",
      price: "$25 per class",
      schedule: "Sundays 6:00 PM",
      description: "Freeform, judgment-free movement experience. No choreography, just authentic self-expression in a supportive community setting.",
      highlights: [
        "Freeform movement",
        "Judgment-free space",
        "Authentic expression",
        "Community support",
        "No choreography required"
      ],
      image: "https://images.pexels.com/photos/3662829/pexels-photo-3662829.jpeg"
    }
  ];

  // Filter classes based on all active filters
  const filteredClasses = classes.filter(classItem => {
    const categoryMatch = activeCategory === 'all' || classItem.category === activeCategory;
    const skillMatch = skillFilter === 'all' || classItem.skillLevels.includes(skillFilter);
    const dayMatch = dayFilter === 'all' || classItem.days.includes(dayFilter);
    
    return categoryMatch && skillMatch && dayMatch;
  });

  // Helper functions to get colors
  const getCategoryColor = (category) => {
    const categoryObj = categories.find(cat => cat.id === category);
    return categoryObj ? categoryObj.color : 'bg-gray-500';
  };

  const getSkillColor = (skill) => {
    const skillObj = skillLevels.find(level => level.id === skill);
    return skillObj ? skillObj.color : 'bg-gray-500';
  };

  const getDayColor = (day) => {
    const dayObj = daysOfWeek.find(d => d.id === day);
    return dayObj ? dayObj.color : 'bg-gray-500';
  };

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
            <span className="text-flamenco-500">Movement</span> for Every Body
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            26 diverse dance and movement classes across four specialized programs designed for healing, empowerment, and artistic expression
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

      {/* Filter Section - Three Column Layout */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-white">
            Find the Perfect Class
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Dance Categories Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-flamenco-400">Dance Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full h-12 px-4 rounded-lg font-medium text-left transition-all duration-300 ${
                      activeCategory === category.id
                        ? `${category.color} text-black`
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Skill Levels Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-flamenco-400">Skill Levels</h3>
              <div className="space-y-3">
                {skillLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSkillFilter(level.id)}
                    className={`w-full h-12 px-4 rounded-lg font-medium text-left transition-all duration-300 ${
                      skillFilter === level.id
                        ? `${level.color} text-black`
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-flamenco-400">Schedule</h3>
              <div className="space-y-3">
                {daysOfWeek.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setDayFilter(day.id)}
                    className={`w-full h-12 px-4 rounded-lg font-medium text-left transition-all duration-300 ${
                      dayFilter === day.id
                        ? `${day.color} text-black`
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {day.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`${activeCategory}-${skillFilter}-${dayFilter}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredClasses.map((classItem) => (
              <motion.div
                key={classItem.id}
                variants={itemVariants}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-500"
                style={{
                  borderTop: `4px solid`,
                  borderImage: `linear-gradient(90deg, ${getCategoryColor(classItem.category).replace('bg-', '')}) 1`
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      {classItem.skillLevels.map((level) => (
                        <span key={level} className={`px-2 py-1 ${getSkillColor(level)} text-black text-xs font-semibold rounded-full capitalize`}>
                          {level}
                        </span>
                      ))}
                    </div>
                    <span className="text-flamenco-400 font-semibold text-xs">
                      {classItem.price}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-flamenco-400 transition-colors">
                    {classItem.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {classItem.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {classItem.schedule}
                    </span>
                  </div>

                  {/* Days of Week Color Indicators */}
                  <div className="flex gap-2 mb-4">
                    {classItem.days.map((day) => (
                      <span key={day} className={`px-2 py-1 ${getDayColor(day)} text-black text-xs font-semibold rounded-full capitalize`}>
                        {day}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {classItem.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-flamenco-400 font-semibold mb-2 text-sm">What You'll Experience:</h4>
                    <ul className="space-y-1">
                      {classItem.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                          <div className={`w-1.5 h-1.5 ${getCategoryColor(classItem.category)} rounded-full flex-shrink-0`}></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full ${getCategoryColor(classItem.category)} hover:opacity-80 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300`}>
                    Book This Class
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredClasses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400 mb-4">No classes match your current filters.</p>
              <button 
                onClick={() => {
                  setActiveCategory('all');
                  setSkillFilter('all');
                  setDayFilter('all');
                }}
                className="bg-flamenco-500 hover:bg-flamenco-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
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
              Find Your Perfect Movement Practice
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Whether you're seeking healing, cultural connection, artistic expression, or pure joy—we have a class designed just for you. Every body is welcome here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                Schedule a Consultation
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
