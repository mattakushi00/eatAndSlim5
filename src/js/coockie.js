const content = document.querySelector('.cookie')
const closeButton = [...document.querySelectorAll('.cookie__close')]
const localStorageName = `${window.location.href}-cookieTime`
const isShowCookie = localStorage.getItem(`${localStorageName}`) ? new Date() < new Date(localStorage.getItem(`${localStorageName}`)) : false

content.style.display = isShowCookie ? 'none' : 'flex'

closeButton.forEach(btn => {
  btn.addEventListener('click', () => {
    const weekAhead = new Date()
    weekAhead.setDate( new Date().getDate() + 5)

    localStorage.setItem(`${localStorageName}`, weekAhead)
    content.style.display = 'none'
  })
})