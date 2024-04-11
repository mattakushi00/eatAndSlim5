openAndClose('.popup__item_privacy', '.privacy__close', '.privacy__open')
openAndClose('.popup__item_user', '.user__close', '.user__open')
openAndClose('.popup__item_term', '.term__close', '.term__open')

function openAndClose(contentClass, closeButtonClass, openButtonClass) {
    const content = document.querySelector(contentClass)
    const closeButton = document.querySelector(closeButtonClass)
    const openButton = [...document.querySelectorAll(openButtonClass)]

    openButton.forEach(btn => {
        btn.addEventListener('click', () => {
            content.style.display = 'flex'
            document.documentElement.style.overflow = 'hidden'
        })
    })

    closeButton.addEventListener('click', () => {
        content.style.display = 'none'
        document.documentElement.style.overflow = ''
    })

    content.addEventListener('click', event => {
        if (content === event.target) {
            content.style.display = 'none'
            document.documentElement.style.overflow = ''
        }
    })
}