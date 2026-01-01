import { useState, useEffect, useRef } from "react";
import { LuMail, LuArrowDown, LuDownload, LuChevronDown } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const { t } = useTranslation();

  // State for the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* LEFT: Text Content */}
          <div className="flex-3 flex flex-col items-center md:items-start text-center md:text-left mb-10">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              {t('hero.greeting')} <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">{t('hero.name')}</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">
              {t('hero.role')}
              {t('hero.description')}
              <span className="text-slate-700 dark:text-gray-200 font-semibold"> TypeScript</span>,
              <span className="text-slate-700 dark:text-gray-200 font-semibold"> React</span> {t('hero.and')}
              <span className="text-slate-700 dark:text-gray-200 font-semibold"> WebdriverIO</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-slate-900 dark:text-white rounded-lg font-medium hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                {t('hero.buttons.projects')}
              </a>
              {/* Dropdown Container */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full sm:w-auto px-8 py-3 flex items-center justify-center gap-2 bg-white dark:bg-slate-800 shadow-md text-slate-900 dark:text-white rounded-lg font-medium hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
                >
                  <LuDownload size={20} />
                  {t('hero.buttons.cv')}
                  <LuChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full min-w-40 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-100 animate-in fade-in zoom-in-95 duration-100">
                    <a
                      href="/Oleksandr_Zadvornyi_CV_EN.pdf"
                      download="Oleksandr_Zadvornyi_CV_EN.pdf"
                      className="block px-4 py-3 text-sm text-slate-700 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-left"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t('hero.CV.english')}
                    </a>
                    <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
                    <a
                      href="/Oleksandr_Zadvornyi_CV_UA.pdf"
                      download="Oleksandr_Zadvornyi_CV_UA.pdf"
                      className="block px-4 py-3 text-sm text-slate-700 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-left"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t('hero.CV.ukrainian')}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-slate-600 dark:text-gray-400">
              <a href="https://github.com/OleksandrZadvornyi" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/oleksandr-zadvornyi-ab955131a" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:zadvornyi.alex16@gmail.com" className="hover:text-slate-900 dark:text-white transition-colors">
                <LuMail size={24} />
              </a>
            </div>
          </div>

          {/* RIGHT: Profile Photo */}
          <div className="flex-2 flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Oleksandr Zadvornyi"
                  className="w-full h-full object-cover bg-white"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <LuArrowDown className="text-gray-600" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;