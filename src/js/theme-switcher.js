export const refs = {
    THEME_KEY: 'theme',
    themeToggler: document.querySelector('#theme-switcher'),
};

export function getTheme() {
    return JSON.parse(localStorage.getItem(refs.THEME_KEY)) || false;
}

export function setTheme(check) {
    localStorage.setItem(refs.THEME_KEY, JSON.stringify(check));
}

export function detectTheme() {
    const savedTheme = getTheme();
    if (savedTheme) {
        refs.themeToggler.checked = true;
        document.querySelector('body').classList.add('dark');
    }
}
export function toggleSwitcher(evt) {
    if (evt.target.checked) {
        document.body.classList.add('dark');
        setTheme(true);
    } else {
        setTheme(false);
        document.body.classList.remove('dark');
    }
}
detectTheme();
refs.themeToggler.addEventListener('change', toggleSwitcher);