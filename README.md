# Portfolio — Amit Jadhav

Static portfolio website (HTML/CSS/JS). Minimal, responsive, dark/light mode and project showcase.

## What’s included
- `index.html` — main page
- `css/styles.css` — styles
- `js/main.js` — interactions (theme, modal, contact)
- `assets/` — images & resume (add your `resume.pdf`)

## How to use
1. Replace text (name, bio, links) in `index.html`.
2. Replace images in `assets/`. Use `assets/hero.jpg` for hero.
3. Update project cards: add new `<article class="project-card">` blocks or modify existing ones.
4. Put your resume at `assets/resume.pdf` (or change link in HTML).

## Optional: enable EmailJS for contact form (no back-end)
1. Create an EmailJS account (https://www.emailjs.com/)
2. Create a service and template, add user ID.
3. Include EmailJS script and call `emailjs.send(...)` in `js/main.js` instead of mailto.
4. Follow EmailJS docs to map form fields.

## Deploy on GitHub Pages
1. Create a GitHub repo (e.g. `deloport`).
2. Commit project files to `main` branch.
3. In repo settings → Pages → Deploy from branch `main` / root.
4. Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

## Tips for CV impact
- Host live demo link & GitHub repo in your CV.
- Put 3–5 polished projects with README & screenshots.
- Add a short one-line result for each project (e.g., “Improved page load to 1.2s” or “Used by X users”).

## License
MIT — feel free to reuse & adapt.
