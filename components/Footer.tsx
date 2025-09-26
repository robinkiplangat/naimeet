
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-16">
      <div className="container mx-auto px-4 py-6 max-w-4xl text-center text-slate-500 border-t">
        <p>&copy; {new Date().getFullYear()} NaiMeet. All rights reserved.</p>
        <p className="text-sm mt-1">Connecting Nairobi's Tech Community.</p>
      </div>
    </footer>
  );
};

export default Footer;
