import React from 'react';
import { JOURNEY } from '../data/journey';

const Journey = () => {
  return (
    <section id="journey" className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 via-gray-950 to-black py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            My Journey
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          From hardware tinkering to blockchain development.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>
          {JOURNEY.map((item, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
              <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-600/20 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-purple-400"><item.icon className="w-6 h-6" /></div>
                    <span className="text-purple-400 font-bold text-lg leading-tight">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;