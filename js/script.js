document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');
    const dropdown = document.querySelector('.dropdown');

    
    function toggleMenu() {
        dropdown.classList.toggle('show-menu');
    }

    
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation(); 
        toggleMenu();
    });

    // Close dropdown when cancel icon is clicked
    cancel.addEventListener('click', function (e) {
        e.stopPropagation(); 
        toggleMenu();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target) && !hamburger.contains(event.target)) {
            dropdown.classList.remove('show-menu');
        }
    });

    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href'); 
            const targetSection = document.querySelector(targetId); 

            if (targetSection) {
                
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                
                dropdown.classList.remove('show-menu');
            }
        });
    });


    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});