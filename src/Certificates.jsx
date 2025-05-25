import React, { useState } from 'react';
import CertificateCard from './components/CertificateCard';

const certificates = [
  {
    title: "Coding Sprint - 1st Place",
    issuer: "VIPS",
    thumb: "/certificates/coding_sprint.jpg",
    full: "/certificates/coding_sprint.jpg",
  },
  {
    title: "X-Coder 3.0 - 1st Place",
    issuer: "Amity University",
    thumb: "/certificates/x_coder.jpg",
    full: "/certificates/x_coder.jpg",
  },
  {
    title: "Code.Play() - 2nd Place",
    issuer: "NIT Patna",
    thumb: "/certificates/code_play.jpg",
    full: "/certificates/code_play.jpg",
  },
  {
    title: "Python (Advanced)",
    issuer: "TechGig",
    thumb: "/certificates/python.jpg",
    full: "/certificates/python.jpg",
  },
  {
    title: "Hack36 Participant",
    issuer: "MNNIT Allahabad",
    thumb: "/certificates/hack36.jpg",
    full: "/certificates/hack36.jpg",
  },
  {
    title: "Code Golf Participant",
    issuer: "NIT Delhi",
    thumb: "/certificates/codegolf.png",
    full: "/certificates/codegolf.png",
  },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <CertificateCard key={i} cert={cert} onClick={setSelected} />
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
            <div className="relative max-w-3xl w-full p-4">
              <img src={selected.full} alt={selected.title} className="w-full rounded-lg" />
              <button className="absolute top-2 right-4 text-white text-2xl font-bold" onClick={() => setSelected(null)}>×</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
