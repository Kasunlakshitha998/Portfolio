import React from 'react';
import  Header  from './components/Header';
import  Projects  from './components/Projects';
import  Skills  from './components/Skills';
import  Education  from './components/Education';
import  Contact  from './components/Contact';
import  Footer  from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;