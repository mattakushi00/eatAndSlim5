const $header = document.querySelector('.header')
const activeClass = 'header_bg'

if (window.pageYOffset > 0) {
    $header.classList.add(activeClass)
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        $header.classList.add(activeClass)
        return
    }
    $header.classList.remove(activeClass)
})