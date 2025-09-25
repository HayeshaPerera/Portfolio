import React from 'react';
import { TECHNICAL_SKILLS } from '../data/constants';

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-gray-950 via-black to-gray-950 pt-16 pb-28"
    >
      <div className="w-full max-w-6xl px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-14 leading-relaxed">
          Technologies and tools I use to bring ideas to life.
        </p>

        {/* Skills Categories */}
        <div className="space-y-12">
          {Object.entries(TECHNICAL_SKILLS).map(([category, skills], index) => (
            <div
              key={index}
              className="bg-slate-900/50 rounded-2xl p-8 border border-purple-600/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {category}
                </span>
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex flex-col items-center p-4 rounded-xl bg-slate-950/40 border border-purple-600/20 hover:border-purple-400/40 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-14 h-14 mb-3 flex items-center justify-center">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback initials */}
                      <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hidden items-center justify-center text-white font-bold text-sm">
                        {skill.name.slice(0, 2)}
                      </div>
                    </div>
                    <span className="text-gray-300 text-sm font-medium text-center group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
