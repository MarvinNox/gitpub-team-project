import { detectTheme, refs, toggleSwitcher } from "./js/theme-switcher";
import { refsScroll, scrollUpBtnShow, scrollUp } from "./js/scroll-up"
import {loadNextProjects} from './js/my-projects'


detectTheme();
refs.themeToggler.addEventListener('change', toggleSwitcher);


window.addEventListener('scroll', scrollUpBtnShow);
refsScroll.scrollBtn.addEventListener('click', scrollUp);


// Загрузка первых 3-х проектов при старте страницы (без скролла) в секции my-project
loadNextProjects(false);

import './js/reviews.js'















