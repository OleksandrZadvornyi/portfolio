import React from 'react';
import { LuMail, LuArrowDown } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from '../assets/profile.jpg'; 

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 pt-16 relative overflow-hidden">
      
      {/* Background Decor (adds depth behind photo) */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* LEFT: Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">Oleksandr</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
              Software Engineer specializing in scalable web applications and data intelligence. 
              I bridge the gap between application development and research using
              <span className="text-gray-200 font-semibold"> Python</span>, 
              <span className="text-gray-200 font-semibold"> C++</span> and 
              <span className="text-gray-200 font-semibold"> TypeScript</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
          </div>

          {/* RIGHT: Profile Photo */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500 to-emerald-500 blur-sm opacity-50 animate-pulse"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                <img 
                  src={ profileImg } 
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