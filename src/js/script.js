const hamburger = document.querySelector('.hamburger'), 
      menu = document.querySelector('.menu'), 
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// load-bar animation

const counters = document.querySelectorAll('.skills__load-item-value'),
      lines = document.querySelectorAll('.skills__load-item-bar span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});