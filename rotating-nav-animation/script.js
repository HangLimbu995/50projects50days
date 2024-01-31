
const container = document.querySelector('.container')
const open = document.getElementById('open')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    console.log('hello')
    container.classList.add('show-nav')
})
close.addEventListener('click', () => {
    console.log('hello')
    container.classList.remove('show-nav')
})
