import React, { useState, useEffect } from 'react';
import { Code2, Palette, Database, Wrench, CheckCircle2, Star } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Mapping for Tailwind color classes
  const colorClasses = {
    blue: {
      iconContainer: 'bg-blue-100 dark:bg-blue-900/30',
      icon: 'text-blue-600 dark:text-blue-400',
      hoverHeader: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
      skillItemHoverBg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
      skillItemStar: 'text-blue-500',
      cornerGradientFrom: 'from-blue-500/20',
      cornerGradientTo: 'to-blue-500/40',
      cornerHoverFrom: 'group-hover:from-blue-500/40',
      cornerHoverTo: 'group-hover:to-blue-500/60',
    },
    purple: {
      iconContainer: 'bg-purple-100 dark:bg-purple-900/30',
      icon: 'text-purple-600 dark:text-purple-400',
      hoverHeader: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
      skillItemHoverBg: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
      skillItemStar: 'text-purple-500',
      cornerGradientFrom: 'from-purple-500/20',
      cornerGradientTo: 'to-purple-500/40',
      cornerHoverFrom: 'group-hover:from-purple-500/40',
      cornerHoverTo: 'group-hover:to-purple-500/60',
    },
    green: {
      iconContainer: 'bg-green-100 dark:bg-green-900/30',
      icon: 'text-green-600 dark:text-green-400',
      hoverHeader: 'group-hover:text-green-600 dark:group-hover:text-green-400',
      skillItemHoverBg: 'hover:bg-green-50 dark:hover:bg-green-900/20',
      skillItemStar: 'text-green-500',
      cornerGradientFrom: 'from-green-500/20',
      cornerGradientTo: 'to-green-500/40',
      cornerHoverFrom: 'group-hover:from-green-500/40',
      cornerHoverTo: 'group-hover:to-green-500/60',
    },
    orange: {
      iconContainer: 'bg-orange-100 dark:bg-orange-900/30',
      icon: 'text-orange-600 dark:text-orange-400',
      hoverHeader: 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
      skillItemHoverBg: 'hover:bg-orange-50 dark:hover:bg-orange-900/20',
      skillItemStar: 'text-orange-500',
      cornerGradientFrom: 'from-orange-500/20',
      cornerGradientTo: 'to-orange-500/40',
      cornerHoverFrom: 'group-hover:from-orange-500/40',
      cornerHoverTo: 'group-hover:to-orange-500/60',
    }
  };

  const skills = {
    'Programming Languages': {
      icon: <Code2 className="w-6 h-6" />,
      items: [
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C', level: 75 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 }
      ],
      color: 'blue'
    },
    'Frontend': {
      icon: <Palette className="w-6 h-6" />,
      items: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 95 }
      ],
      color: 'purple'
    },
    'Backend': {
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 85 },
        { name: 'SQL', level: 80 }
      ],
      color: 'green'
    },
    'Tools & Others': {
      icon: <Wrench className="w-6 h-6" />,
      items: [
        { name: 'Git', level: 90 },
        { name: 'Android Studio', level: 85 },
        { name: 'Postman', level: 90 },
        { name: 'Agile', level: 85 }
      ],
      color: 'orange'
    }
  };

  return (
    <section 
      id="skills" 
      className="relative py-20 px-4 sm:px-6 dark:bg-gray-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply animate-pulse"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${['#60A5FA', '#A78BFA', '#34D399', '#FBBF24'][Math.floor(Math.random() * 4)]}, transparent)`,
                animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className={`flex flex-col items-center text-center mb-16 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <div className="relative h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-lg">
            A comprehensive overview of my technical skills and proficiencies across different areas of software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, { icon, items, color }], categoryIndex) => (
            <div 
              key={category}
              onMouseEnter={() => setActiveCategory(category)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-500
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                hover:shadow-2xl hover:-translate-y-2 hover:rotate-1`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${colorClasses[color].iconContainer} rounded-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <div className={`${colorClasses[color].icon} animate-bounce`}>
                      {icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-semibold text-gray-900 dark:text-white ${colorClasses[color].hoverHeader} transition-colors`}>
                    {category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {items.map((skill, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`flex items-center justify-between gap-2 bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300
                        transform hover:scale-105 ${colorClasses[color].skillItemHoverBg}
                        ${activeCategory === category ? 'translate-x-2' : ''}`}
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${colorClasses[color].skillItemStar} transition-all duration-300 ${
                          hoveredSkill === skill.name ? 'opacity-100 rotate-12' : 'opacity-0'
                        }`} />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                      </div>
                      
                      {/* Skill Level Indicator */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={`transition-all duration-300 ${
                              i < Math.floor(skill.level / 20)
                                ? `${colorClasses[color].skillItemStar} ${hoveredSkill === skill.name ? 'scale-125' : ''}`
                                : 'text-gray-300'
                            }`}
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className={`absolute top-0 right-0 w-4 h-4 transform rotate-45 translate-x-1/2 -translate-y-1/2 
                  bg-gradient-to-br ${colorClasses[color].cornerGradientFrom} ${colorClasses[color].cornerGradientTo} 
                  ${colorClasses[color].cornerHoverFrom} ${colorClasses[color].cornerHoverTo} 
                  transition-all duration-500 group-hover:scale-150`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
