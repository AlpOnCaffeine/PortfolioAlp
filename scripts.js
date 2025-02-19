/*Dark and light mode toggle script*/ 
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        iconMoon.style.display = 'none';
        iconSun.style.display = 'block';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        iconMoon.style.display = 'block';
        iconSun.style.display = 'none';
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            iconMoon.style.display = 'block';
            iconSun.style.display = 'none';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            iconMoon.style.display = 'none';
            iconSun.style.display = 'block';
        }
    });
});