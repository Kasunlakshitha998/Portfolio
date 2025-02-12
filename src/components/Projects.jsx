import React, { useState, useEffect } from "react";
import { Github, ExternalLink, Code2, ArrowUpRight, Cpu, Database, Layout } from "lucide-react";
import un from "../assets/uniwell.png";
import itp from "../assets/itp.png";
import hs from "../assets/hs.png";
import tr from "../assets/tr.png";
import Em from "../assets/Em.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Translator App",
      description: "Developed a web-based translator with real-time language conversion powered by APIs, featuring a Pro version with favorites and translation history.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Translate API"],
      image: tr,
      github: "https://github.com/Kasunlakshitha998/SPMY3S1",
      live: "https://translator-app-demo.vercel.app",
      category: "web"
    },
    {
      title: "UniWell App",
      description: "UniWell is a mental health app built using React Native and Expo. It helps users track their mental well-being through various interactive features and real-time support options.",
      tech: ["React Native", "Expo", "Node.js", "MongoDB"],
      image: un,
      github: "https://github.com/Kasunlakshitha998/Uniwell_app",
      category: "mobile"
    },
    {
      title: "E-Commerce Site",
      description: "An online mobile store with features like product search, user authentication, order management, inventory management, and payment integration.",
      tech: ["React.js", "Express", "Node.js", "MongoDB"],
      image: itp,
      github: "https://github.com/Kasunlakshitha998/Y2S2ITP",
      category: "web"
    },
    {
      title: "Hospital Management System",
      description: "A MERN stack web application for managing patient records, doctor appointments, and hospital administration efficiently.",
      tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
      image: hs,
      github: "https://github.com/Kasunlakshitha998/CSSEY3S1",
      category: "web"
    },
    {
      title: "Employee Management System",
      description: "A Java-based web application designed to streamline employee management, including schedule management and payroll processing.",
      tech: ["Java", "MySQL"],
      image: Em,
      github: "https://github.com/your-employee-repo",
      category: "desktop"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Layout },
    { id: 'web', label: 'Web Apps', icon: Cpu },
    { id: 'mobile', label: 'Mobile Apps', icon: Database }
  ];

  return (
    <section
      id="projects"
      className="relative py-20 bg-gray-50 dark:bg-gray-800/50 px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/5 rounded-full"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-500/10 to-transparent animate-pulse" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-purple-500/10 to-transparent animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className={`flex items-center justify-between mb-12 transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
              Featured Projects
              <span className="block mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform origin-left transition-transform duration-500 hover:scale-x-150" />
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">
              Explore my latest projects showcasing my expertise in full-stack
              development and modern web technologies.
            </p>
          </div>
          <Code2 className="hidden md:block w-12 h-12 text-blue-500 opacity-50 animate-bounce" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105
                ${activeFilter === id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-4 justify-end mb-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300 hover:scale-110 transform"
                      >
                        <Github size={20} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300 hover:scale-110 transform"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;