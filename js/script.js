// =============================================
// ESTHER WAMBUI PORTFOLIO — JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- LOADER ----
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);

    // ---- CUSTOM CURSOR ----
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    if (cursor && follower) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.12;
            followerY += (mouseY - followerY) * 0.12;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            requestAnimationFrame(animateFollower);
        }
        animateFollower();
        document.querySelectorAll('a, button, .skill-card, .project-card, .service-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                follower.style.borderColor = 'rgba(244,114,182,0.8)';
                follower.style.width = '48px';
                follower.style.height = '48px';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                follower.style.borderColor = 'rgba(244,114,182,0.4)';
                follower.style.width = '32px';
                follower.style.height = '32px';
            });
        });
    }

    // ---- HEADER SCROLL ----
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ---- MOBILE MENU ----
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });

    // ---- THEME TOGGLE ----
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    // ---- TYPEWRITER ----
    const typeEl = document.getElementById('typewriter');
    const words = ['Developer', 'Designer', 'Creator', 'Problem Solver'];
    let wordIndex = 0, charIndex = 0, deleting = false;

    function typeWrite() {
        const word = words[wordIndex];
        if (!deleting) {
            typeEl.textContent = word.slice(0, ++charIndex);
            if (charIndex === word.length) {
                deleting = true;
                setTimeout(typeWrite, 1800);
                return;
            }
        } else {
            typeEl.textContent = word.slice(0, --charIndex);
            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        setTimeout(typeWrite, deleting ? 60 : 100);
    }
    typeWrite();

    // ---- REVEAL ON SCROLL ----
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));

    // ---- SKILL BARS ----
    const skillFills = document.querySelectorAll('.skill-fill');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    skillFills.forEach(fill => skillObserver.observe(fill));

    // ---- ADD REVEAL TO SECTION CHILDREN ----
    const animTargets = document.querySelectorAll(
        '.skill-card, .project-card, .service-card, .about-grid, .contact-grid'
    );
    animTargets.forEach(el => {
        if (!el.classList.contains('reveal')) el.classList.add('reveal');
        observer.observe(el);
    });

    // ---- CONTACT FORM ----
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const original = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
            btn.style.background = '#4ade80';
            btn.style.color = '#0a0a0a';
            setTimeout(() => {
                btn.innerHTML = original;
                btn.style.background = '';
                btn.style.color = '';
                form.reset();
            }, 3000);
        });
    }

    // ---- ACTIVE NAV LINK ----
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === `#${current}`
                ? 'var(--accent)'
                : '';
        });
    });

});

// ---- DOWNLOAD CV ----
function downloadCV() {
    const link = document.createElement('a');
    link.href = '/assets/Esther_Wambui_CV.pdf';
    link.download = 'Esther_Wambui_CV.pdf';
    link.click();
}