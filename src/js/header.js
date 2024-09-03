const header = document.querySelector('.header')
const face = document.querySelector('.main')
const activeHeader = 'header_active'
const breakPoint = 1024
const mediaQuery = matchMedia(`(max-width: ${breakPoint}px)`)
const setOpacity = () => window.scrollY > face.clientHeight ?
    header.classList.add(activeHeader) :
    header.classList.remove(activeHeader)
const checkWidth = () => {
    const isMobile = window.innerWidth <= breakPoint
    if (isMobile) {
        header.classList.add(activeHeader)
        window.removeEventListener('scroll', setOpacity, { passive: true })
        return
    }
    header.classList.remove(activeHeader)
    window.addEventListener('scroll', setOpacity, { passive: true })
}

checkWidth()
mediaQuery.addEventListener('change', checkWidth)