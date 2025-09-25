import React, { useState } from 'react';
import { Award, X } from 'lucide-react';
import { CERTIFICATIONS } from '../data/constants';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certifications"
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-gray-950 via-black to-gray-950 pt-16 pb-28"
    >
      <div className="w-full max-w-6xl px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-16">
          Professional certifications that validate my expertise and commitment to continuous learning.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 rounded-2xl p-6 border border-purple-600/20 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedCert(cert.image || cert.logo)}
            >
              <div className="flex flex-col items-center">
                {/* Certificate Image */}
                <div className="w-full h-48 bg-slate-950/40 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src={cert.image || cert.logo}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title + Issuer */}
                <h3 className="text-lg font-bold text-white text-center mb-1">{cert.title}</h3>
                <p className="text-purple-400 text-sm text-center">{cert.issuer}</p>

                {/* Issued Date */}
                <p className="text-gray-400 text-xs mt-2">Issued: {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size certificate */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-pink-500"
              onClick={() => setSelectedCert(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedCert}
              alt="Certificate Full"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
