import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Kasun Lakshitha</h3>
            <p className="text-gray-400">Undergraduate Software Engineer</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Kasunlakshitha998" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kasun-lakshitha-53a9472a6/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="kasunlakshitha998@gmail.com" className="text-gray-400 hover:text-white">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Kasun Lakshitha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}