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
    { icon: 'fa-code', title: 'Frontend Development', desc: 'Building modern, responsive user interfaces with HTML, CSS, JavaScript, and Next.js.' },
    { icon: 'fa-mobile-alt', title: 'Responsive Website Development', desc: 'Mobile-first websites that look perfect on every device — desktop, tablet, and mobile.' },
    { icon: 'fa-rocket', title: 'Landing Pages', desc: 'High-converting landing pages designed to showcase products, services, and drive action.' },
    { icon: 'fa-paint-brush', title: 'UI/UX Design', desc: 'User-centered design focused on aesthetics, usability, and conversion-optimized layouts.' },
    { icon: 'fa-brain', title: 'Generative AI Projects', desc: 'Building AI-powered web tools like CV analyzers and smart assistants using Generative AI.' }
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
// ===== SKILLS DATA (FIXED: iconType) =====
// ===================================================
const skillsData = [
    { name: 'HTML5', icon: 'fa-html5', iconType: 'fab', level: 'Advanced' },
    { name: 'CSS3', icon: 'fa-css3-alt', iconType: 'fab', level: 'Advanced' },
    { name: 'Tailwind CSS', icon: 'fa-wind', iconType: 'fas', level: 'Intermediate' },
    { name: 'JavaScript', icon: 'fa-js', iconType: 'fab', level: 'Intermediate' },
    { name: 'Next.js', icon: 'fa-bolt', iconType: 'fas', level: 'Beginner' },
    { name: 'Responsive Design', icon: 'fa-mobile-alt', iconType: 'fas', level: 'Advanced' },
    { name: 'MongoDB', icon: 'fa-database', iconType: 'fas', level: 'Beginner' },
    { name: 'REST APIs', icon: 'fa-cloud', iconType: 'fas', level: 'Beginner' },
    { name: 'Git & GitHub', icon: 'fa-github', iconType: 'fab', level: 'Intermediate' },
    { name: 'Python', icon: 'fa-python', iconType: 'fab', level: 'Intermediate' },
    { name: 'C++ / C', icon: 'fa-code', iconType: 'fas', level: 'Intermediate' },
    { name: 'Generative AI', icon: 'fa-brain', iconType: 'fas', level: 'Intermediate' },
    { name: 'UI/UX Design', icon: 'fa-palette', iconType: 'fas', level: 'Intermediate' }
];

const skillsGrid = document.getElementById('skillsGrid');
skillsGrid.innerHTML = skillsData.map(s => `
    <div class="skill-card fade-up">
        <i class="${s.iconType} ${s.icon}"></i>
        <span>${s.name}</span>
        <small>${s.level}</small>
    </div>
`).join('');

// ===================================================
// ===== EXPERIENCE DATA (Fixed) =====
// ===================================================
const experienceData = [
    {
        date: 'April 2026',
        title: 'Frontend Development Intern',
        company: 'DEV ShieldX – Batch 01',
        points: [
            'Developed responsive web interfaces using HTML, CSS, and JavaScript.',
            'Worked on frontend development tasks and responsive UI implementation.',
            'Collaborated with the team on real-world web projects.'
        ]
    },
    {
        date: '2023 – 2025 (2 Years)',
        title: 'Computer Teacher',
        company: 'The Skaim College',
        points: [
            'Designed and delivered 50+ lectures for 100+ students on computer fundamentals.',
            'Developed lesson plans, conducted assessments, and managed classroom activities.',
            'Prepared practical examples and activities to improve student understanding.'
        ]
    }
];

const timeline = document.getElementById('timeline');
timeline.innerHTML = experienceData.map(exp => `
    <div class="timeline-item fade-up">
        <div class="timeline-content">
            <span class="timeline-date">${exp.date}</span>
            <h3>${exp.title}</h3>
            <h4>${exp.company}</h4>
            <ul>
                ${exp.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
        </div>
    </div>
`).join('');

