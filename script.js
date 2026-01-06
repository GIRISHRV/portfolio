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
    
    // Update button states
    const buttons = document.querySelectorAll('.mode-switch .btn');
    buttons.forEach(e => e.classList.remove('text-body'));
    const activeButton = document.getElementById(modeChosen);
    if (activeButton) activeButton.classList.add('text-body');

    // Update spinner color based on theme
    const spinner = document.querySelector('.spinner-border');
    if (spinner) {
        if (modeChosen === 'dark') {
            spinner.classList.remove('text-primary');
            spinner.classList.add('text-light');
        } else {
            spinner.classList.remove('text-light');
            spinner.classList.add('text-primary');
        }
    }
}

setTheme('system'); // Set initial theme to system preference

// Add event listeners with error handling
const themeButtons = document.querySelectorAll('.mode-switch .btn');
if (themeButtons.length > 0) {
    themeButtons.forEach(btn => btn.addEventListener('click', () => setTheme(btn.id)));
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
if (mediaQuery) {
    mediaQuery.addEventListener('change', () => setTheme('system'));
}

// Scroll Progress Indicator
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);
window.addEventListener('resize', updateScrollProgress);

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 60; // Default to 60 if navbar not found
    
    // Initialize Bootstrap tooltips with error handling
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        
        // Hide tooltips on click
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(element => {
            element.addEventListener('click', () => {
                const tooltip = bootstrap.Tooltip.getInstance(element);
                if (tooltip) {
                    tooltip.hide();
                }
            });
        });

        // Hide tooltips on visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                tooltipList.forEach(tooltip => tooltip.hide());
            }
        });
    }
    
    // Hide spinner once the page is fully loaded
    window.addEventListener('load', function () {
        const spinner = document.getElementById('spinner');
        if (spinner) {
            spinner.style.display = 'none';
        }
    });

    // Set dynamic year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Initialize AOS with error handling
    if (typeof AOS !== 'undefined') {
        AOS.init();
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