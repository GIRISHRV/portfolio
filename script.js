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

}

setTheme();
document.querySelectorAll('.mode-switch .btn').forEach(e => e.addEventListener('click', () => setTheme(e.id)));
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => setTheme());

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + navbarHeight + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        if (index >= 0) {
            navLinks[index].classList.add('active');
        }
        
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);

    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);



            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        });
    });
});