// ===================================================
// ===== EDUCATION DATA (Separate Section) =====
// ===================================================
const educationData = [
    {
        icon: 'fa-graduation-cap',
        degree: 'BS Software Engineering',
        institution: 'Lahore College for Women University',
        period: '2024 – 2028',
        details: 'Currently in 5th semester with CGPA 3.44/4.00. Focused on web development, data structures, and software engineering principles.',
        badge: '5th Semester • CGPA 3.44/4.00'
    },
    {
        icon: 'fa-brain',
        degree: 'Generative AI Application Developer',
        institution: 'Pak Angels & LCWU',
        period: 'June – July 2025',
        details: 'Completed intensive training on Generative AI concepts, applications, and hands-on projects.',
        badge: 'Certified'
    },
    {
        icon: 'fa-palette',
        degree: 'Mastering UI/UX Course',
        institution: 'Innovista Learn Easy',
        period: 'September 2026',
        details: 'Learned user-centered design principles, prototyping, and modern UI/UX practices.',
        badge: 'Certified'
    },
    {
        icon: 'fa-briefcase',
        degree: 'Freelancing Course',
        institution: 'Innovista Learn Easy',
        period: 'September 2026',
        details: 'Learned how to start and manage a freelancing career, client communication, and project management.',
        badge: 'Certified'
    }
];

const educationGrid = document.getElementById('educationGrid');
educationGrid.innerHTML = educationData.map(e => `
    <div class="education-card fade-up">
        <div class="education-icon"><i class="fas ${e.icon}"></i></div>
        <h3>${e.degree}</h3>
        <h4>${e.institution}</h4>
        <p>${e.details}</p>
        <div class="edu-footer">
            <span class="edu-date"><i class="fas fa-calendar"></i> ${e.period}</span>
            <span class="edu-badge">${e.badge}</span>
        </div>
    </div>
`).join('');

// ===================================================
// ===== PROJECTS DATA (JWT + Screenshots + Live Demo) =====
// ===================================================
const projectsData = [
    {
        title: 'SmartPaper.pk',
        desc: 'Full-stack academic web platform with secure JWT authentication and modern responsive interface.',
        tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'JWT'],
        link: 'https://github.com/maryamghaffar1234m-png/SmartPaper.pk',
        liveLink: null,
        screenshot: 'screenshot-smartpaper.png',
        filter: 'web',
        icon: 'fa-file-alt',
        status: 'In Progress'
    },
    {
        title: 'CareerPulse-AI',
        desc: 'AI-powered CV analysis tool designed to recommend suitable career matches using Generative AI.',
        tags: ['Python', 'Generative AI', 'FastAPI'],
        link: 'https://github.com/maryamghaffar1234m-png/CareerPulse-AI',
        liveLink: 'https://career-pulse-ai.fastapicloud.dev/',
        screenshot: 'screenshot-careerpulse.png',
        filter: 'ai',
        icon: 'fa-robot'
    },
    {
        title: 'Personal Portfolio Website',
        desc: 'Modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring animations and dynamic content.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
        link: 'https://github.com/maryamghaffar1234m-png/Maryam_Portfolio',
        liveLink: 'https://maryamghaffar1234m-png.github.io/Maryam_Portfolio/',
        screenshot: null,
        filter: 'frontend',
        icon: 'fa-id-card'
    },
    {
        title: 'Husan-e-Mahal',
        desc: 'Beauty product landing page featuring a responsive layout, image slider, and WhatsApp integration.',
        tags: ['HTML', 'CSS', 'JavaScript', 'AOS'],
        link: 'https://github.com/maryamghaffar1234m-png/My-First-Project',
        liveLink: null,
        screenshot: 'screenshot-husan.png',
        filter: 'frontend',
        icon: 'fa-spa'
    },
    {
        title: 'TAJ-MEHAL COSMETICS',
        desc: 'Responsive cosmetics website with a modern product-focused user interface.',
        tags: ['HTML', 'CSS'],
        link: 'https://github.com/maryamghaffar1234m-png/TAJ-MEHAL-COSMETICS',
        liveLink: null,
        screenshot: 'screenshot-tajmahal.png',
        filter: 'frontend',
        icon: 'fa-gem'
    },
    {
        title: 'Simple Form Validation',
        desc: 'Responsive signup form with real-time client-side validation and modern UI.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/maryamghaffar1234m-png/simple-form-with-JavaScript-validation',
        liveLink: null,
        screenshot: 'screenshot-formvalidation.png',
        filter: 'frontend',
        icon: 'fa-check-circle'
    },
    {
        title: 'Product Inventory System',
        desc: 'Python-based inventory management system implementing Binary Search Tree and data structure concepts.',
        tags: ['Python', 'Data Structures'],
        link: 'https://github.com/maryamghaffar1234m-png/product-inventory-system',
        liveLink: null,
        screenshot: null,
        filter: 'python',
        icon: 'fa-boxes-stacked'
    },
    {
        title: 'Online Banking System – SRS',
        desc: 'Software Requirements Specification with use case, class, ER, and activity diagrams.',
        tags: ['Requirements Engineering', 'UML', 'Documentation'],
        link: 'https://github.com/maryamghaffar1234m-png/Online-Banking-System-SRS',
        liveLink: null,
        screenshot: null,
        filter: 'documentation',
        icon: 'fa-university'
    },
    {
        title: 'Digital Marketing – SDG 4',
        desc: 'Social awareness campaign promoting girls\' education in Pakistan.',
        tags: ['Marketing', 'Social Media Strategy'],
        link: 'https://github.com/maryamghaffar1234m-png/Digital-Marketing-First-Project',
        liveLink: null,
        screenshot: null,
        filter: 'documentation',
        icon: 'fa-bullhorn'
    }
];

