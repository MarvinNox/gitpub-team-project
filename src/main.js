import { detectTheme, refs, toggleSwitcher } from "./js/theme-switcher";

detectTheme();
refs.themeToggler.addEventListener('change', toggleSwitcher);