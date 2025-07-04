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

    // --- NEU: Animation für Service- und Bundle-Boxen auf der Startseite ---
    // Service-Boxen (neues flexibles Layout)
    const serviceRows = document.querySelectorAll('#servicesAltWrapper .service-row');
    serviceRows.forEach((row, i) => {
        const fromX = i % 2 === 0 ? -120 : 120;
        gsap.from(row, {
            opacity: 0,
            x: fromX,
            duration: 0.9,
            delay: 1.1 + i * 0.18,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: row,
                start: 'top 100%', // früheres Laden
                toggleActions: 'play none none none'
            }
        });
    });

    // Bundle-Boxen: Noch früheres Pop-in (scale, y, opacity)
    const bundleBoxes = document.querySelectorAll('.bundle-box');
    bundleBoxes.forEach((box, i) => {
        gsap.fromTo(
            box,
            { opacity: 0, scale: 0.85, y: 60 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.7,
                delay: 0.3 + i * 0.10, // noch früheres Pop-in
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: box,
                    start: 'top 99%', // noch früher sichtbar
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // CTA-Bereich (Interesse? Kontaktiere uns!) animieren (früher und unabhängig von delay)
    const cta = document.querySelector('div[style*="Interesse? Kontaktiere uns!"]');
    if (cta) {
        gsap.fromTo(
            cta,
            { opacity: 0, scale: 0.92, y: 60 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.7,
                delay: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: cta,
                    start: 'top 98%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }

    // Slider-Boxen Animation (leichtes Einfliegen)
    const sliderBoxes = document.querySelectorAll('.slider-box');
    sliderBoxes.forEach((box, i) => {
        gsap.from(box, {
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: 0.7 + i * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: box,
                start: 'top 95%',
                toggleActions: 'play none none none'
            }
        });
    });

    // --- ENDE NEU ---

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

    if (cookiePopup) {
        if (!getCookie('cookieConsent')) {
            cookiePopup.classList.remove('hide');
        } else {
            cookiePopup.classList.add('hide');
        }

        if (allowBtn) {
            allowBtn.addEventListener('click', () => {
                setCookie('cookieConsent', 'allowed', 365);
                cookiePopup.classList.add('hide');
            });
        }
        if (declineBtn) {
            declineBtn.addEventListener('click', () => {
                setCookie('cookieConsent', 'declined', 365);
                cookiePopup.classList.add('hide');
            });
        }
    }

    // Hamburger Menü Dropdown
    const navHamburger = document.getElementById('navHamburger');
    const navDropdown = document.getElementById('navDropdown');

    navHamburger.addEventListener('click', () => {
        navDropdown.classList.toggle('open');
        navHamburger.classList.toggle('active');
    });

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
        
            location.href = 'index.html';

    });
    
    // Kontaktformular: Erfolgsmeldung anzeigen
    const urlParams = new URLSearchParams(window.location.search);
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        if (urlParams.get('success') === '1') {
            formMessage.textContent = "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.";
        } else if (urlParams.get('error') === '1') {
            formMessage.textContent = "Fehler beim Senden. Bitte versuchen Sie es erneut.";
            formMessage.style.color = "red";
        }
    }

    // Social Media Icons Wave Animation
    const socialIcons = document.querySelectorAll('.service-social-icons img');
    if (socialIcons.length > 0 && window.gsap) {
        gsap.set(socialIcons, { y: 0 });
        gsap.to(socialIcons, {
            y: -50,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: {
                each: 0.18,
                repeat: -1,
                yoyo: true
            },
            duration: 0.55
        });
    }

    // --- Hintergrund-Farbverlauf beim Scrollen ---
    (function() {
        // Farben: von Standard zu dezentem Blau
        const colorStart = [240, 240, 240]; // #f0f0f0
        const colorEnd = [220, 230, 255];   // z.B. ein sehr dezentes Blau (#dce6ff)
        const maxScroll = 1.0;

        function lerp(a, b, t) {
            return Math.round(a + (b - a) * t);
        }

        function updateBgColor() {
            const scrollY = window.scrollY || window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            let progress = docHeight > 0 ? scrollY / docHeight : 0;
            progress = Math.min(progress, maxScroll) / maxScroll; // clamp & normiert auf 0..1

            const r = lerp(colorStart[0], colorEnd[0], progress);
            const g = lerp(colorStart[1], colorEnd[1], progress);
            const b = lerp(colorStart[2], colorEnd[2], progress);

            document.body.style.background = `linear-gradient(to bottom, rgb(${r},${g},${b}) 0%, var(--color-bg-gradient-end) 100%)`;
        }

        window.addEventListener('scroll', updateBgColor, { passive: true });
        window.addEventListener('resize', updateBgColor);
        updateBgColor();
    })();
});