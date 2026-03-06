// Portfolio Data - Victor Rubia
const projects = [
  {
    id: 1,
    title: "Appel Internat",
    description: "Application de gestion d'appels pour internat. Interface moderne avec React/Next.js et backend Django. Gestion des utilisateurs, planification et notifications en temps réel.",
    type: "Full Stack",
    github: "https://github.com/Victor-R-R/appel-internat",
    demo: null,
    tech: ["React", "Next.js", "Django", "Python", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Flight Price Scraper",
    description: "Scraper de prix de vols avec analyse automatique. Backend Node.js pour scraping et stockage des données. Détection des meilleures offres et alertes personnalisées.",
    type: "Backend",
    github: "https://github.com/Victor-R-R/flight-price-scraper",
    demo: null,
    tech: ["Node.js", "TypeScript", "Python", "Web Scraping"]
  },
  {
    id: 3,
    title: "Portfolio Web",
    description: "Portfolio personnel avec design VS Code theme. HTML/CSS/JS vanilla avec architecture modulaire. Responsive et optimisé pour les performances.",
    type: "Frontend",
    github: "#",
    demo: "#",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  }
];

// ─── Typing Animation ────────────────────────────────────
function typeWriter(element, text, speed = 60) {
  element.textContent = '';
  element.classList.add('typing-cursor');
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Remove cursor after done, keep blinking
      setTimeout(() => element.classList.remove('typing-cursor'), 2000);
    }
  }
  type();
}

// ─── Scroll Reveal (Intersection Observer) ───────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left').forEach(el => {
    observer.observe(el);
  });
}

// ─── Project Count ────────────────────────────────────────
function updateProjectCount() {
  const el = document.getElementById('projectCount');
  if (el) el.textContent = projects.length;
}

// ─── Render Projects ──────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  if (projects.length === 0) {
    grid.innerHTML = `
      <div style="text-align:center;padding:2rem;color:var(--text-muted);">
        <p style="margin-top:1rem;">Aucun projet pour le moment</p>
      </div>
    `;
    return;
  }

  // Type badge colors by project type
  const typeColors = {
    'Full Stack': { bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.3)', color: '#A78BFA' },
    'Backend':    { bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.25)', color: '#34D399' },
    'Frontend':   { bg: 'rgba(6,182,212,0.12)',  border: 'rgba(6,182,212,0.25)',  color: '#22D3EE' },
  };

  grid.innerHTML = projects.map((project, index) => {
    const tc = typeColors[project.type] || typeColors['Full Stack'];
    return `
      <article class="project-card reveal reveal-delay-${(index % 3) + 1}">
        <div class="project-header">
          <span class="project-type" style="background:${tc.bg};border-color:${tc.border};color:${tc.color}">
            ${project.type}
          </span>
          <div class="project-links">
            ${project.github && project.github !== '#' ? `
              <a href="${project.github}" target="_blank" rel="noopener noreferrer"
                 class="project-link-icon" title="Voir sur GitHub" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            ` : ''}
            ${project.demo && project.demo !== '#' ? `
              <a href="${project.demo}" target="_blank" rel="noopener noreferrer"
                 class="project-link-icon" title="Voir la démo" aria-label="Demo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>

        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>

        ${project.tech && project.tech.length > 0 ? `
          <div class="project-tech">
            ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        ` : ''}
      </article>
    `;
  }).join('');

  // Trigger scroll reveal for newly rendered cards
  initScrollReveal();
}

// ─── Smooth Scroll + Active Tree File ────────────────────
document.addEventListener('click', (e) => {
  const target = e.target.closest('a[href^="#"]');
  if (target && target.getAttribute('href') !== '#') {
    e.preventDefault();
    const id = target.getAttribute('href').substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('.tree-file').forEach(f => f.classList.remove('tree-file-active'));
      target.classList.add('tree-file-active');
    }
  }
});

// ─── Scroll: Update Active Section in Sidebar ────────────
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const sections = document.querySelectorAll('.code-section');
      const scrollPos = window.scrollY + 200;

      sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
          document.querySelectorAll('.tree-file').forEach(f => f.classList.remove('tree-file-active'));
          const activeLink = document.querySelector(`.tree-file[href="#${id}"]`);
          if (activeLink) activeLink.classList.add('tree-file-active');
        }
      });

      ticking = false;
    });
    ticking = true;
  }
});

// ─── Initialize ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateProjectCount();
  renderProjects();
  initScrollReveal();

  // Add reveal classes to about section
  const aboutContent = document.querySelector('.about-content');
  if (aboutContent) {
    aboutContent.classList.add('reveal');
    // Trigger immediately since it's above fold
    setTimeout(() => aboutContent.classList.add('visible'), 100);
  }

  // Typing animation on the name (the .string span inside .name-title)
  const nameEl = document.querySelector('.name-title .string');
  if (nameEl) {
    const originalText = nameEl.textContent;
    setTimeout(() => typeWriter(nameEl, originalText, 55), 400);
  }
});
