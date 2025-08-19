
        // Loading animation
        window.addEventListener('load', () => {
            const loading = document.getElementById('loading');
            setTimeout(() => {
                loading.classList.add('hidden');
            }, 1000);
        });

        // Mobile menu toggle
        const hamburg = document.querySelector('.hamburg');
        const dropdown = document.querySelector('.dropdown');
        const cancel = document.querySelector('.cancel');

        hamburg.addEventListener('click', () => {
            dropdown.classList.add('active');
        });

        cancel.addEventListener('click', () => {
            dropdown.classList.remove('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.dropdown a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => {
                dropdown.classList.remove('active');
            });
        });

        // Typewriter effect
        const typewriterElement = document.getElementById('typewriter');
        const texts = ['Frontend Developer', 'UI/UX Designer', 'Web Developer', 'Problem Solver'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function typeWriter() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeWriter, typeSpeed);
        }

        // Start typewriter effect
        typeWriter();

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                themeIcon.className = 'fa-solid fa-moon';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.className = 'fa-solid fa-sun';
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0.2s';
                    entry.target.style.animationFillMode = 'forwards';
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Particle system
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            document.getElementById('particles').appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 6000);
        }

        // Create particles periodically
        setInterval(createParticle, 300);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active navigation highlighting
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');

        function highlightNavigation() {
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', highlightNavigation);

        // Form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Sending...';
            button.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        });

        // CV Download function
        function downloadCV() {
            // Create a simple CV content
            const cvContent = `
ESTHER WAMBUI - FRONTEND DEVELOPER
===================================

Contact Information:
Email: essie.k004@gmail.com
Phone: +254 741089724
Location: Nairobi, Kenya
GitHub: https://github.com/essie-kamau043
LinkedIn: https://www.linkedin.com/in/esther-kamau-92103128a/

Professional Summary:
Passionate Frontend Developer with over a year of experience creating responsive, 
user-friendly websites. Specializes in modern web technologies including React, 
JavaScript, HTML5, and CSS3.

Technical Skills:
• HTML5 & CSS3 (Advanced)
• JavaScript ES6+ (Intermediate)
• React.js (Intermediate)
• Bootstrap (Advanced)
• Figma (Intermediate)
• Responsive Web Design
• Version Control (Git)

Projects:
• E-commerce Platform - React/Bootstrap online store
• Portfolio Website - Modern responsive portfolio
• BMI Calculator - Interactive health tool
• Love Calculator - Fun web application

Services:
• Web Development
• UI/UX Design
• Website Maintenance

Education & Experience:
Frontend Developer - 1+ years experience
Specialized in creating digital solutions that blend functionality with aesthetic design.
            `;
            
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Esther-Wambui-CV.txt';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }

        // Header scroll effect
        let lastScrollTop = 0;
        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });

        // Add scroll progress indicator
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(to right, #667eea, #764ba2);
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });

        // Add CSS for active navigation
        const style = document.createElement('style');
        style.textContent = `
            .links a.active {
                color: var(--primary-color) !important;
            }
            .links a.active::after {
                width: 100% !important;
            }
        `;
        document.head.appendChild(style);
    