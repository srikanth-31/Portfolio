import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.scss';

const App = () => {
  useEffect(() => {
    try {
      emailjs.init('zj9YeyNEBOtwb9gUj');
      console.log('EmailJS initialized successfully'); // Debug log
    } catch (error) {
      console.error('EmailJS initialization error:', error); // Debug log
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
