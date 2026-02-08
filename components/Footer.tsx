import React from 'react';
import { Heart, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-slate-800 tracking-tight">Rupak K</span>
            <p className="text-slate-500 text-sm mt-2">
              © {new Date().getFullYear()} Rupak K. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
             <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-medium">
                <Github size={18} />
                <span>GitHub</span>
             </a>
             
             <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>Designed & Built with</span>
                <Heart size={16} className="text-rose-500 fill-rose-500" />
                <span>using React & Tailwind</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;