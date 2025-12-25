import React from 'react';
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const IconComponent = project.icon;

  return (
    <div className="group bg-white dark:bg-slate-800 shadow-md rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Top Section with Icon/Gradient */}
      <div className="h-48 bg-linear-to-br from-slate-700 to-slate-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500 to-transparent"></div>
        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
          <IconComponent size={40} className={project.color} />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">{project.category}</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
          </div>
        </div>

        <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-md">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            <FaGithub size={16} />
            Code
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <LuExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;