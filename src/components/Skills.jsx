import React from 'react';
import { 
  LuCode, 
  LuDatabase,
  LuServer, 
  LuTerminal, 
  LuCpu, 
  LuLayoutDashboard
} from "react-icons/lu";

const SkillCategory = ({ title, icon: Icon, skills, color }) => (
  <div className="bg-white dark:bg-slate-800 shadow-md p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-600 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-2 rounded-lg ${color} bg-opacity-20`}>
        {/* React Icons accept className just like Lucide did */}
        <Icon size={24} className={color.replace('bg-', 'text-')} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-gray-300 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: LuCode,
      color: "bg-green-500",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"]
    },
    {
      title: "Frontend",
      icon: LuLayoutDashboard,
      color: "bg-pink-500",
      skills: ["React", "Tailwind CSS", "Vite", "HTML5/CSS3"]
    },
    {
      title: "Backend & Cloud",
      icon: LuServer,
      color: "bg-emerald-500",
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"]
    },
    {
      title: "Data Science & ML",
      icon: LuCpu,
      color: "bg-purple-500",
      skills: ["PyTorch", "Pandas", "GluonTS", "Dask", "Time Series Analysis"]
    },
    {
      title: "QA Automation",
      icon: LuTerminal,
      color: "bg-orange-500",
      skills: ["WebdriverIO", "Selenium", "Mocha/Chai", "Page Object Model"]
    },
    {
      title: "Tools & DevOps",
      icon: LuDatabase,
      color: "bg-yellow-500",
      skills: ["Git", "Docker", "VS Code", "Jupyter"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolset for building scalable web applications and data-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;