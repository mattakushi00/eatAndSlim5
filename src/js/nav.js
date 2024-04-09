const linkList = [...document.querySelectorAll('.nav__item')]
let newIndex = null
let oldIndex = null
let blockList = []
const threshold = 100
const activeClass = 'nav__item_active'
const getThreshold = (element) => element.getBoundingClientRect().top - threshold

linkList.forEach(item => blockList.push(document.querySelector(item.getAttribute('href')).parentNode))

window.addEventListener('scroll', () => {
    /*cutoff work range*/
    if (getThreshold(blockList[0]) > 0 || blockList[blockList.length - 1].getBoundingClientRect().bottom < threshold) {
        newIndex = null
        linkList[0].classList.remove(activeClass)
        linkList[linkList.length - 1].classList.remove(activeClass)
        return
    }

    /*update new index and old index*/
    for (let i = 0; i < blockList.length; i++) {
        if (blockList[i].getBoundingClientRect().top <= threshold && blockList[i].getBoundingClientRect().bottom >= threshold && i !== newIndex) {
            oldIndex = newIndex
            newIndex = i
            linkList[newIndex].classList.add(activeClass)
            break
        }
    }

    /*change class*/
    if (oldIndex !== null) {
        linkList[oldIndex].classList.remove(activeClass)
        linkList[newIndex].classList.add(activeClass)
    }
})