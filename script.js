document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelector('.round').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('.arrow').classList.toggle('bounceAlpha');
    });
});
