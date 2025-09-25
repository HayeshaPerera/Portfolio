import React from 'react';
import { FUN_FACTS, CURRENTLY_LEARNING } from '../data/constants';

const Story = () => {
  return (
    <section
      id="story"
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-gray-900 via-gray-950 to-black pt-16 pb-32"
    >
      <div className="w-full max-w-5xl px-4">
        
        {/* Title - Fixed text clipping */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            My Story
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-12">
          Every developer has a story. Here's mine.
        </p>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Left column - Story sections */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-purple-600/20 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  The Beginning
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                My journey started on the day I discovered that technology isn't just about 
                writing code - it's about solving real problems. From building my first Arduino project 
                to deploying blockchain applications, every step has been a learning adventure.
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-purple-600/20 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  What Drives Me
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I believe technology should make life better, not more complicated. Whether it's 
                helping businesses save money on cloud costs or making sports bookings more 
                transparent with blockchain, I'm always looking for ways to create meaningful impact.
              </p>
            </div>
          </div>

          {/* Right column - Fun Facts */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Fun Facts About Me
              </span>
            </h3>
            
            <div className="space-y-4">
              {FUN_FACTS.map((fact, index) => (
                <div 
                  key={index} 
                  className="bg-slate-900/40 rounded-xl p-4 md:p-6 border border-purple-600/20 shadow-md hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{fact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Currently Learning section */}
        <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-6 md:p-8 border border-purple-500/30 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
            Currently Learning
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CURRENTLY_LEARNING.map((item, index) => (
              <div 
                key={index} 
                className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;