// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
});

// ===== TYPING ANIMATION =====
const typingText = document.getElementById('typingText');
const phrases = [
    'Frontend Developer',
    'Web Developer',
    'AI Enthusiast',
    'Software Engineering Student',
    'Freelance Web Developer'
];
let phraseIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
    }
    setTimeout(typeEffect, speed);
}
typeEffect();

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

// ===== COUNTER ANIMATION =====
let countersAnimated = false;
function animateCounters() {
    if (countersAnimated) return;
    const aboutSection = document.querySelector('.about');
    if (!aboutSection) return;
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        countersAnimated = true;
        document.querySelectorAll('.stat-num').forEach(counter => {
            const target = parseInt(counter.dataset.count);
            let current = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    counter.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    counter.textContent = current;
                }
            }, 40);
        });
    }
}
window.addEventListener('scroll', animateCounters);

// ===================================================
// ===== SERVICES DATA =====
// ===================================================
const servicesData = [
    {
        icon: 'fa-code',
        title: 'Frontend Development',
        desc: 'Building modern, responsive user interfaces with HTML, CSS, JavaScript, and Next.js.'
    },
    {
        icon: 'fa-paint-brush',
        title: 'UI/UX Design',
        desc: 'User-centered design focused on aesthetics, usability, and conversion-optimized layouts.'
    },
    {
        icon: 'fa-globe',
        title: 'Web Development',
        desc: 'Full web development from landing pages to dynamic web apps with modern frameworks.'
    },
    {
        icon: 'fa-rocket',
        title: 'Landing Pages',
        desc: 'High-converting landing pages designed to showcase products, services, and drive action.'
    },
    {
        icon: 'fa-brain',
        title: 'Generative AI Solutions',
        desc: 'Building AI-powered features like CV analyzers, smart assistants, and intelligent web tools.'
    },
    {
        icon: 'fa-robot',
        title: 'AI Integration',
        desc: 'Integrating Generative AI models and APIs into web applications for smarter experiences.'
    }
];

const servicesGrid = document.getElementById('servicesGrid');
servicesGrid.innerHTML = servicesData.map(s => `
    <div class="service-card fade-up">
        <div class="service-icon"><i class="fas ${s.icon}"></i></div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
    </div>
`).join('');

// ===================================================
// ===== SKILLS DATA =====
// ===================================================
const skillsData = [
    { name: 'HTML5', icon: 'fa-html5', level: 'Advanced' },
    { name: 'CSS3', icon: 'fa-css3-alt', level: 'Advanced' },
    { name: 'Tailwind CSS', icon: 'fa-wind', level: 'Intermediate' },
    { name: 'JavaScript', icon: 'fa-js', level: 'Intermediate' },
    { name: 'Next.js', icon: 'fa-react', level: 'Beginner' },
    { name: 'Responsive Design', icon: 'fa-mobile-alt', level: 'Advanced' },
    { name: 'MongoDB', icon: 'fa-database', level: 'Beginner' },
    { name: 'REST APIs', icon: 'fa-cloud', level: 'Beginner' },
    { name: 'Git & GitHub', icon: 'fa-github', level: 'Intermediate' },
    { name: 'Python', icon: 'fa-python', level: 'Intermediate' },
    { name: 'C++ / C', icon: 'fa-code', level: 'Intermediate' },
    { name: 'Generative AI', icon: 'fa-brain', level: 'Intermediate' },
    { name: 'UI/UX Design', icon: 'fa-palette', level: 'Intermediate' }
];

const skillsGrid = document.getElementById('skillsGrid');
skillsGrid.innerHTML = skillsData.map(s => `
    <div class="skill-card fade-up">
        <i class="fab ${s.icon}"></i>
        <span>${s.name}</span>
        <small>${s.level}</small>
    </div>
`).join('');

