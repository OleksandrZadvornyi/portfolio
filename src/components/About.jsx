import React from 'react';
import { LuAward, LuBookOpen, LuTerminal } from "react-icons/lu";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Decor - simple blurred orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Education & Stats Card */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                  <LuAward size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Master's Degree</h3>
                  <p className="text-gray-400 text-sm">Software Engineering</p>
                  <p className="text-gray-500 text-xs mt-1">Graduated Dec 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <LuBookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Research Focus</h3>
                  <p className="text-gray-400 text-sm">Deep Learning & Time Series</p>
                  <p className="text-gray-500 text-xs mt-1">Published Thesis on Forecasting</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                  <LuTerminal size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Clean Code Enthusiast</h3>
                  <p className="text-gray-400 text-sm">Design Patterns & Architecture</p>
                  <p className="text-gray-500 text-xs mt-1">Focused on scalability & readability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Bio */}
          <div className="text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg">
              I am a fresh <span className="text-white font-semibold">Master of Software Engineering</span> graduate with a passion for solving complex problems through code. My journey in tech is driven by a curiosity for how systems work - from the low-level logic of <span className="text-blue-400">C++</span> to the dynamic capabilities of <span className="text-yellow-400">JavaScript</span> and the data-driven power of <span className="text-emerald-400">Python</span>.
            </p>
            
            <p>
              Unlike a traditional developer, I bridge the gap between application development and data science. Whether I'm building a responsive React dashboard, architecting a Node.js backend or training a Time-Series Transformer model for weather forecasting, I prioritize <span className="text-white">performance, accessibility and clean architecture</span>.
            </p>

            <p>
              I am currently looking for opportunities to apply my full-stack and research skills in a challenging environment.
            </p>

            {/* Quick Tech Tags */}
            <div className="pt-4 flex flex-wrap gap-3">
              {['Python', 'C++', 'React', 'TypeScript', 'WebdriverIO', 'PyTorch'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-800 text-gray-300 text-sm rounded-full border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;