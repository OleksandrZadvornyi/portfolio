import {
    LuCode,
    LuDatabase,
    LuLayoutDashboard,
    LuTerminal,
    LuActivity,
    LuSearch,
    LuMonitor,
    LuGlobe,
    LuBookOpen,
    LuListTodo
} from "react-icons/lu";

import fireGalleryImg from '../assets/projects/firegallery.png';
import kalHansLandingImg from '../assets/projects/kal-hans-landing.png';
import eegImg from '../assets/projects/eeg.png';
import educateImg from '../assets/projects/educate.png';
import denticsImg from '../assets/projects/dentics.png';
import kalHansBackendImg from '../assets/projects/kal-hans-backend.png';
import webdriverioDemoImg from '../assets/projects/webdriverio-demo.png';
import frontendAnalyzerImg from '../assets/projects/frontend-analyzer.png';
import llmCodeEvaluationImg from '../assets/projects/llm-code-eval.png';
import todoAppImg from '../assets/projects/todo-app.png';


export const projects = [
    {
        title: {
            en: "Fire Gallery",
            ua: "Fire Gallery"
        },
        image: fireGalleryImg,
        description: {
            en: "A modern image gallery with Firebase Authentication, Firestore and drag-and-drop storage.",
            ua: "Сучасна галерея зображень з аутентифікацією Firebase, Firestore та можливістю перетягування файлів (drag-and-drop)."
        },
        tech: ["React", "TypeScript", "Firebase", "Tailwind"],
        category: ["Web Dev"],
        github: "https://github.com/OleksandrZadvornyi/fire-gallery",
        demo: "https://fire-gallery-84947.web.app/signin",
        icon: LuLayoutDashboard,
        color: "text-blue-400"
    },
    {
        title: {
            en: "Weather Forecasting Transformer",
            ua: "Weather Forecasting Transformer"
        },
        description: {
            en: "Deep learning model forecasting daily max temperatures using Time Series Transformers and GluonTS.",
            ua: "Модель глибокого навчання для прогнозування денних температур з використанням Time Series Transformers та GluonTS."
        },
        tech: ["Python", "PyTorch", "GluonTS", "HuggingFace"],
        category: ["Data Science"],
        github: "https://github.com/OleksandrZadvornyi/weather-forecasting",
        demo: null,
        icon: LuActivity,
        color: "text-emerald-400"
    },
    {
        title: {
            en: "Kal-Hans Backend",
            ua: "Kal-Hans Backend"
        },
        image: kalHansBackendImg,
        description: {
            en: "RESTful API for an e-commerce platform managing products, blogs and social posts.",
            ua: "RESTful API для платформи електронної комерції, що керує продуктами, блогами та соціальними публікаціями."
        },
        tech: ["Node.js", "Express", "MongoDB", "TypeScript"],
        category: ["Web Dev"],
        github: "https://github.com/OleksandrZadvornyi/kal-hans-backend",
        demo: null,
        icon: LuDatabase,
        color: "text-green-400"
    },
    {
        title: {
            en: "EEG Seizure Detection",
            ua: "EEG Seizure Detection"
        },
        image: eegImg,
        description: {
            en: "Automated framework using Topological Data Analysis and Random Forest on CHB-MIT Scalp EEG data.",
            ua: "Автоматизований фреймворк з використанням топологічного аналізу даних та Random Forest на даних CHB-MIT Scalp EEG."
        },
        tech: ["Python", "MNE", "Scikit-Learn", "Streamlit"],
        category: ["Data Science"],
        github: "https://github.com/OleksandrZadvornyi/eeg",
        demo: null,
        icon: LuActivity,
        color: "text-purple-400"
    },
    {
        title: {
            en: "WebdriverIO Automation",
            ua: "WebdriverIO Automation"
        },
        image: webdriverioDemoImg,
        description: {
            en: "Robust E2E testing framework implementing the Page Object Model (POM) design pattern.",
            ua: "Надійний фреймворк для E2E тестування, що реалізує шаблон проектування Page Object Model (POM)."
        },
        tech: ["JavaScript", "WebdriverIO", "Selenium", "Mocha"],
        category: ["QA Automation"],
        github: "https://github.com/OleksandrZadvornyi/webdriver-demo",
        demo: null,
        icon: LuTerminal,
        color: "text-orange-400"
    },
    {
        title: {
            en: "LLM Code Evaluation",
            ua: "LLM Code Evaluation"
        },
        image: llmCodeEvaluationImg,
        description: {
            en: "Framework for assessing credibility of LLM-generated Python code using static analysis.",
            ua: "Фреймворк для оцінки якості Python-коду, згенерованого LLM, за допомогою статичного аналізу."
        },
        tech: ["Python", "LangChain", "Docker", "NLP"],
        category: ["Data Science"],
        github: "https://github.com/OleksandrZadvornyi/prompt-engineering",
        demo: null,
        icon: LuSearch,
        color: "text-yellow-400"
    },
    {
        title: {
            en: "Frontend Performance CLI",
            ua: "Frontend Performance CLI"
        },
        image: frontendAnalyzerImg,
        description: {
            en: "CLI tool to analyze frontend performance using Lighthouse and Puppeteer programmatically.",
            ua: "CLI інструмент для аналізу продуктивності фронтенду з використанням Lighthouse та Puppeteer."
        },
        tech: ["JavaScript", "Puppeteer", "Lighthouse", "CLI"],
        category: ["Web Dev"],
        github: "https://github.com/OleksandrZadvornyi/frontend-performance-analyzer",
        demo: null,
        icon: LuTerminal,
        color: "text-pink-400"
    },
    {
        title: {
            en: "Kal-Hans Frontend",
            ua: "Kal-Hans Frontend"
        },
        image: kalHansLandingImg,
        description: {
            en: "Modern e-commerce UI for the Kal-Hans brand. Features responsive design and connects to the Node.js backend.",
            ua: "Сучасний інтерфейс електронної комерції для бренду Kal-Hans. Має адаптивний дизайн та підключається до бекенду на Node.js."
        },
        tech: ["React", "TypeScript", "Tailwind", "Vite"],
        category: ["Web Dev"],
        github: "https://github.com/OleksandrZadvornyi/kal-hans-landing",
        demo: "https://kal-hans.netlify.app/",
        icon: LuMonitor,
        color: "text-teal-400"
    },
    {
        title: {
            en: "Dental Clinic Multi-Lang",
            ua: "Dental Clinic Multi-Lang"
        },
        image: denticsImg,
        description: {
            en: "A multilingual landing page supporting 5 languages. Built with a custom Webpack configuration and i18next.",
            ua: "Багатомовна цільова сторінка з підтримкою 5 мов. Створена з кастомною конфігурацією Webpack та i18next."
        },
        tech: ["JavaScript", "Webpack", "i18next", "SCSS"],
        category: ["Web Dev"],
        github: "https://github.com/OleksandrZadvornyi/dental-clinic-landing",
        demo: "https://denticss.netlify.app/",
        icon: LuGlobe,
        color: "text-cyan-500"
    },
    {
        title: {
            en: "Educate Platform",
            ua: "Educate Platform"
        },
        image: educateImg,
        description: {
            en: "A responsive education platform landing page featuring modern animations and multi-language support.",
            ua: "Адаптивна цільова сторінка освітньої платформи з сучасною анімацією та підтримкою кількох мов."
        },
        tech: ["Vite", "JavaScript", "CSS3", "Animations"],
        category: ["Web Dev"],
        github: "https://github.com/OleksandrZadvornyi/educate-landing",
        demo: "https://e-learn-website.netlify.app/",
        icon: LuBookOpen,
        color: "text-indigo-400"
    },
    {
        title: {
            en: "SimplyDone",
            ua: "SimplyDone"
        },
        image: todoAppImg,
        description: {
            en: "Minimalist To-Do app with clean React architecture, local storage persistence, and robust E2E testing with WebdriverIO.",
            ua: "Мінімалістичний To-Do додаток з чистою архітектурою React, збереженням даних та надійними E2E тестами на WebdriverIO."
        },
        tech: ["React 19", "TypeScript", "Tailwind", "WebdriverIO"],
        category: ["Web Dev", "QA Automation"],
        github: "https://github.com/OleksandrZadvornyi/to-do-app",
        demo: "https://simply-done.netlify.app/",
        icon: LuListTodo,
        color: "text-blue-500"
    }
];