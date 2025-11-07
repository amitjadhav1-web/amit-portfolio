// Basic interactive features: theme toggle, menu toggle, modal for projects, contact form behavior
(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  const yearEl = document.getElementById('year');

  // Initialize year
  yearEl.textContent = new Date().getFullYear();

  // Theme (persisted)
  const theme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  setTheme(theme === 'light');

  function setTheme(isLight) {
    if (isLight) {
      root.classList.add('light');
      themeToggle.textContent = '🌞';
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.remove('light');
      themeToggle.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    }
  }

  themeToggle.addEventListener('click', () => {
    setTheme(!root.classList.contains('light'));
  });

  // Mobile menu
  menuToggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
    }
  });

  // Project modal logic (delegation)
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalImage = document.getElementById('modal-image');
  const modalLinks = document.getElementById('modal-links');

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (card) {
      openProjectModal(card);
    }
  });

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = e.target.closest('.project-card');
      if (card) openProjectModal(card);
    });
  });

  function openProjectModal(card) {
    const title = card.dataset.title || card.querySelector('h3')?.innerText;
    const desc = card.dataset.desc || card.querySelector('p')?.innerText;
    const image = card.dataset.image || card.querySelector('img')?.src;
    const links = card.dataset.links ? JSON.parse(card.dataset.links) : null;

    modalTitle.textContent = title || 'Project';
    modalDesc.textContent = desc || '';
    modalImage.src = image || '';
    modalImage.alt = title || 'Project image';
    modalLinks.innerHTML = '';

    if (links) {
      if (links.demo) {
        const a = document.createElement('a');
        a.className = 'btn small';
        a.href = links.demo;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = 'Live demo';
        modalLinks.appendChild(a);
      }
      if (links.code) {
        const b = document.createElement('a');
        b.className = 'btn small';
        b.href = links.code;
        b.target = '_blank';
        b.rel = 'noopener';
        b.textContent = 'Source code';
        modalLinks.appendChild(b);
      }
    }
    modal.setAttribute('aria-hidden', 'false');
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
  }

  // Contact form: basic validation + mailto fallback
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please complete all fields.');
        return;
      }

      // Try to open mail client as fallback
      const subject = encodeURIComponent(`Message from ${name} (Portfolio)`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:amit@example.com?subject=${subject}&body=${body}`;

      // Optional: integrate EmailJS or other service here (see README)
    });
  }

  // Accessibility: keyboard close modal (Esc)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });

})();
