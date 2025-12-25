import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-slate-600 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} Oleksandr Zadvornyi. All rights reserved.
        </div>

        <div className="text-slate-600 dark:text-gray-500 text-sm flex items-center gap-2">
          <span>Built with</span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold">React</span>
          <span>&</span>
          <span className="text-teal-600 dark:text-teal-400 font-semibold">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;