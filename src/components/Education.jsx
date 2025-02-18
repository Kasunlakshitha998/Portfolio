import React, { useState } from 'react';
import { GraduationCap, Calendar, ChevronRight, Building2 } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Science (Hons) in Information Specialized in Software Engineering",
    school: "Sri Lanka Institute of Information Technology (SLIIT), Malabe, Sri Lanka",
    year: "OCT 2022 - Present",
    description: "Focusing on Software Engineering and Data Structures.",
    type: "University"
  },
  {
    degree: "GCE Advanced Level 2020 (Physical Science)",
    school: "Bommiriya Central College",
    year: "2017 - 2020",
    type: "High School"
  },
  {
    degree: "GCE Ordinary Level 2017",
    school: "Bommiriya Central College",
    year: "2016 - 2017",
    type: "Secondary"
  }
];

export function Education() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="education" className="py-16 px-4 sm:px-6 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header with Floating Animation */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3 group sticky top-4 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg">
          <GraduationCap className="w-8 h-8 animate-bounce" />
          <span className="relative">
            Education Journey
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
          </span>
        </h2>
        
        <div className="relative">
          {/* Improved Timeline line with gradient and pulse effect */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900">
            <div className="absolute inset-0 bg-blue-400 animate-pulse opacity-75" />
          </div>
          
          {education.map((edu, index) => (
            <div
              key={index}
              className={`mb-12 md:mb-16 relative group ${
                index % 2 === 0 ? 'md:pr-1/2 pl-12 md:pl-0' : 'md:pl-1/2 pl-12'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Enhanced timeline dot with ripple effect */}
              <div className="absolute left-4 md:left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/4">
                <div className="relative">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-600" />
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" />
                  {activeIndex === index && (
                    <div className="absolute inset-0 bg-blue-300 rounded-full animate-ripple" />
                  )}
                </div>
              </div>
              
              {/* Enhanced Content card with 3D hover effect */}
              <div
                className={`
                  relative
                  bg-white dark:bg-gray-800
                  p-6 rounded-lg shadow-lg
                  transform-gpu transition-all duration-300
                  hover:scale-102 hover:-rotate-1
                  border border-transparent hover:border-blue-200 dark:hover:border-blue-800
                  ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
                  group-hover:shadow-2xl
                `}
              >
                {/* Type Badge */}
                <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  {edu.type}
                </div>

                {/* Year badge with enhanced animation */}
                <div className="absolute top-4 right-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-800/50">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.year}</span>
                </div>
                
                {/* Content with hover effects */}
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    {edu.school}
                  </h4>
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transform transition-all duration-300 group-hover:translate-x-2">
                      {edu.description}
                    </p>
                  )}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}

export default Education;