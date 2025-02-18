document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');
    const dropdown = document.querySelector('.dropdown');

    // Function to toggle the dropdown menu
    function toggleMenu() {
        dropdown.classList.toggle('show-menu');
    }

 
    hamburger.addEventListener('click', toggleMenu);

  
    cancel.addEventListener('click', toggleMenu);

   
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && !hamburger.contains(event.target)) {
            dropdown.classList.remove('show-menu');
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you would typically handle form submission, e.g., send via email or to a backend API
    alert('Form Submitted!'); // Placeholder for actual functionality
});