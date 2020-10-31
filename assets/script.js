function myNav() {
    var x = document.getElementById('myTopnav')
    if (x.className === 'topnav') {
        x.className += ' responsive'
    } else {
        x.className = 'topnav'
    }
}

var mybutton = document.getElementById('myBtn')

window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block'
    } else {
        mybutton.style.display = 'none'
    }
}

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}