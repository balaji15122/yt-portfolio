# Balaji — Full-Stack Developer (MERN) Portfolio

A modern, high-performance personal portfolio website built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**. Designed specifically for recruiters to highlight real-world full-stack platforms, algorithmic capabilities, and technical credentials.

---

## ⚡ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📁 Architecture & Folder Structure

All personal content, project details, skills, experiences, and links are managed from a single source of truth: `src/data/portfolio.js`. Updating your portfolio does not require touching UI components.

```
portfolio/
├── index.html                   # SEO, OpenGraph tags, Google Fonts, Theme script
├── package.json                 # Dependencies and build scripts
├── vite.config.js               # Vite configuration with chunk splitting
├── tailwind.config.js           # Tailwind theme, colors, and responsive rules
├── postcss.config.js            # PostCSS configuration
├── vercel.json                  # Vercel deployment configuration
├── public/
│   ├── favicon.svg              # Brand monogram favicon
│   ├── og-image.png             # Social share preview card
│   ├── resume.pdf               # Place your actual resume PDF here
│   ├── robots.txt               # Search crawler permissions
│   └── sitemap.xml              # Search engine sitemap
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main page assembler & skip link
    ├── index.css                # Tailwind directives & custom utilities
    ├── data/
    │   └── portfolio.js         # ⭐ SINGLE SOURCE OF TRUTH FOR ALL DATA
    ├── hooks/
    │   ├── useTheme.js          # Dark/light mode state & persistence
    │   └── useScrollSpy.js      # Active section spy for navbar
    ├── utils/
    │   └── analytics.js         # Pluggable Google / Vercel analytics hook
    └── components/
        ├── layout/
        │   ├── Navbar.jsx       # Sticky glass navbar + resume + theme toggle
        │   └── Footer.jsx       # Social links + back-to-top button
        ├── sections/
        │   ├── Hero.jsx         # Hero intro, CTAs, availability badge
        │   ├── About.jsx        # Bio, profile visual, quick stats
        │   ├── Skills.jsx       # Grouped skill chips (no fake bars)
        │   ├── Projects.jsx     # Responsive cards + filter tabs + modal
        │   ├── Experience.jsx   # Nuage & IBM AI internships with metrics
        │   ├── Education.jsx    # AKGEC B.Tech & Diploma timeline + coursework
        │   ├── CodingProfiles.jsx # LeetCode 300+ stats card & hackathons
        │   └── Contact.jsx      # Contact form + copy email + direct links
        └── ui/
            ├── Badge.jsx        # Category and status chips
            ├── ProjectModal.jsx # Deep-dive modal with problem/solution/impact
            ├── SectionHeading.jsx # Reusable section title component
            └── Toast.jsx        # Interactive feedback toasts
```

---

## 🚀 Deploying to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/balaji15122/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New..."** -> **"Project"**.
4. Import your `portfolio` repository.
5. Vercel automatically detects **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. Your portfolio is live in under 60 seconds!

