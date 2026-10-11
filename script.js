const toggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('theme-dark');
    toggle.checked = true;
}

toggle.addEventListener('change', () => {
    const isDark = toggle.checked;
    body.classList.toggle('theme-dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
