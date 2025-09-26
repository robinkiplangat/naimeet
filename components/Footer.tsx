
import React from 'react';
import { TwitterIcon, FacebookIcon, GithubIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">NaiMeet</h3>
            <p className="mt-1 text-slate-400">Connecting Nairobi's Tech Community.</p>
          </div>
          <div className="flex justify-center space-x-4 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NaiMeet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
