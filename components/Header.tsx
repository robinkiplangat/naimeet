
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-5 max-w-4xl">
        <h1 className="text-3xl font-bold text-emerald-700 tracking-tight">
          NaiMeet
        </h1>
        <p className="text-slate-500 mt-1">Your guide to Nairobi's tech scene.</p>
      </div>
    </header>
  );
};

export default Header;
