/*Dark and light mode toggle script*/ 
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const currentTheme = localStorage.getItem('theme');

    // Set the initial theme and icon visibility based on saved theme or default
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

        // Toggle the theme and icon visibility
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
});
// script for the emails and phone messages
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
