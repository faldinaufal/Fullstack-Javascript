const toggle = document.querySelector('.menubar input')
const nav = document.querySelector('#menulist')

toggle.addEventListener('click', function () {
    nav.classList.toggle('slide')
})