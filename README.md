# Girish R V — Developer Portfolio

Welcome to the source code of my personal portfolio. I am a Computer Science undergrad at Jain University and an incoming Software Engineer Intern at Microsoft, focusing on Distributed Systems, P2P architectures, and Enterprise AI.

Instead of shipping a heavy React or Next.js bundle, this portfolio is built as an exercise in extreme minimalism and browser fundamentals. It is a zero-dependency, single-file architecture (HTML/CSS/JS) that loads instantly while maintaining a high-end, interactive UI.

🌐 Live Website: [Portfolio](https://girishrv.vercel.app)

🏗️ Architecture & Philosophy
**Zero Dependencies**: No React, no Tailwind, no npm modules. Everything from the bento-box grid to the scroll-reveal animations is written in pure, vanilla CSS and JavaScript.

**Dynamic Content**: The "Selected Work" section doesn't require manual updating. It hooks directly into the GitHub API, utilizing localStorage caching to manage rate limits and instantly render my latest repositories.

**Performance First**: Custom Intersection Observers handle animations lazily, ensuring 60fps scrolling without main-thread blocking.

✨ Key Features
**The P2P Mesh Canvas**: The hero background features a custom HTML5 <canvas> simulation of a peer-to-peer mesh topology—a direct nod to my work on decentralized engines like HyperLink.

**Live Internship Telemetry**: A custom JS countdown tracks the exact T-Minus until my SWE Intern start date at Microsoft India Development Center.

**Bento Grid UI**: A fully responsive, CSS Grid-powered bento box layout detailing my education, certifications, and technical stack.

**Magnetic & Tilt Interactive Components**: Buttons and cards (bento-box, projects, and experience) calculate cursor coordinates to create a fluid, magnetic pull or 3D tilt effect on hover, accompanied by a premium radial glow.

**Developer Console CLI**: A built-in CLI (`girish.hire()`) that allows technical recruiters to instantly download my latest resume as a PDF directly from Google Docs.

🕳️ The "1997" Easter Egg
This site contains a highly classified, lore-heavy easter egg. It utilizes a custom JavaScript keylogger to listen for a specific string of characters.

Triggering the sequence initiates a complete DOM takeover, shifting the site into an aggressive, audio-reactive Y2K "malware" state. It features:

- Web Audio API Fast Fourier Transform (FFT) for real-time bass detection.
- Procedurally generated SVG noise overlays.
- A functional terminal HUD that "exfiltrates" deep-lore files.
- CSS-driven chromatic aberration and system quakes.
- A dramatic BSOD (Blue Screen of Death) escape hatch that reloads the system.

**Hint**: Check the HTML comments at the absolute top of the source code.

🚀 Local Setup
Because this project respects the original architecture of the web, there is no npm install or build step required.

1. Clone the repository:
```bash
git clone https://github.com/GIRISHRV/portfolio.git
```
2. Open index.html in your browser.

That's it.

📬 Contact
LinkedIn: [linkedin.com/in/girishrv05](https://www.linkedin.com/in/girishrv05/)
Email: [girish29052005@gmail.com](mailto:girish29052005@gmail.com)

Built with pure HTML, CSS, and JS. Designed for speed.
