// Explore Button Scroll
document.getElementById('exploreBtn').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// Form Submission Logic
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values (for testing)
    const name = this.querySelectorAll('input')[0].value;

    alert(`Thank you ${name}! Your message has been sent successfully.`);

    // Reset form
    this.reset();
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    } else {
        nav.style.boxShadow = "none";
    }
});