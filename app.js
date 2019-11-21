const topNavigation = document.querySelector('nav')
const navContactBar = document.querySelector('.topMenuBar')
const { height: contactNavHeight } = navContactBar.getBoundingClientRect()
const winHeight = window.innerHeight
const mainBanner = document.querySelector('.mainBanner')
const showMoreChevron = document.querySelector('#mainShowMore')
const burgerButton = document.querySelector('.burgerButton');
const burgerContainer = document.querySelector('.burgerMenuContainer');
const burgerElement = document.querySelectorAll('.burgerMenuElements li');

// easing
const power2 = Power2.easeOut

const debounce = (func, time) => {
    var timer;
    return event => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, time || 100, event);
    };
}

const setBannerHeight = () => {
    const winHeight = window.innerHeight
    const {
        height: topNavHeight
    } = topNavigation.getBoundingClientRect()

    mainBanner.style.height = `${winHeight - topNavHeight + 6}px`
}

const showHideText = (hide, show) => { // Chevron need showeMore class
    if (!hide.classList.contains('showMore')) return
    const tl = new TimelineMax()
    tl.addLabel('start')
        .to(hide, .3, { opacity: 0, y: 40, marginTop: 0, marginBottom: 0, height: 0, ease: power2 })
        .to(show, .3, { opacity: 1, height: 'auto', ease: power2 }, 'start')
}

let lastScrollTop = 0;
const menuBarAnimate = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st >= 200) {
        TweenMax.to(topNavigation, .35, { y: -contactNavHeight, ease: Power2.easeInOut })
        TweenMax.to('.logo img', .35, { width: 160, ease: Power2.easeInOut })
    } else {
        TweenMax.to(topNavigation, .35, { y: 0, ease: Power2.easeInOut })
        TweenMax.to('.logo img', .35, { width: 200, ease: Power2.easeInOut })
    }
}


showMoreChevron.addEventListener('click', (e) => showHideText(e.target, e.target.closest('.mainText').querySelector('.hidden')))
window.addEventListener("resize", debounce(setBannerHeight)); // banner resize
document.addEventListener('scroll', menuBarAnimate, false)
setBannerHeight()

// BURGER BUTTON

const burgerButtonToggle = e => {

    if (e.target.classList.contains('active')) {
        // close menu
        const tl = new TimelineMax()
        tl.to(burgerContainer, .3, { scale: 0, borderRadius: '50%', ease: Power2.easeInOut })
            .set(burgerContainer, { display: 'none' })
    } else {
        // open menu
        const tl = new TimelineMax()
        tl.set(burgerContainer, { display: 'flex' })
            .to(burgerContainer, .3, { scale: 1, borderRadius: 0, ease: Power2.easeInOut })
            .staggerFrom(burgerElement, .3, { y: 100, opacity: 0, scale: .6, ease: Power2.easeInOut }, .06)
    }

    e.target.classList.toggle('active');

}

burgerButton.addEventListener('click', e => burgerButtonToggle(e))



var swiper = new Swiper('.mainProductsSlider', {
    navigation: {
        nextEl: '.mainNext',
        prevEl: '.mainPrev',
    },
    slidesPerView: 5,
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        720: {
            slidesPerView: 2,
        },
        930: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});


