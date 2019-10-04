const topNavigation = document.querySelector('nav')
const winHeight = window.innerHeight
const mainBanner = document.querySelector('.mainBanner')



const setBannerHeight = () => {
    const {
        height: topNavHeight
    } = topNavigation.getBoundingClientRect()

    mainBanner.style.height = `${winHeight - topNavHeight + 6}px`
}

setBannerHeight()