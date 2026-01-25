const menu_btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menu_btn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});