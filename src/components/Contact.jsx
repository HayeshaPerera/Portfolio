import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/constants';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 via-gray-950 to-black py-16 px-4">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          I'm always excited to work on meaningful projects with passionate people.
          Whether it's an internship, collaboration, or just a chat about technology,
          I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Mail, title: "Drop me a line", text: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
            { icon: Github, title: "Check my code", text: "github.com/HayeshaPerera", href: PERSONAL_INFO.github },
            { icon: Linkedin, title: "Connect with me", text: "linkedin.com/in/hayesha-perera", href: PERSONAL_INFO.linkedin },
          ].map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 rounded-xl p-8 border border-purple-600/20 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all group">
              <item.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed break-words">{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;