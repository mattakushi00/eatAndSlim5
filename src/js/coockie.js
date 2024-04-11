const content = document.querySelector('.cookie')
const closeButton = document.querySelector('.cookie__close')

content.style.display = 'flex'
closeButton.addEventListener('click', () => content.style.display = 'none')