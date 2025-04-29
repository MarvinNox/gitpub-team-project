import Accordion from "accordion-js";


import { initMenu } from './js/menu.js';
import { detectTheme, refs, toggleSwitcher } from './js/theme-switcher';
import { refsScroll, scrollUpBtnShow, scrollUp } from './js/scroll-up';
import { loadNextProjects } from './js/my-projects';
import { initWorkTogeter } from './js/work-together';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './js/reviews.js';

AOS.init();

detectTheme();
refs.themeToggler.addEventListener('change', toggleSwitcher);

window.addEventListener('scroll', scrollUpBtnShow);
refsScroll.scrollBtn.addEventListener('click', scrollUp);

loadNextProjects(false);


const acc=  new Accordion(".acc-container", {
  openOnInit: [0],
});

initWorkTogeter();

initMenu();
