import { LuAward, LuBookOpen, LuTerminal } from "react-icons/lu";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('about.title')} <span className="text-blue-500">{t('about.me')}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Education & Stats Card */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 shadow-md/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                  <LuAward size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{t('about.cards.education.title')}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm">{t('about.cards.education.degree')}</p>
                  <p className="text-gray-500 text-xs mt-1">{t('about.cards.education.date')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 shadow-md/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <LuTerminal size={24} /> {/* Changed icon to Terminal or Shield */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{t('about.cards.qa.title')}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm">{t('about.cards.qa.role')}</p>
                  <p className="text-gray-500 text-xs mt-1">{t('about.cards.qa.tech')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 shadow-md/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                  <LuTerminal size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{t('about.cards.code.title')}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm">{t('about.cards.code.role')}</p>
                  <p className="text-gray-500 text-xs mt-1">{t('about.cards.code.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Bio */}
          <div className="text-slate-600 dark:text-gray-300 space-y-6 leading-relaxed">
            <p className="text-lg">
              {t('about.bio.p1')}</p>

            <p>
              {t('about.bio.p2')}
            </p>

            <p>
              {t('about.bio.p3')}
            </p>

            {/* Quick Tech Tags - Updated order */}
            <div className="pt-4 flex flex-wrap gap-3">
              {['TypeScript', 'React', 'WebdriverIO', 'JavaScript', 'Node.js', 'Python'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 shadow-md text-slate-600 dark:text-gray-300 text-sm rounded-full border border-slate-200 dark:border-slate-700">
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