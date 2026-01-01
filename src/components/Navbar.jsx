import { useState } from 'react';
import { LuMenu, LuX, LuSun, LuMoon } from "react-icons/lu";
import { useTranslation } from 'react-i18next';

const Navbar = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLang);
  };

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.research'), href: '#publications' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const LanguageButton = () => (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-white dark:bg-slate-800 shadow-md text-slate-600 dark:text-gray-300 font-bold text-sm tracking-wide"
      aria-label="Toggle Language"
    >
      {i18n.language === 'en' ? 'EN' : 'UA'}
    </button>
  );

  return (
    <nav className="fixed w-full z-50 transition-colors duration-300 bg-white/95 border-slate-200 dark:bg-slate-900/95 dark:border-slate-800 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <a href="#" className="text-xl font-bold tracking-wider text-slate-900 dark:text-white">
              OZ<span className="text-blue-500">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-slate-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-6">
                {/* Language Switcher (Desktop) */}
                <LanguageButton />

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-white dark:bg-slate-800 shadow-md text-slate-600 dark:text-gray-300"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <LuSun size={20} /> : <LuMoon size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center gap-4">
            {/* Language Switcher (Mobile) */}
            <LanguageButton />

            {/* Mobile Theme Toggle */}
            <button onClick={toggleTheme} className="text-slate-600 dark:text-gray-400">
              {theme === 'dark' ? <LuSun size={20} /> : <LuMoon size={20} />}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-slate-900"
            >
              {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;