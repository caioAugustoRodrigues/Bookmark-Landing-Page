const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('hamburger');

let isOpen = false;

function setNav() {
    if (!isOpen) {
        navbar.classList.add('open');
        isOpen = true;
    } else {
        navbar.classList.remove('open');
        isOpen = false;
    }
}

navToggle.addEventListener('click', setNav);