// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create menu toggle button
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    
    // Insert after logo, before nav
    const logo = document.querySelector('.logo');
    header.insertBefore(menuToggle, nav);
    
    // Toggle menu visibility
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
    
    // Working process accordion functionality
    const processBoxes = document.querySelectorAll('.process-box');
    
    function toggleProcess(element) {
        const box = element.closest('.process-box');
        const icon = element.querySelector('span');
        
        // Close all other boxes
        processBoxes.forEach(item => {
            if (item !== box) {
                item.classList.remove('active');
                const itemIcon = item.querySelector('.process-header span');
                if (itemIcon) itemIcon.textContent = '+';
            }
        });
        
        // Toggle current box
        box.classList.toggle('active');
        icon.textContent = box.classList.contains('active') ? '-' : '+';
    }
    
    // Add click event to all process headers
    document.querySelectorAll('.process-header').forEach(header => {
        header.addEventListener('click', function() {
            toggleProcess(this);
        });
    });
    
    // Testimonial carousel functionality
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.dots');
    
    // Create dots for carousel
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.innerHTML = '•';
        dot.style.cursor = 'pointer';
        dot.style.fontSize = '1.5rem';
        dot.style.color = index === currentTestimonial ? '#B9FF66' : '#ccc';
        
        dot.addEventListener('click', () => {
            goToTestimonial(index);
        });
        
        dotsContainer.appendChild(dot);
    });
    
    function goToTestimonial(index) {
        testimonials.forEach(item => item.classList.remove('active'));
        const dots = dotsContainer.querySelectorAll('span');
        dots.forEach((dot, i) => {
            dot.style.color = i === index ? '#B9FF66' : '#ccc';
        });
        
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }
    
    window.prevTestimonial = function() {
        let index = currentTestimonial - 1;
        if (index < 0) index = testimonials.length - 1;
        goToTestimonial(index);
    };
    
    window.nextTestimonial = function() {
        let index = currentTestimonial + 1;
        if (index >= testimonials.length) index = 0;
        goToTestimonial(index);
    };
    
    // Make brand logos responsive on hover
    const brandLogos = document.querySelectorAll('.brand-logos img');
    brandLogos.forEach(logo => {
        const originalSrc = logo.src;
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Ensure all images are responsive
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy'); // Add lazy loading for performance
        }
    });
});