# Aman Pandey — Professional Personal Portfolio Website

A modern, high-performance, dark navy personal portfolio website built with **React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons, and Framer Motion**.

Inspired by high-quality developer portfolios on Awwwards and contemporary SaaS visual design, this website showcases **Aman Pandey's** academic credentials (B.Com Hons., Ramjas College, DU), technical skills, Next.js web application projects, environmental data analytics, verified certifications, and leadership roles.

---

## 🌟 Key Features & Highlights

- **Awwwards-Inspired Visual Styling**: Dark navy `#070A11` background, glowing gradient accents, glassmorphic cards, and crisp Inter typography.
- **Centralized Data Store**: All content (bio, skills, projects, education, certifications, social links) is stored in [`src/data/portfolioData.ts`](file:///c:/Users/AMAN%20PANDEY/Desktop/Portfolio/src/data/portfolioData.ts) for effortless maintenance.
- **Interactive Project Case Studies**: Filterable project gallery with technical modal detail popups detailing problem statements, architecture, and features.
- **Interactive Resume Preview & Download**: Built-in resume modal viewer with direct PDF download support.
- **Client-Side Form Validation**: Fully validated contact form with real-time feedback banners and celebratory confetti animation upon submission.
- **Smooth Scroll Spy Navigation**: Active section tracking on navbar links and responsive mobile navigation drawer.
- **SEO & Accessibility Optimized**: Semantic HTML5 elements, meta tags, and high-contrast dark theme readability.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS + PostCSS + Custom CSS Utilities
- **Icons**: Lucide React
- **Animations**: Framer Motion & Canvas Confetti
- **Build Tool**: Vite 6

---

## 🚀 Quick Start & Run Instructions

### Prerequisites
Make sure you have **Node.js** (v18 or higher) installed on your system.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to view the live portfolio.

### 3. Build for Production
```bash
npm run build
```
The optimized production build output will be generated in the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 📁 Project Directory Structure

```
Portfolio/
├── public/
│   ├── avatar.jpg               # Hero section portrait image
│   ├── favicon.svg              # AP Brand favicon icon
│   ├── Aman_Pandey_Resume.pdf   # Downloadable PDF resume
│   └── projects/                # Featured project thumbnails
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar with scroll spy & mobile menu
│   │   ├── Hero.tsx             # Hero introduction & action CTAs
│   │   ├── About.tsx            # Personal background & core strengths
│   │   ├── Skills.tsx           # Technical skills grid categorized by domain
│   │   ├── Projects.tsx         # Project showcase with category filters
│   │   ├── ProjectModal.tsx     # Deep-dive project modal case study
│   │   ├── Education.tsx        # Academic journey timeline
│   │   ├── ExperienceAchievements.tsx # Leadership & competitions
│   │   ├── Certifications.tsx   # Verified course certificates
│   │   ├── Contact.tsx          # Validated contact form & email copy
│   │   ├── ResumeModal.tsx      # Modal resume viewer & downloader
│   │   └── Footer.tsx           # Footer with back-to-top button
│   ├── data/
│   │   └── portfolioData.ts     # Central source of truth for portfolio data
│   ├── App.tsx                  # Main App component
│   ├── index.css                # Global Tailwind CSS & glassmorphism rules
│   └── main.tsx                 # React entry mount point
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ✏️ Updating Portfolio Information

To modify your personal info, add new projects, or update skills:

1. Open [`src/data/portfolioData.ts`](file:///c:/Users/AMAN%20PANDEY/Desktop/Portfolio/src/data/portfolioData.ts).
2. Edit the relevant object array (`personalInfo`, `skillsCategories`, `projects`, `education`, `certifications`, `achievements`).
3. Save the file — Vite's Hot Module Replacement (HMR) will instantly update the page in real-time!

---

## 📄 License
Created for **Aman Pandey**. All rights reserved.
