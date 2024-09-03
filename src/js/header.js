const header = document.querySelector('.header')
const face = document.querySelector('.main')
const activeHeader = 'header_active'
const setOpacity = () => window.scrollY > face.clientHeight ? header.classList.add(activeHeader) : header.classList.remove(activeHeader)
setOpacity()
window.addEventListener('scroll', setOpacity, { passive: true })