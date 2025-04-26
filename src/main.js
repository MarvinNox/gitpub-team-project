import { detectTheme, refs, toggleSwitcher } from "./js/theme-switcher";
import { refsScroll, scrollUpBtnShow, scrollUp } from "./js/scroll-up"

detectTheme();
refs.themeToggler.addEventListener('change', toggleSwitcher);

window.addEventListener('scroll', scrollUpBtnShow);
refsScroll.scrollBtn.addEventListener('click', scrollUp);