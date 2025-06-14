// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburg');
const dropdown = document.querySelector('.dropdown');
const cancel = document.querySelector('.cancel');

hamburger.addEventListener('click', () => {
    dropdown.classList.add('active');
});

cancel.addEventListener('click', () => {
    dropdown.classList.remove('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        dropdown.classList.remove('active'); // Close mobile menu on click
    });
});

// Typewriter Effect
const typewriterText = document.querySelector('.typewriter-text');
const words = JSON.parse(typewriterText.getAttribute('data-text'));
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    typewriterText.textContent = isDeleting 
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);
    
    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 200);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// Form Submission Handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    } catch (error) {
        alert('Network error. Please try again later.');
    }
});