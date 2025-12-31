# Oleksandr Zadvornyi - Portfolio Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)

This repository contains the source code for my personal portfolio website, hosted at [oleksandrzadvornyi.github.io](https://oleksandrzadvornyi.github.io). It showcases my projects, academic research, and technical skills as a Software Engineer and Master's graduate.

## 🚀 Features

* **Bilingual Support (EN/UA):** Full internationalization using `i18next` with language toggling and browser language detection.
* **Responsive Design:** Fully responsive layout built with Tailwind CSS, optimized for mobile, tablet, and desktop.
* **Dark/Light Mode:** Persistent theme toggling with system preference detection and local storage memory.
* **Dynamic Project Filtering:** Filter projects by category (e.g., "All", "Web Dev", "Data Science") without page reloads.
* **Research Showcase:** A specialized section for academic publications, including status badges (Published/In Review) and a spotlight on public speaking/writing.
* **CV Download:** Interactive dropdown to download my CV in either English or Ukrainian.

## 🛠️ Tech Stack

* **Core:** React.js (Hooks: `useState`, `useEffect`, `useRef`)
* **Internationalization:** i18next, react-i18next, i18next-browser-languagedetector
* **Styling:** Tailwind CSS (v4 via Vite plugin)
* **Icons:** React Icons (Lucide & FontAwesome)
* **Build Tool:** Vite
* **Deployment:** GitHub Pages

## 📂 Project Structure

```text
public/
├── papers/             # Academic paper abstracts
├── Oleksandr..._EN.pdf # CV in English
└── Oleksandr..._UA.pdf # CV in Ukrainian
src/
├── assets/             # Images (profile, presentation)
├── components/         # Reusable UI components
│   ├── Navbar.jsx      # Navigation with language & theme toggles
│   ├── Hero.jsx        # Landing section with CV dropdown
│   ├── About.jsx       # Education, bio, and stats
│   ├── Projects.jsx    # Filterable project grid
│   ├── Skills.jsx      # Categorized tech stack
│   └── Publications.jsx # Academic research list & spotlight
├── data/               # Static data files (projects.js, publications.js)
├── locales/            # Translation JSON files
│   ├── en.json
│   └── ua.json
├── i18n.js             # i18next configuration
└── App.jsx             # Main application layout

```

## 💻 Running Locally

To run this project on your local machine:

1. **Clone the repository**
```bash
git clone https://github.com/OleksandrZadvornyi/OleksandrZadvornyi.github.io.git
cd portfolio
```


2. **Install dependencies**
```bash
npm install
```


3. **Start the development server**
```bash
npm run dev
```


4. **Build for production**
```bash
npm run build
```


5. **Deploy to GitHub Pages**
```bash
npm run deploy
```



## 📬 Contact

* **Email:** [zadvornyi.alex16@gmail.com](mailto:zadvornyi.alex16@gmail.com)
* **LinkedIn:** [Oleksandr Zadvornyi](https://www.linkedin.com/in/oleksandr-zadvornyi-ab955131a)
* **GitHub:** [OleksandrZadvornyi](https://github.com/OleksandrZadvornyi)

## 📄 License

The source code for this project is licensed under the [MIT License](LICENSE).

**Note:** The content of this website (including images, project descriptions, and personal biography) is **© 2025 Oleksandr Zadvornyi**.
You are free to fork this repository and use the code as a template for your own portfolio, but please replace the content and images with your own.