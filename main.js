const toggle = document.querySelector ('.menubar input')
const nav = document.querySelector ('#navbar2 ul')

toggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
})