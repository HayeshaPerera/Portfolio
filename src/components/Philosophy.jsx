import React from 'react';
import { PHILOSOPHY } from '../data/philosophy';

const Philosophy = () => {
  return (
    <section id="philosophy" className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 via-gray-950 to-black py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            How I Think
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          These principles guide everything I build.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {PHILOSOPHY.map((item, index) => (
            <div key={index} className="bg-slate-900/50 rounded-2xl p-8 border border-purple-600/20 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all">
              <div className="text-purple-400 mb-6"><item.icon className="w-8 h-8" /></div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;