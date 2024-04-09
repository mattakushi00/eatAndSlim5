const minutes = [...document.querySelectorAll('.counter__value_min')]
const second = [...document.querySelectorAll('.counter__value_sec')]
const date = new Date()
const step = 1000
const zero = (val) => val.toString().length < 2 ? `0${val}` : val

date.setMinutes(15)
date.setSeconds(0)

const interval = setInterval(() => {
    if (date.getMinutes() === 0 && date.getSeconds() === 0) {
        clearInterval(interval)
        return
    }

    date.setSeconds(date.getSeconds() - 1)
    minutes.forEach(item => item.textContent = zero(date.getMinutes()))
    second.forEach(item => item.textContent = zero(date.getSeconds()))
}, step)