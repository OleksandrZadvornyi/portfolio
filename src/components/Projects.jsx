import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories from data
  const categories = ['All', ...new Set(projects.flatMap(p => p.category))];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category.includes(activeCategory));
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('projects.title')} <span className="text-blue-500">{t('projects.highlight')}</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
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
                  ? 'bg-blue-600 text-slate-900 dark:text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 shadow-md text-slate-600 hover:bg-slate-700 hover:text-slate-900 dark:text-white'
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
            {t('projects.viewGithub')} →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;