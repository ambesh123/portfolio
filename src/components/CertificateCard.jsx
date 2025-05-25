import React from 'react';

const CertificateCard = ({ cert, onClick }) => {
  return (
    <div
      onClick={() => onClick(cert)}
      className="cursor-pointer rounded overflow-hidden shadow-md hover:shadow-xl transition duration-200 bg-gray-800"
    >
      <img src={cert.thumb} alt={cert.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
        <p className="text-gray-400 text-sm">{cert.issuer}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
