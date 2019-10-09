const topNavigation = document.querySelector('nav')
const winHeight = window.innerHeight
const mainBanner = document.querySelector('.mainBanner')
const showMoreChevron = document.querySelector('#mainShowMore')

// easing
const power2 = Power2.easeOut



const setBannerHeight = () => {
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

showMoreChevron.addEventListener('click', (e) => showHideText(e.target, e.target.closest('.mainText').querySelector('.hidden')))
setBannerHeight()

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