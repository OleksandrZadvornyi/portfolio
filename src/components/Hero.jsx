import React from 'react';
import { LuMail, LuArrowDown } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">Oleksandr</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          A Software Engineer & Master of Engineering Graduate. 
          I build scalable web applications, robust automation frameworks 
          and data intelligence solutions using 
          <span className="text-gray-200 font-semibold"> Python</span>, 
          <span className="text-gray-200 font-semibold"> C++</span> and 
          <span className="text-gray-200 font-semibold"> JavaScript/TypeScript</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-all border border-slate-700"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-gray-400">
          <a href="https://github.com/OleksandrZadvornyi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/oleksandr-zadvornyi-ab955131a" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:zadvornyi.alex16@gmail.com" className="hover:text-white transition-colors">
            <LuMail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce hidden md:block">
          <LuArrowDown className="text-gray-600" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;