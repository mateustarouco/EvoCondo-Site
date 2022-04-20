let text = document.getElementById('text')
let background = document.getElementById('background')
let buildes = document.getElementById('buildes')
let moon = document.getElementById('moon')
let water = document.getElementById('water')

window.addEventListener("scroll", function(){
    const value = window.scrollY;

    text.style.top = value * 0.25 + 'px'
    background.style.top = value * 0.3 + 'px'
    buildes.style.top = value * -0.25 + 'px'
    moon.style.top = value * -0.15 + 'px'
    moon.style.left = value * -1.5 + 'px'
    water.style.top = value * -0.15 + 'px'
})