const projectsGrid = document.getElementById('projectsGrid');

function renderProjects(filter = 'all') {
    const filtered = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.filter === filter);

    projectsGrid.innerHTML = filtered.map(p => {
        // Screenshot or Icon
        const imageHTML = p.screenshot
            ? `<div class="project-image has-screenshot">
                 <img src="${p.screenshot}" alt="${p.title} preview" loading="lazy" onerror="this.parentElement.classList.remove('has-screenshot'); this.parentElement.innerHTML='<i class=\\'fas ${p.icon}\\'></i>';">
                 ${p.status ? `<span class="project-status">${p.status}</span>` : ''}
               </div>`
            : `<div class="project-image">
                 <i class="fas ${p.icon}"></i>
                 ${p.status ? `<span class="project-status">${p.status}</span>` : ''}
               </div>`;

        // Live Demo button (only if available)
        const liveButton = p.liveLink
            ? `<a href="${p.liveLink}" target="_blank" rel="noopener noreferrer" class="project-link live">
                 <i class="fas fa-external-link-alt"></i> Live Demo
               </a>`
            : '';

        return `
            <div class="project-card fade-up">
                ${imageHTML}
                <div class="project-body">
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <div class="project-tags">
                        ${p.tags.map(t => `<span>${t}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        ${liveButton}
                    </div>
                </div>
            </div>
        `;
    }).join('');

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
// ===== CERTIFICATIONS DATA =====
// ===================================================
const certData = [
    { title: 'Generative AI Application Developer', issuer: 'Pak Angels & LCWU', date: 'June – July 2025', id: 'da05402425fd7c9d', image: 'certificate-genai.jpg' },
    { title: 'Frontend Development Internship', issuer: 'DEV ShieldX – Batch 01', date: 'April 2026', id: 'Certificate of Completion', image: 'certificate-internship.jpg' },
    { title: 'Mastering UI/UX Course', issuer: 'Innovista Learn Easy', date: 'September 9, 2026', id: '589-12054-147846', image: 'certificate-uiux.jpg' },
    { title: 'Freelancing Course', issuer: 'Innovista Learn Easy', date: 'September 2, 2026', id: '589-889-147846', image: 'certificate-freelancing.jpg' }
];

const certGrid = document.getElementById('certGrid');
certGrid.innerHTML = certData.map(c => `
    <div class="cert-card fade-up">
        <div class="cert-image-wrapper" data-image="${c.image}">
            <img src="${c.image}" alt="${c.title} certificate" loading="lazy">
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
        modalImg.alt = 'Certificate Preview';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===================================================
// ===== CONTACT FORM (Gmail Direct) =====
// ===================================================
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

    const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const fullSubject = `${subject} — from ${name}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=maryamghaffar1234m@gmail.com&su=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(bodyText)}`;

    const tempLink = document.createElement('a');
    tempLink.href = gmailLink;
    tempLink.target = '_blank';
    tempLink.rel = 'noopener noreferrer';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    setTimeout(() => {
        document.getElementById('contactForm').reset();
    }, 500);
}

// ===== OBSERVE ALL FADE-UP ELEMENTS =====
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    animateCounters();
});
