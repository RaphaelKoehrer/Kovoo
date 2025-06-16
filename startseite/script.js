document.addEventListener('DOMContentLoaded', () => {
    // WelcomeText Animation: Container einblenden
    gsap.fromTo('#welcomeText', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
    // Einzelne Elemente nacheinander einblenden
    gsap.from('#mainText h1', { opacity: 0, y: 30, duration: 0.5, delay: 0.3 });
    gsap.from('#mainText hr', { opacity: 0, scaleX: 0, duration: 0.4, delay: 0.6 });
    gsap.from('#mainText h3', { opacity: 0, y: 20, duration: 0.5, delay: 0.9 });
    // Navigation einblenden
    gsap.from('#nav', { opacity: 0, y: -30, duration: 0.5, delay: 0.1 });
    gsap.from('.nav-item, .nav-logo', { opacity: 0, y: -10, stagger: 0.1, duration: 0.4, delay: 0.2 });
});