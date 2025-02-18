import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code2,
  Github,
  Terminal,
  ExternalLink,
  Star,
} from "lucide-react";
import { ReactTyped } from "react-typed";
import pic from "../assets/pic.png";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse movement for interactive background
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const skills = [
    "React.js",
    "Node.js",
    "JavaScript",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-16 px-4 sm:px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Background */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20 transition-transform duration-500"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
        }}
      >
        <div className="absolute inset-0 bg-grid-gray-900/[0.2] dark:bg-grid-white/[0.2] bg-[length:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            {/* Status Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4 hover:scale-105 transition-transform cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {isHovered
                ? "Let's work together! →"
                : "Open to Intern Full-Stack Developer Positions"}
            </div>

            {/* Main Title */}
            <h1 className="text-xl mt-5 font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="block transform transition-all duration-500 hover:scale-105">
                Hi I am,
              </span>
              <span className="text-5xl bg-gradient-to-r from-emerald-600 via-cyan-400 to-emerald-500 bg-size-500 animate-gradient-x text-transparent bg-clip-text ">
                Kasun Lakshitha
              </span>
            </h1>

            {/* Animated Role Typography */}
            <div className="text-3xl md:text-4xl mb-4 font-bold text-gray-700 dark:text-gray-100 drop-shadow-md md:py-3">
              <ReactTyped
                className="transition-transform hover:scale-105"
                strings={[
                  "Software Engineer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Mobile App Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I am a Full-Stack Developer with a passion for delivering
              exceptional results. With my expertise in React and NextJS on the
              frontend, and NodeJS and Express on the backend, I bring a unique
              combination of technical skills and creative problem-solving to
              every project I work on.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                View Portfolio
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
              <a
                href="/Kasun_Lakshitha.pdf" // Use absolute path
                download="Kasun_Lakshitha.pdf" // Ensures it downloads the file
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-105"
              >
                Download Resume
                <ExternalLink
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex-1 relative">
            {/* Profile Section Title */}
            {/* <div className="mb-10 flex flex-col md:flex-row items-center justify-center relative">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center md:text-left leading-tight">
                <span className="block transform transition-all duration-500 hover:scale-105">
                  Building the Future
                </span>
                <span className="block text-blue-600 dark:text-blue-400">
                  One Line of Code at a Time
                </span>
              </h1>
            </div> */}

            <div className="relative z-10 mb-8">
              <div className="relative w-72 h-72 mx-auto transform transition-all duration-500 hover:scale-105">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full animate-spin-slow opacity-75 blur-xl" />

                {/* Profile Image */}
                <div className="relative rounded-full w-full h-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src={pic}
                    alt="Professional Profile Photo"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-bounce">
                  <Code2 className="w-6 h-6 text-blue-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-bounce delay-100">
                  <Terminal className="w-6 h-6 text-purple-500" />
                </div>
                <div className="absolute top-1/2 -right-8 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg animate-bounce delay-200">
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
