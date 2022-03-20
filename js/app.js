const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn--open');
    menu.classList.toggle('menu--active');
    document.body.classList.toggle('something-open');
});

menuLink.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('menu-btn--open');
        menu.classList.remove('menu--active');
    });
});