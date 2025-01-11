// Theme switching function
function setTheme(mode = 'auto') {
    const userMode = localStorage.getItem('bs-theme');
    const sysMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    const useSystem = mode === 'system' || (!userMode && mode === 'auto');
    const modeChosen = useSystem ? (sysMode ? 'light' : 'dark') : (mode === 'dark' || mode === 'light' ? mode : userMode);

    if (useSystem) {
        localStorage.removeItem('bs-theme');
    } else {
        localStorage.setItem('bs-theme', modeChosen);
    }

    document.documentElement.setAttribute('data-bs-theme', modeChosen);
    document.querySelectorAll('.mode-switch .btn').forEach(e => e.classList.remove('text-body'));
    document.getElementById(modeChosen).classList.add('text-body');

    // Update spinner color based on theme
    const spinner = document.querySelector('.spinner-border');
    if (modeChosen === 'dark') {
        spinner.classList.remove('text-primary');
        spinner.classList.add('text-light');
    } else {
        spinner.classList.remove('text-light');
        spinner.classList.add('text-primary');
    }
}

setTheme('system'); // Set initial theme to system preference
document.querySelectorAll('.mode-switch .btn').forEach(e => e.addEventListener('click', () => setTheme(e.id)));
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => setTheme('system'));

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    // Hide spinner once the page is fully loaded
    window.addEventListener('load', function () {
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'none';
    });

    // Debounce function
    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Change active link using IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: `-${navbarHeight}px 0px 0px 0px`,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});