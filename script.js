// Age verification functionality
document.addEventListener('DOMContentLoaded', function() {
    const ageVerification = document.getElementById('ageVerification');
    const verifyYesBtn = document.getElementById('verifyYes');
    const verifyNoBtn = document.getElementById('verifyNo');
    
    // Check if user has already verified age
    if (localStorage.getItem('ageVerified') === 'true') {
        ageVerification.style.display = 'none';
    }
    
    // Yes button event listener
    verifyYesBtn.addEventListener('click', function() {
        ageVerification.style.display = 'none';
        // Store verification in localStorage
        localStorage.setItem('ageVerified', 'true');
    });
    
    // No button event listener
    verifyNoBtn.addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Product hover effects
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});
