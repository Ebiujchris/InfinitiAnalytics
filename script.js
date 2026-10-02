// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(252, 251, 248, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(252, 251, 248, 0.94)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Project carousel controls and timed rotation
const projectTrack = document.querySelector('.projects-grid');
const projectCards = Array.from(document.querySelectorAll('.project-card'));
const carouselPrevious = document.querySelector('[data-carousel-prev]');
const carouselNext = document.querySelector('[data-carousel-next]');
const carouselToggle = document.querySelector('[data-carousel-toggle]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (projectTrack && projectCards.length && carouselPrevious && carouselNext && carouselToggle) {
    let activeProject = 0;
    let userPaused = reducedMotion.matches;
    let pointerInside = false;
    let focusInside = false;
    let autoplayTimer;

    const updateRotation = () => {
        window.clearTimeout(autoplayTimer);
        if (userPaused || pointerInside || focusInside || document.hidden) return;

        autoplayTimer = window.setTimeout(() => {
            showProject(activeProject + 1);
            updateRotation();
        }, 5000);
    };

    const showProject = index => {
        activeProject = (index + projectCards.length) % projectCards.length;
        const trackLeft = projectTrack.getBoundingClientRect().left;
        const cardLeft = projectCards[activeProject].getBoundingClientRect().left - trackLeft + projectTrack.scrollLeft;
        projectTrack.scrollTo({
            left: cardLeft,
            behavior: reducedMotion.matches ? 'auto' : 'smooth'
        });
    };

    const syncActiveProject = () => {
        const trackLeft = projectTrack.getBoundingClientRect().left;
        activeProject = projectCards.reduce((closestIndex, card, index) => {
            const closestDistance = Math.abs(projectCards[closestIndex].getBoundingClientRect().left - trackLeft);
            const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
            return distance < closestDistance ? index : closestIndex;
        }, 0);
        updateRotation();
    };

    carouselPrevious.addEventListener('click', () => showProject(activeProject - 1));
    carouselNext.addEventListener('click', () => showProject(activeProject + 1));
    carouselToggle.addEventListener('click', () => {
        userPaused = !userPaused;
        carouselToggle.setAttribute('aria-pressed', String(userPaused));
        carouselToggle.setAttribute('aria-label', userPaused ? 'Play automatic project rotation' : 'Pause automatic project rotation');
        carouselToggle.setAttribute('title', userPaused ? 'Play automatic rotation' : 'Pause automatic rotation');
        carouselToggle.firstElementChild.textContent = userPaused ? '\u25b6' : '\u2016';
        updateRotation();
    });

    projectTrack.addEventListener('scroll', syncActiveProject, { passive: true });
    projectTrack.addEventListener('pointerenter', () => {
        pointerInside = true;
        updateRotation();
    });
    projectTrack.addEventListener('pointerleave', () => {
        pointerInside = false;
        updateRotation();
    });
    projectTrack.addEventListener('focusin', () => {
        focusInside = true;
        updateRotation();
    });
    projectTrack.addEventListener('focusout', event => {
        if (!projectTrack.contains(event.relatedTarget)) {
            focusInside = false;
            updateRotation();
        }
    });
    document.addEventListener('visibilitychange', updateRotation);

    carouselToggle.setAttribute('aria-pressed', String(userPaused));
    if (userPaused) {
        carouselToggle.setAttribute('aria-label', 'Play automatic project rotation');
        carouselToggle.setAttribute('title', 'Play automatic rotation');
        carouselToggle.firstElementChild.textContent = '\u25b6';
    }
    updateRotation();
}

// Observe feature items
document.querySelectorAll('.feature-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Form submission handling
const contactForm = document.querySelector('#contactForm');
const formMessage = document.querySelector('.form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || 'there';
    const email = formData.get('email')?.toString().trim() || '';
    const company = formData.get('company')?.toString().trim() || 'Not provided';
    const phone = formData.get('phone')?.toString().trim() || 'Not provided';
    const message = formData.get('message')?.toString().trim() || '';

    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${company}\n` +
        `Phone: ${phone}\n\n` +
        `Project details:\n${message}`
    );

    window.location.href = `mailto:info@infinitianalytics.com?subject=${subject}&body=${body}`;

    formMessage.textContent = 'Your email client is opening with your message. Thanks for reaching out!';
    formMessage.classList.add('success');
    contactForm.reset();
});

// Add stat counter animation
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
};

// Trigger stat animation when about section is visible
const aboutSection = document.querySelector('.about');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    statsObserver.observe(aboutSection);
}
