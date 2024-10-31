document.addEventListener('DOMContentLoaded', function () {
    // Scroll smoothly to sections
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    // Add smooth scroll to buttons and nav links
    document.querySelectorAll('button[onclick^="scrollToSection"], .nav-links a').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href')?.substring(1) || this.getAttribute('onclick').match(/'([^']+)'/)[1];
            scrollToSection(sectionId);
        });
    });

    // Testimonial slider functionality
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    function showTestimonial(index) {
        testimonials.forEach((testimonial, idx) => {
            testimonial.style.display = idx === index ? 'block' : 'none';
        });
    }
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
    setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

    // Benefit item hover effect
    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });

    // Product items hover effect
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#ff9800';
            item.style.color = 'white';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '#f4f4f4';
            item.style.color = '#333';
        });
    });

    const heroButton = document.querySelector('.hero button');
    heroButton.addEventListener('click', () => {
        heroButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            heroButton.style.transform = 'scale(1)';
        }, 150);
    });

    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
});


