/* Dark and light mode toggle script */
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const currentTheme = localStorage.getItem('theme');

    // Set the initial theme and icon visibility
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');

        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            iconSun.style.display = 'block';
            iconMoon.style.display = 'none';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';
        }
    });

    // ====== Hamburger menu toggle ===========
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
});

// =========== Lightbox ===========
const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('lightboxImg');
const caption = document.getElementById('caption');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.portfolio-grid img').forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('open');   // use flex centering
    modalImg.src = img.src;
    caption.textContent = img.alt;
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('open');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open');
});

/* Contact field toggle */
function showContactField(method) {
    var phoneInput = document.getElementById('phoneInput');
    var emailInput = document.getElementById('emailInput');
    if (method === 'phone') {
        phoneInput.style.display = 'block';
        emailInput.style.display = 'none';
    } else if (method === 'email') {
        emailInput.style.display = 'block';
        phoneInput.style.display = 'none';
    }
}