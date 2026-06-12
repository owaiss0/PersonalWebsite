# owais | Personal Website

A lightweight, performant, and clean personal website featuring a homepage, blogs, projects, CV page shell, and an interactive gym workout tracker.

## 🚀 Features

- **No Framework Overhead**: Built with vanilla HTML5, CSS3, and modern JavaScript for instant loading speeds.
- **Centralized Style & Logic**: Extracted shared styles to `css/styles.css` and shared javascript behavior to `js/main.js` to enable browser caching.
- **FOUC Prevention**: Inline theme detection script in `<head>` immediately sets the theme configuration from `localStorage`, avoiding any light-to-dark flashes during page load.
- **Responsive & Accessible**: Clean mobile-first design with accessibility-compliant navigation states (`aria-current="page"`).
- **Interactive Workout Tracker**: Gym tracker in `Workout/` with filterable muscle group lists, set/rep checkmarks, rest day views, countdown timers, and custom print layouts.

## 📂 Repository Structure

- `index.html` — Home page and contact details.
- `blog.html` — Blog directory listing recent posts.
- `cv.html` — Empty CV/Resume layout shell.
- `css/styles.css` — Shared global stylesheet (Typography, variables, grids, layout).
- `js/main.js` — Shared global theme toggler and footer date scripts.
- `Projects/`
  - `project.html` — Showcase of built platforms and projects.
  - `pharmadesk.html` — Deep-dive study into the **PharmaDesk** pharmacy SaaS.
- `Blog/`
  - Containing static articles (`computer-science.html`, `nuclear-fusion.html`, `solar-energy.html`).
- `Workout/`
  - `workout.html` — Detailed gym logger and timer dashboard.
  - `archived-workout.html` — Original print-friendly weekly workout plan.

## 💻 Local Development

Since the site is composed of static HTML pages, you do not need to compile or build any assets. You can view the site locally in two ways:

1. **Direct Execution**: Simply open `index.html` in any web browser.
2. **Local HTTP Server**: Run a lightweight server from the root directory:
   - **Python**: `python3 -m http.server 8000` (Visit `http://localhost:8000`)
   - **Node.js**: `npx serve` (Visit `http://localhost:3000`)

## 🌐 Deploying to GitHub Pages

This codebase is pre-configured with relative resource loading paths, making it ready to host on GitHub Pages:

1. Push all latest changes to your repository:
   ```bash
   git add .
   git commit -m "feat: complete website optimization and static migration"
   git push origin main
   ```
2. Go to **Settings > Pages** on your GitHub repository (`https://github.com/owaiss0/PersonalWebsite`).
3. Set the build source to **Deploy from a branch**, select the `main` branch and `/ (root)` folder, and click **Save**.
