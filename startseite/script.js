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

    const serviceBoxes = document.querySelectorAll('.service-box');
    const bundleBoxes = document.querySelectorAll('.bundle-box');
    const allBoxes = [...serviceBoxes, ...bundleBoxes];

    function animateBoxesOnScroll() {
        allBoxes.forEach((box, i) => {
            const rect = box.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80 && !box.classList.contains('visible')) {
                gsap.to(box, {opacity: 1, y: 0, duration: 0.7, delay: i * 0.15, onStart: () => box.classList.add('visible')});
            }
        });
    }
    window.addEventListener('scroll', animateBoxesOnScroll);
    animateBoxesOnScroll();

    // Cookie Popup
    const cookiePopup = document.getElementById('cookiePopup');
    const allowBtn = document.getElementById('cookieAllow');
    const declineBtn = document.getElementById('cookieDecline');

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
    }
    function getCookie(name) {
        const v = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return v ? v.pop() : '';
    }

    if (!getCookie('cookieConsent')) {
        cookiePopup.classList.remove('hide');
    } else {
        cookiePopup.classList.add('hide');
    }

    allowBtn.addEventListener('click', () => {
        setCookie('cookieConsent', 'allowed', 365);
        cookiePopup.classList.add('hide');
    });
    declineBtn.addEventListener('click', () => {
        setCookie('cookieConsent', 'declined', 365);
        cookiePopup.classList.add('hide');
    });

    // Hamburger Menü Dropdown
    const navHamburger = document.getElementById('navHamburger');
    const navDropdown = document.getElementById('navDropdown');

    navHamburger.addEventListener('click', () => {
        navDropdown.classList.toggle('open');
        navHamburger.classList.toggle('active');
    });

    // Schließe das Menü beim Klick außerhalb
    document.addEventListener('click', (e) => {
        if (
            navDropdown.classList.contains('open') &&
            !navDropdown.contains(e.target) &&
            !navHamburger.contains(e.target)
        ) {
            navDropdown.classList.remove('open');
            navHamburger.classList.remove('active');
        }
    });
    const navIcon = document.getElementById('navIcon');

    navIcon.addEventListener('click', () => {
            location.href = '../startseite/index.html';

    });
    
});