import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/constants';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-gray-950 to-gray-900 border-t border-slate-700">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-8">
          {[PERSONAL_INFO.github, PERSONAL_INFO.linkedin, `mailto:${PERSONAL_INFO.email}`].map((link, i) => {
            const Icon = [Github, Linkedin, Mail][i];
            return (
              <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
        <p className="text-gray-400 mb-2 flex items-center justify-center gap-2 leading-relaxed">
          Built with <Heart className="w-4 h-4 text-red-400" /> using React & Tailwind CSS
        </p>
        <p className="text-gray-500 text-sm leading-relaxed">© 2025 {PERSONAL_INFO.name} • {PERSONAL_INFO.location}</p>
      </div>
    </footer>
  );
};

export default Footer;