// ===================================================
// ===== PROJECTS DATA =====
// ===================================================
const projectsData = [
    {
        title: 'SmartPaper.pk',
        desc: 'Full-stack academic web platform with secure authentication and modern responsive interface.',
        tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'JWT'],
        link: 'https://github.com/maryamghaffar1234m-png/SmartPaper.pk',
        filter: 'web',
        icon: 'fa-file-alt',
        status: 'In Progress'
    },
    {
        title: 'CareerPulse-AI',
        desc: 'AI-powered CV analysis tool designed to recommend suitable career matches using Generative AI.',
        tags: ['Python', 'Generative AI', 'AI Integration'],
        link: 'https://github.com/maryamghaffar1234m-png/CareerPulse-AI',
        filter: 'ai',
        icon: 'fa-robot'
    },
    {
        title: 'Husan-e-Mahal',
        desc: 'Beauty product landing page featuring a responsive layout, image slider, and WhatsApp integration.',
        tags: ['HTML', 'CSS', 'JavaScript', 'AOS'],
        link: 'https://github.com/maryamghaffar1234m-png/My-First-Project',
        filter: 'frontend',
        icon: 'fa-spa'
    },
    {
        title: 'Product Inventory System',
        desc: 'Python-based inventory management system implementing Binary Search Tree and data structure concepts.',
        tags: ['Python', 'Data Structures'],
        link: 'https://github.com/maryamghaffar1234m-png/product-inventory-system',
        filter: 'python',
        icon: 'fa-boxes-stacked'
    },
    {
        title: 'TAJ-MEHAL COSMETICS',
        desc: 'Responsive cosmetics website with a modern product-focused user interface.',
        tags: ['HTML', 'CSS'],
        link: 'https://github.com/maryamghaffar1234m-png/TAJ-MEHAL-COSMETICS',
        filter: 'frontend',
        icon: 'fa-gem'
    },
    {
        title: 'Simple Form Validation',
        desc: 'Responsive signup form with real-time client-side validation and modern UI.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/maryamghaffar1234m-png/simple-form-with-JavaScript-validation',
        filter: 'frontend',
        icon: 'fa-check-circle'
    },
    {
        title: 'Online Banking System – SRS',
        desc: 'Software Requirements Specification with use case, class, ER, and activity diagrams.',
        tags: ['Requirements Engineering', 'UML', 'Documentation'],
        link: 'https://github.com/maryamghaffar1234m-png/Online-Banking-System-SRS',
        filter: 'documentation',
        icon: 'fa-university'
    },
    {
        title: 'Digital Marketing – SDG 4',
        desc: 'Social awareness campaign promoting girls\' education in Pakistan.',
        tags: ['Marketing', 'Social Media Strategy'],
        link: 'https://github.com/maryamghaffar1234m-png/Digital-Marketing-First-Project',
        filter: 'documentation',
        icon: 'fa-bullhorn'
    }
];

const projectsGrid = document.getElementById('projectsGrid');

function renderProjects(filter = 'all') {
    const filtered = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.filter === filter);

    projectsGrid.innerHTML = filtered.map(p => `
        <div class="project-card fade-up">
            <div class="project-image">
                <i class="fas ${p.icon}"></i>
                ${p.status ? `<span class="project-status">${p.status}</span>` : ''}
            </div>
            <div class="project-body">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="project-tags">
                    ${p.tags.map(t => `<span>${t}</span>`).join('')}
                </div>
                <a href="${p.link}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
}

renderProjects('all');

// ===== PROJECT FILTERS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// ===================================================
// ===== CERTIFICATIONS DATA (With Images) =====
// ===================================================
const certData = [
    {
        title: 'Generative AI Application Developer',
        issuer: 'Pak Angels & LCWU',
        date: 'June – July 2025',
        id: 'da05402425fd7c9d',
        image: 'certificate-genai.jpg'
    },
    {
        title: 'Frontend Development Internship',
        issuer: 'DEV ShieldX – Batch 01',
        date: 'April 2026',
        id: 'Certificate of Completion',
        image: 'certificate-internship.jpg'
    },
    {
        title: 'Mastering UI/UX Course',
        issuer: 'Innovista Learn Easy',
        date: 'September 9, 2026',
        id: '589-12054-147846',
        image: 'certificate-uiux.jpg'
    },
    {
        title: 'Freelancing Course',
        issuer: 'Innovista Learn Easy',
        date: 'September 2, 2026',
        id: '589-889-147846',
        image: 'certificate-freelancing.jpg'
    }
];

const certGrid = document.getElementById('certGrid');
certGrid.innerHTML = certData.map(c => `
    <div class="cert-card fade-up">
        <div class="cert-image-wrapper" data-image="${c.image}">
            <img src="${c.image}" alt="${c.title}" loading="lazy">
        </div>
        <h3>${c.title}</h3>
        <p>${c.issuer}</p>
        <span class="cert-date">${c.date}</span>
        <span class="cert-id">${c.id}</span>
    </div>
`).join('');

// ===== CERTIFICATE MODAL =====
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.cert-image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        const imgSrc = wrapper.dataset.image;
        modalImg.src = imgSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== CONTACT FORM (MAILTO) =====
function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    const mailtoLink = `mailto:maryamghaffar1234m@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
        document.getElementById('contactForm').reset();
    }, 500);
}

// ===== OBSERVE ALL FADE-UP ELEMENTS =====
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    animateCounters();
});
