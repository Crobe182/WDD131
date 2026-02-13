const menu_btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = document.querySelector('.closeButton');

menu_btn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        menu_btn.style.display = 'none';
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
        menu_btn.style.display = 'block';
    }
});

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;

    const imgSrc = e.target.src;

    modalImage.src = imgSrc;
    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});