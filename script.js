// MedVoyage Website JavaScript

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 90;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            country: document.getElementById('country').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };
        
        // Show success message
        alert('Thank you for contacting MedVoyage!\n\nWe have received your inquiry and will respond within 24 hours.\n\nFor immediate assistance, please WhatsApp us at +20 111 653 7396');
        
        // Reset form
        this.reset();
        
        // In production, you would send this data to your server
        console.log('Form submitted:', formData);
    });
}

// Mobile menu toggle (if needed in future)
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Add active state to navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Log page load for analytics (optional)
console.log('MedVoyage website loaded successfully');
console.log('For support: info@medvoyage.me | WhatsApp: +20 111 653 7396');