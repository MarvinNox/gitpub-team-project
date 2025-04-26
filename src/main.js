import { detectTheme, refs, toggleSwitcher } from './js/theme-switcher';
import { loadNextProjects } from './js/my-projects';
import { serverRequest } from './js/work-together';

detectTheme();
refs.themeToggler.addEventListener('change', toggleSwitcher);

// Загрузка первых 3-х проектов при старте страницы (без скролла) в секции my-project
loadNextProjects(false);
