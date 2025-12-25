import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories from data
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my work in Software Development, Data Science and QA Automation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              aria-label="Set Active Category"
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105' 
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Github Link */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/OleksandrZadvornyi?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            View all repositories on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;