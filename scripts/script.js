document.addEventListener('DOMContentLoaded', () => {
    // Check if GSAP and ScrollTrigger are available
    if (typeof gsap === 'undefined') {
        console.error('GSAP is not loaded');
        return;
    }

    // Register ScrollTrigger plugin early
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    } else {
        console.warn('ScrollTrigger plugin is not loaded');
    }

    // Page fade in animation on load - set initial opacity properly
    gsap.set(document.body, { opacity: 0 });
    gsap.to(document.body, { opacity: 1, duration: 0.4, ease: 'power2.out' });

    // Page transition function
    function fadeToPage(url) {
        gsap.to(document.body, { 
            opacity: 0, 
            duration: 0.3, 
            ease: 'power2.in',
            onComplete: () => {
                window.location.href = url;
            }
        });
    }

    // Add fade transition to all navigation links
    const navLinks = document.querySelectorAll('#navDropdown a, .nav-item a, .service-learn-more, .contact-cta-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
                e.preventDefault();
                fadeToPage(href);
            }
        });
    });

    // Dynamic Background Animations
    initDynamicBackground();

    // WelcomeText Animation: Container einblenden
    gsap.fromTo('#welcomeText', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
    // Einzelne Elemente nacheinander einblenden
    gsap.from('#mainText h1', { opacity: 0, y: 30, duration: 0.5, delay: 0.3 });
    gsap.from('#mainText hr', { opacity: 0, scaleX: 0, duration: 0.4, delay: 0.6 });
    gsap.from('#mainText h3', { opacity: 0, y: 20, duration: 0.5, delay: 0.9 });
    // Navigation einblenden
    gsap.from('#nav', { opacity: 0, y: -30, duration: 0.5, delay: 0.1 });

    // Animated Background Parallax Effects
    function initBackgroundAnimations() {
        const scrollLogo1 = document.getElementById('scrollLogo1');
        const scrollLogo2 = document.getElementById('scrollLogo2');
        const scrollCode1 = document.getElementById('scrollCode1');
        const scrollCode2 = document.getElementById('scrollCode2');

        if (scrollLogo1 && scrollLogo2 && scrollCode1 && scrollCode2) {
            // Position the scroll elements initially
            gsap.set(scrollLogo1, { x: '20vw', y: '30vh', rotation: 0 });
            gsap.set(scrollLogo2, { x: '70vw', y: '70vh', rotation: 45 });
            gsap.set(scrollCode1, { x: '10vw', y: '60vh', rotation: 0 });
            gsap.set(scrollCode2, { x: '80vw', y: '20vh', rotation: -15 });

            // Create scroll-triggered animations for logos
            gsap.to(scrollLogo1, {
                x: '80vw',
                y: '10vh',
                rotation: 180,
                scale: 1.2,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1
                }
            });

            gsap.to(scrollLogo2, {
                x: '30vw',
                y: '40vh',
                rotation: -90,
                scale: 0.8,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.5
                }
            });

            // Create scroll-triggered animations for code blocks
            gsap.to(scrollCode1, {
                x: '70vw',
                y: '80vh',
                rotation: 15,
                scale: 1.1,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.8
                }
            });

            gsap.to(scrollCode2, {
                x: '20vw',
                y: '50vh',
                rotation: 25,
                scale: 0.9,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.2
                }
            });

            // Parallax effect for tech shapes
            const techShapes = document.querySelectorAll('.tech-shape');
            techShapes.forEach((shape, index) => {
                gsap.to(shape, {
                    y: `${-100 - (index * 30)}px`,
                    rotation: `${360 + (index * 45)}deg`,
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 2 + (index * 0.3)
                    }
                });
            });

            // Parallax effect for social icons
            const socialIcons = document.querySelectorAll('.social-bg-icon');
            socialIcons.forEach((icon, index) => {
                gsap.to(icon, {
                    y: `${-80 - (index * 25)}px`,
                    x: `${20 + (index * 15)}px`,
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1.5 + (index * 0.4)
                    }
                });
            });

            // Background gradient animation on scroll
            gsap.to('.animated-background', {
                background: 'linear-gradient(135deg, #e8f4fd 0%, #d1e7dd 100%)',
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 3
                }
            });

            // Grid animation speed change on scroll
            gsap.to('.digital-grid', {
                animationDuration: '15s',
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 2
                }
            });
        }
    }

    // Subpage-specific background animations
    function initSubpageBackgrounds() {
        // Ensure scroll elements exist and animate them for all subpages
        const scrollLogo1 = document.getElementById('scrollLogo1');
        const scrollLogo2 = document.getElementById('scrollLogo2');
        const scrollCode1 = document.getElementById('scrollCode1');
        const scrollCode2 = document.getElementById('scrollCode2');

        if (scrollLogo1 && scrollLogo2 && scrollCode1 && scrollCode2) {
            // Position the scroll elements initially for subpages
            gsap.set(scrollLogo1, { x: '15vw', y: '25vh', rotation: 0 });
            gsap.set(scrollLogo2, { x: '75vw', y: '65vh', rotation: 30 });
            gsap.set(scrollCode1, { x: '8vw', y: '55vh', rotation: 0 });
            gsap.set(scrollCode2, { x: '85vw', y: '15vh', rotation: -10 });

            // Create scroll-triggered animations for subpage logos
            gsap.to(scrollLogo1, {
                x: '85vw',
                y: '5vh',
                rotation: 120,
                scale: 1.3,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.2
                }
            });

            gsap.to(scrollLogo2, {
                x: '25vw',
                y: '35vh',
                rotation: -60,
                scale: 0.7,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.8
                }
            });

            // Create scroll-triggered animations for subpage code blocks
            gsap.to(scrollCode1, {
                x: '75vw',
                y: '75vh',
                rotation: 20,
                scale: 1.2,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.9
                }
            });

            gsap.to(scrollCode2, {
                x: '15vw',
                y: '45vh',
                rotation: 30,
                scale: 0.8,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.5
                }
            });
        }

        // Animate tech shapes for all pages
        const techShapes = document.querySelectorAll('.tech-shape');
        if (techShapes.length > 0) {
            techShapes.forEach((shape, index) => {
                gsap.to(shape, {
                    y: `${-120 - (index * 35)}px`,
                    rotation: `${400 + (index * 60)}deg`,
                    scale: 1.1 + (index * 0.1),
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 2.5 + (index * 0.4)
                    }
                });
            });
        }

        // Detect current page
        const currentPage = window.location.pathname;
        
        // Enhanced animations for service icons (Leistungen page)
        const serviceIcons = document.querySelectorAll('.service-bg-icon');
        if (serviceIcons.length > 0) {
            serviceIcons.forEach((icon, index) => {
                gsap.to(icon, {
                    y: `${-60 - (index * 20)}px`,
                    rotation: `${15 + (index * 10)}deg`,
                    scale: 1.1,
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1.8 + (index * 0.3)
                    }
                });
            });

            // Background color variation for services page
            gsap.to('.animated-background', {
                background: 'linear-gradient(135deg, #f0f4ff 0%, #dbeafe 100%)',
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 3
                }
            });
        }

        // Enhanced animations for package icons (Bundles page)
        const packageIcons = document.querySelectorAll('.package-bg-icon');
        if (packageIcons.length > 0) {
            packageIcons.forEach((icon, index) => {
                gsap.to(icon, {
                    y: `${-50 - (index * 25)}px`,
                    rotation: `${-10 + (index * 5)}deg`,
                    scale: 0.9 + (index * 0.1),
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 2.2 + (index * 0.4)
                    }
                });
            });

            // Background color variation for bundles page
            gsap.to('.animated-background', {
                background: 'linear-gradient(135deg, #f0f4ff 0%, #dbeafe 100%)',
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 3
                }
            });
        }

        // Enhanced animations for team icons (Info page)
        const teamIcons = document.querySelectorAll('.team-bg-icon');
        if (teamIcons.length > 0) {
            teamIcons.forEach((icon, index) => {
                gsap.to(icon, {
                    y: `${-70 - (index * 15)}px`,
                    x: `${10 + (index * 8)}px`,
                    rotation: `${20 - (index * 8)}deg`,
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1.5 + (index * 0.5)
                    }
                });
            });

            // Background color variation for info page
            gsap.to('.animated-background', {
                background: 'linear-gradient(135deg, #f0f4ff 0%, #dbeafe 100%)',
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 3
                }
            });
        }

        // Enhanced animations for contact icons (Kontakt page)
        const contactIcons = document.querySelectorAll('.contact-bg-icon');
        if (contactIcons.length > 0) {
            contactIcons.forEach((icon, index) => {
                gsap.to(icon, {
                    y: `${-45 - (index * 30)}px`,
                    x: `${-5 + (index * 12)}px`,
                    rotation: `${-15 + (index * 12)}deg`,
                    scale: 1.05,
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1.2 + (index * 0.3)
                    }
                });
            });

            // Background color variation for contact page
            gsap.to('.animated-background', {
                background: 'linear-gradient(135deg, #f0f4ff 0%, #dbeafe 100%)',
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 3
                }
            });
        }

        // Add floating particles animation for all pages
        const particles = document.querySelectorAll('.floating-particle');
        if (particles.length > 0) {
            particles.forEach((particle, index) => {
                gsap.to(particle, {
                    y: `${-40 - (index * 15)}px`,
                    x: `${Math.sin(index) * 20}px`,
                    scale: 1.2 + (index * 0.1),
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.8 + (index * 0.2)
                    }
                });
            });
        }
    }

    // Initialize background animations
    initBackgroundAnimations();
    
    // Initialize subpage-specific background animations
    initSubpageBackgrounds();
    
    gsap.from('.nav-item, .nav-logo', { opacity: 0, y: -10, stagger: 0.1, duration: 0.4, delay: 0.2 });

    // --- NEU: Animation für Service- und Bundle-Boxen auf der Startseite ---
    // Service-Boxen (neues flexibles Layout) - Schnellere Animation
    const serviceRows = document.querySelectorAll('#servicesAltWrapper .service-row');
    serviceRows.forEach((row, i) => {
        const fromX = i % 2 === 0 ? -60 : 60; // Noch weniger Distanz
        
        // Set initial state
        gsap.set(row, { opacity: 0, x: fromX });
        
        gsap.to(row, {
            opacity: 1,
            x: 0,
            duration: 0.5, // Schnellere Animation
            ease: 'power2.out', // Schnellerer Easing
            scrollTrigger: {
                trigger: row,
                start: 'top 80%', // Viel früher starten
                toggleActions: 'play none none none',
                once: true
            }
        });
    });

    // Bundle-Boxen: Noch früheres Pop-in (scale, y, opacity)
    const bundleBoxes = document.querySelectorAll('.bundle-box');
    bundleBoxes.forEach((box, i) => {
        gsap.fromTo(
            box,
            { opacity: 0, scale: 0.95, y: 30 }, // Noch sanftere Ausgangswerte
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6, // Schnellere Duration
                delay: 0.1 + i * 0.08, // Kürzere Verzögerung
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: box,
                    start: 'top 95%', // Früher starten
                    toggleActions: 'play none none none',
                    once: true
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

    // --- TRUE SEAMLESS INFINITE HORIZONTAL SLIDER ---
    // Die horizontale Scrollbox funktioniert jetzt nativ mit normalem Scrollen. Keine GSAP-Logik, kein Dragging, kein Endlos-Scrollen mehr.
    

    // --- ENDE NEU ---

    // --- Service Detail Boxes Animation (Leistungen page) ---
    const servicesDetailWrapper = document.getElementById('servicesDetailWrapper');
    if (servicesDetailWrapper) {
        // Animate the entire wrapper container
        gsap.fromTo(
            servicesDetailWrapper,
            { 
                opacity: 0,
                y: 60 
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: typeof ScrollTrigger !== 'undefined' ? {
                    trigger: servicesDetailWrapper,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                } : undefined
            }
        );

        // Animate individual service detail boxes when they come into view
        const serviceDetailBoxes = servicesDetailWrapper.querySelectorAll('.service-detail-box');
        serviceDetailBoxes.forEach((box, boxIndex) => {
            // Animate the box container when it comes into view
            gsap.fromTo(
                box,
                { 
                    opacity: 0,
                    y: 80 
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: typeof ScrollTrigger !== 'undefined' ? {
                        trigger: box,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    } : undefined
                }
            );

            // Animate individual text elements within each box with stagger
            const textElements = box.querySelectorAll('h2, p, ul, li');
            gsap.fromTo(
                textElements,
                { 
                    opacity: 0,
                    y: 30 
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    delay: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: typeof ScrollTrigger !== 'undefined' ? {
                        trigger: box,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    } : undefined
                }
            );
        });
    }

    // --- AboutWrapper Animation (Leistungen page) ---
    const aboutWrapper = document.getElementById('aboutWrapper');
    if (aboutWrapper) {
        // Animate the entire wrapper container
        gsap.fromTo(
            aboutWrapper,
            { 
                opacity: 0,
                y: 60 
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: typeof ScrollTrigger !== 'undefined' ? {
                    trigger: aboutWrapper,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                } : undefined
            }
        );

        // Animate individual elements with stagger
        const aboutElements = aboutWrapper.querySelectorAll('h2, p, ul, .bundles-cta');
        gsap.fromTo(
            aboutElements,
            { 
                opacity: 0,
                y: 30 
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.2,
                ease: 'power2.out',
                scrollTrigger: typeof ScrollTrigger !== 'undefined' ? {
                    trigger: aboutWrapper,
                    start: 'top 75%',
                    toggleActions: 'play none none none'
                } : undefined
            }
        );
    }

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

    function deleteCookie(name) {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    // Funktion um zu prüfen ob Cookies erlaubt sind
    function areCookiesAllowed() {
        return getCookie('cookieConsent') === 'allowed';
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
                console.log('Cookies akzeptiert');
                // Hier könntest du Analytics oder andere Tracking-Scripts laden
            });
        }
        
        if (declineBtn) {
            declineBtn.addEventListener('click', () => {
                setCookie('cookieConsent', 'declined', 365);
                cookiePopup.classList.add('hide');
                console.log('Cookies abgelehnt');
                // Stelle sicher, dass keine Tracking-Cookies gesetzt werden
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

    navIcon.addEventListener('click', (e) => {
        e.preventDefault();
        // Check if we're in a subdirectory by looking for '../' in current links
        const isSubpage = document.querySelector('a[href*="../"]') !== null;
        const indexPath = isSubpage ? '../index.html' : 'index.html';
        fadeToPage(indexPath);
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

    if (document.querySelector('.pricing-info-animate')) {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo('.pricing-info-animate', 
        {
            opacity: 0,
            y: 60
        }, 
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.pricing-info-animate',
                start: "top 80%",
                toggleClass: {targets: '.pricing-info', className: 'animate'}
            }
        }
    );
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

    // Dynamic Footer Loading
    function loadFooter() {
        try {
            // Footer data directly in JavaScript
            const footerData = {
                title: "Impressum & Kontakt",
                companyName: "KOVOO",
                contacts: [
                    {
                        name: "Raphael Köhrer",
                        phone: "+4367762118898",
                        phoneDisplay: "+43 (0) 677 6211 8898"
                    },
                    {
                        name: "Thomas Vokal",
                        phone: "+4367762552986",
                        phoneDisplay: "+43 (0) 677 6255 2986"
                    }
                ],
                address: "Am Sonnenhang 6, A - 4615 Holzhausen",
                email: "support@kovoo.at",
                copyright: "© 2025 KOVOO. Alle Rechte vorbehalten."
            };
            
            // Determine the correct path based on current location
            const isSubpage = window.location.pathname.includes('/unterseiten/');
            const datenschutzPath = isSubpage ? '../datenschutz.html' : './datenschutz.html';
            const impressumPath = isSubpage ? '../impressum.html' : './impressum.html';
            
            const footerHTML = `
                <div class="footer-content">
                    <div class="footer-title">${footerData.title}</div>
                    <hr class="footer-hr">
                    <p>
                        <strong>${footerData.companyName}</strong><br>
                        ${footerData.address}<br>
                        <a href="mailto:${footerData.email}">${footerData.email}</a>
                    </p>
                    <p>
                        <strong>Kontakte:</strong><br>
                        ${footerData.contacts[0].name}: <a href="tel:${footerData.contacts[0].phone}">${footerData.contacts[0].phoneDisplay}</a><br>
                        ${footerData.contacts[1].name}: <a href="tel:${footerData.contacts[1].phone}">${footerData.contacts[1].phoneDisplay}</a>
                    </p>
                    <p>
                        <a href="${datenschutzPath}">Datenschutz</a> &nbsp;|&nbsp; 
                        <a href="${impressumPath}">Impressum</a>
                    </p>
                    <p style="margin-top:1.2em;font-size:0.97em;opacity:0.7;">
                        ${footerData.copyright}
                    </p>
                </div>
            `;
            
            const footerElement = document.querySelector('.footer, #footer');
            if (footerElement) {
                footerElement.innerHTML = footerHTML;
            }
        } catch (error) {
            console.error('Error loading footer:', error);
            // Fallback footer if loading fails
            const footerElement = document.querySelector('.footer, #footer');
            if (footerElement) {
                footerElement.innerHTML = `
                    <div class="footer-content">
                        <div class="footer-title">Kontakt</div>
                        <hr class="footer-hr">
                        <p>Bei Fragen kontaktieren Sie uns per E-Mail.</p>
                    </div>
                `;
            }
        }
    }

    // Dynamic Background Animation Function
    function initDynamicBackground() {
        // Only proceed if we have the necessary elements
        const bgShapes = document.querySelectorAll('.bg-shape');
        const particles = document.querySelectorAll('.particle');
        
        if (bgShapes.length === 0 && particles.length === 0) {
            return;
        }

        // Background gradient animation on scroll
        gsap.to('.animated-background', {
            background: 'linear-gradient(135deg, #e8f1f8 0%, #d1e4f0 20%, #c4ddf2 40%, #b2d3ef 60%, #9fc7eb 80%, #8cb8e8 100%)',
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2
            }
        });

        // Animate geometric shapes based on scroll
        bgShapes.forEach((shape, index) => {
            const speed = parseFloat(shape.dataset.speed) || 0.5;
            const direction = index % 2 === 0 ? 1 : -1;
            
            // Different animation patterns for different shapes
            if (shape.classList.contains('circle')) {
                gsap.to(shape, {
                    y: `${-150 * speed * direction}px`,
                    x: `${50 * speed * direction}px`,
                    rotation: `${180 * direction}deg`,
                    scale: 1.1 + (speed * 0.3),
                    opacity: 0.15,
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1 + speed
                    }
                });
            } else if (shape.classList.contains('triangle')) {
                gsap.to(shape, {
                    y: `${-100 * speed * direction}px`,
                    x: `${30 * speed}px`,
                    rotation: `${120 * direction}deg`,
                    scale: 1 + (speed * 0.2),
                    opacity: 0.12,
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.8 + speed
                    }
                });
            } else if (shape.classList.contains('square')) {
                gsap.to(shape, {
                    y: `${-80 * speed}px`,
                    x: `${40 * speed * direction}px`,
                    rotation: `${90 + (45 * direction)}deg`,
                    scale: 0.9 + (speed * 0.4),
                    opacity: 0.1,
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1.2 + speed
                    }
                });
            } else if (shape.classList.contains('hexagon')) {
                gsap.to(shape, {
                    y: `${-120 * speed}px`,
                    x: `${25 * speed * direction}px`,
                    rotation: `${60 * direction}deg`,
                    scale: 1.05 + (speed * 0.25),
                    opacity: 0.13,
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1.5 + speed
                    }
                });
            }
        });

        // Animate particles
        particles.forEach((particle, index) => {
            const speed = parseFloat(particle.dataset.speed) || 0.5;
            const direction = index % 3 === 0 ? 1 : index % 3 === 1 ? -1 : 0;
            
            gsap.to(particle, {
                y: `${-200 * speed}px`,
                x: `${30 * speed * direction}px`,
                opacity: 0.9,
                scale: 1.5 + speed,
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.5 + speed
                }
            });
        });

        // Add floating animation to shapes when not scrolling
        bgShapes.forEach((shape, index) => {
            gsap.to(shape, {
                y: '+=20',
                rotation: '+=5',
                duration: 3 + (index * 0.5),
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1
            });
        });

        // Add gentle floating to particles
        particles.forEach((particle, index) => {
            gsap.to(particle, {
                y: '+=15',
                x: '+=10',
                duration: 2 + (index * 0.3),
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1
            });
        });

        // Responsive adjustments
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        
        function handleResponsive(e) {
            if (e.matches) {
                // Mobile: reduce animation intensity
                gsap.set('.bg-shape', { scale: 0.7, opacity: 0.05 });
                gsap.set('.particle', { scale: 0.8, opacity: 0.5 });
            } else {
                // Desktop: full animation intensity
                gsap.set('.bg-shape', { scale: 1, opacity: 0.08 });
                gsap.set('.particle', { scale: 1, opacity: 0.7 });
            }
        }
        
        mediaQuery.addListener(handleResponsive);
        handleResponsive(mediaQuery);
    }

    // Load footer dynamically
    loadFooter();
});