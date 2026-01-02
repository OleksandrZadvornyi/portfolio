import { useTranslation } from 'react-i18next';
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { t, i18n } = useTranslation();

  const IconComponent = project.icon;

  const lang = i18n.language === 'ua' ? 'ua' : 'en';
  const title = project.title[lang] || project.title['en'];
  const description = project.description[lang] || project.description['en'];

  return (
    <div className="group bg-white dark:bg-slate-800 shadow-md rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* Top Section: Image OR Icon */}
      <div className="h-48 w-full bg-slate-100 dark:bg-slate-900 relative overflow-hidden">

        {project.image ? (
          <>
            <img
              src={project.image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
          </>
        ) : (
          <div className="w-full h-full bg-linear-to-br from-slate-700 to-slate-900 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500 to-transparent"></div>
            <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
              {IconComponent && <IconComponent size={40} className={project.color} />}
            </div>
          </div>
        )}

      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-blue-500 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-gray-300 text-xs font-medium rounded-md">
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
            {t('projects.code')}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              <LuExternalLink size={16} />
              {t('projects.demo')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;