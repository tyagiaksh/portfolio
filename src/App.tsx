import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [heroRef, heroInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (heroInView) setActiveSection('home');
    if (aboutInView) setActiveSection('about');
    if (experienceInView) setActiveSection('experience');
    if (projectsInView) setActiveSection('projects');
    if (contactInView) setActiveSection('contact');
  }, [heroInView, aboutInView, experienceInView, projectsInView, contactInView]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
      />
      
      <main className="pt-16">
        <div ref={heroRef}><Hero /></div>
        <div ref={aboutRef}><About inView={aboutInView} /></div>
        <div ref={experienceRef}><Experience inView={experienceInView} /></div>
        <div ref={projectsRef}><Projects inView={projectsInView} /></div>
        <div ref={contactRef}><Contact inView={contactInView} /></div>
      </main>
    </div>
  );
}

export default App;