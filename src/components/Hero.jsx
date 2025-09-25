import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Coffee, Code } from 'lucide-react';
import { PERSONAL_INFO, ROLES } from '../data/constants';
import useScrollEffect from '../hooks/useScrollEffect';
import { Download, Facebook, Instagram } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const { scrollToSection } = useScrollEffect();

  useEffect(() => {
    const typeWriter = () => {
      const currentText = ROLES[currentRole];
      let i = 0;
      const timer = setInterval(() => {
        setTypedText(currentText.slice(0, i));
        i++;
        if (i > currentText.length) {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentRole((prev) => (prev + 1) % ROLES.length);
            setTypedText('');
          }, 2000);
        }
      }, 100);
    };
    typeWriter();
  }, [currentRole]);

  return (
<section
  id="home"
  className="min-h-[120vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-gray-900 via-gray-950 to-black"
>
      {/* Circular Photo with Glow */}
      <div className="relative w-64 h-64 mx-auto mt-12">
        {/* Outer Neon Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 opacity-60 shadow-2xl animate-pulse"></div>

        {/* Inner Photo */}
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 hover:rotate-1">
          <img
            src="/images/hayesha-photo.jpg"
            alt="Hayesha Perera"
            className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-inner"
          />
        </div>
      </div>

      {/* Name - Fixed text clipping */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-8 mb-4 drop-shadow-lg leading-tight">
        Hey, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">Hayesha</span>
      </h1>

      {/* Typing Roles */}
      <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-16 flex items-center justify-center">
        I'm a <span className="text-purple-400 font-semibold ml-2">{typedText}</span>
        <span className="animate-pulse text-white ml-1">|</span>
      </div>

      {/* Bio */}
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-center leading-relaxed mb-12">
        I turn coffee into code, ideas into reality, and problems into opportunities. Currently exploring blockchain, AI, and user experience while studying at {PERSONAL_INFO.university}.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-4 mb-8">
  <button 
    onClick={() => scrollToSection('story')} 
    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-semibold"
  >
    <Coffee className="w-5 h-5" />
    My Story
  </button>
        <a 
    href={PERSONAL_INFO.cvUrl}
    download="Hayesha-Perera-CV.pdf"
    className="flex items-center gap-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg transition-colors font-semibold"
  >
    <Download className="w-5 h-5" />
    Download CV
  </a>

        <button
          onClick={() => scrollToSection('projects')}
          className="flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-medium transition-all"
        >
          <Code className="w-5 h-5" />
          See My Work
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 pt-4">
  <a 
    href={PERSONAL_INFO.github} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-purple-400 transition-all transform hover:scale-110"
  >
    <Github className="w-8 h-8" />
  </a>
  <a 
    href={PERSONAL_INFO.linkedin} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-purple-400 transition-all transform hover:scale-110"
  >
    <Linkedin className="w-8 h-8" />
  </a>
  <a 
    href={PERSONAL_INFO.facebook}
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110"
  >
    <Facebook className="w-8 h-8" />
  </a>
  <a 
    href={PERSONAL_INFO.instagram}
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-pink-400 transition-all transform hover:scale-110"
  >
    <Instagram className="w-8 h-8" />
  </a>
  <a 
    href={`mailto:${PERSONAL_INFO.email}`}
    className="text-gray-400 hover:text-purple-400 transition-all transform hover:scale-110"
  >
    <Mail className="w-8 h-8" />
  </a>
</div>
    </section>
  );
};

export default Hero;