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

const showHideText = (hide, show) => {
    const tl = new TimelineMax()
    tl.addLabel('start')
        .to(hide, .3, { opacity: 0, y: 40, marginTop: 0, marginBottom: 0, height: 0, ease: power2 })
        .to(show, .3, { opacity: 1, height: 'auto', ease: power2 }, 'start')
}

showMoreChevron.addEventListener('click', (e) => showHideText(e.target, e.target.closest('.mainText').querySelector('.hidden')))
setBannerHeight()