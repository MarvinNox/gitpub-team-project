
export const refsScroll = {
    scrollBtn: document.querySelector('.scroll-up--btn')
}

export function scrollUpBtn() {
    if (window.pageYOffset > 300) {
        refsScroll.scrollBtn.classList.add("show-btn");
    } else {
        refsScroll.scrollBtn.classList.remove("show-btn");
    };
};

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

export function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

export const scrollUpBtnShow = debounce(scrollUpBtn, 300);
