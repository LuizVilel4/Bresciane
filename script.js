// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(2, 1, 1, 0.98)';
        } else {
            header.style.backgroundColor = 'rgba(2, 1, 1, 0.95)';
        }
    });

    // Reviews carousel
    let currentReview = 0;
    const reviews = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.dot');

    function showNextReview() {
        reviews[currentReview].classList.remove('active');
        dots[currentReview].classList.remove('active');
        
        currentReview = (currentReview + 1) % reviews.length;
        
        reviews[currentReview].classList.add('active');
        dots[currentReview].classList.add('active');
    }

    // Auto-advance reviews every 5 seconds
    setInterval(showNextReview, 5000);

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const message = formData.get('message');

        // Validação simples
        if (!name || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Monta a mensagem para o WhatsApp
        const texto = `Olá, meu nome é ${name}. Mensagem: ${message}`;
        const numero = '5511930161889'; // Substitua pelo número do WhatsApp desejado, com DDI e DDD
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    });

    // Scroll animations
    const animatedElements = document.querySelectorAll('.service-card, .package-card, .review-card');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load

    // Loading animation
    document.body.classList.add('loading');
});

// Reviews carousel manual control
function showReview(index) {
    const reviews = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.dot');
    
    reviews.forEach(review => review.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    reviews[index].classList.add('active');
    dots[index].classList.add('active');
}

// Open Google Maps
function openMaps() {
    const address = "Centro comercial Alphaville — Calçada das Bétulas, 43";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
}

// Enhanced scroll behavior for navigation
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all animatable elements
document.addEventListener('DOMContentLoaded', () => {
    const animatableElements = document.querySelectorAll('.service-card, .package-card, .contact-item');
    animatableElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Smooth reveal animation for sections
function revealSections() {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealSections);

// Enhanced mobile menu experience
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuLinks = document.querySelectorAll('.nav-link');
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add a small delay to see the click effect
            setTimeout(() => {
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }, 150);
        });
    });
});

// Enhanced form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff4444';
            isValid = false;
        } else {
            input.style.borderColor = '#f9de9b';
        }
    });
    
    return isValid;
}

// Enhanced contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = contactForm.querySelector('.submit-button');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm(contactForm)) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Add loading state
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
            submitButton.textContent = 'Enviar Mensagem';
            submitButton.disabled = false;
        }, 2000);
    });
});

// Add smooth transitions to package cards
document.addEventListener('DOMContentLoaded', function() {
    const packageCards = document.querySelectorAll('.package-card');
    
    packageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
});

// Botão Voltar ao Topo
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) {
        console.log('Botão Voltar ao Topo não encontrado');
        return;
    }
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});