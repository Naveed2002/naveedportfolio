import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';
import './styles/global.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      // Calculate scroll progress (0 to 100)
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-black text-white min-h-screen overflow-x-hidden">
      {/* Scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      

      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Navbar activeSection={activeSection} />
      
      <main>
        <div>
          <Hero />
        </div>
        
        <ImageGallery />
        
        {/* Transition section between Hero and Projects */}
        <div className="relative h-40 bg-gradient-to-b from-black via-purple-900/10 to-black overflow-hidden">
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <svg className="w-16 h-16 text-white opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
          
          {/* Animated elements */}
          <motion.div
            className="absolute top-10 left-1/4 w-8 h-8 rounded-full border border-white/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-6 h-6 rounded-full border border-white/20"
            animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div>
          <Projects />
        </div>
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;