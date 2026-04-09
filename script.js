const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');
function setActive() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (pageYOffset >= top && pageYOffset < top + section.offsetHeight) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) link.classList.add('active');
  });
}
window.addEventListener('scroll', setActive);
window.addEventListener('load', setActive);

const projectsList = [
  { title: "My First Project", desc: "Initial web dev project with HTML/CSS & Git.", tech: ["HTML","CSS","Git"], link: "https://github.com/maryamghaffar1234m-png/My-First-Project.git" },
  { title: "Taj Mahal Cosmetics", desc: "Modern responsive landing page.", tech: ["HTML","CSS","JS"], link: "https://github.com/maryamghaffar1234m-png/TAJ-MEHAL-COSMETICS.git" },
  { title: "Form Validation", desc: "JavaScript form with real-time validation.", tech: ["JS","HTML","CSS"], link: "https://github.com/maryamghaffar1234m-png/simple-form-with-JavaScript-validation.git" },
  { title: "Inventory System", desc: "Product inventory management (Python).", tech: ["Python"], link: "https://github.com/maryamghaffar1234m-png/product-inventory-system.git" },
  { title: "Online Banking SRS", desc: "Software requirements specification document.", tech: ["Documentation"], link: "https://github.com/maryamghaffar1234m-png/Online-Banking-System-SRS.git" }
];

const projectsGrid = document.getElementById('projectsGrid');
if (projectsGrid) {
  projectsGrid.innerHTML = projectsList.map(proj => `
    <div class="project-card">
      <div class="project-img"><i class="fas fa-code-branch"></i></div>
      <div class="project-info">
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
        <div class="tech-stack">${proj.tech.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="project-links"><a href="${proj.link}" target="_blank"><i class="fab fa-github"></i> GitHub</a></div>
      </div>
    </div>
  `).join('');
}

const certImage = document.getElementById('certImage');
if (certImage) {
  certImage.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';
    modal.style.cursor = 'pointer';
    const img = document.createElement('img');
    img.src = certImage.src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '16px';
    modal.appendChild(img);
    modal.onclick = () => modal.remove();
    document.body.appendChild(modal);
  });
}

function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }
  const subject = `Message from ${name}`;
  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  window.location.href = `mailto:maryamghaffar1234m@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  alert("Your email app will open. Click Send to complete.");
  document.getElementById('contactForm').reset();
}
