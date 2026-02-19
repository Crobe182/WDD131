const menu_btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.closeButton');
console.log(gallery);

// nav menu toggle ----------------------------
menu_btn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        menu_btn.style.display = 'none';
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
        menu_btn.style.display = 'block';
    }
});

// modal image viewer ----------------------------
gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName !== "IMG") return;

    const imgSrc = e.target.src;
    const largeSrc = imgSrc.replace("-sm", "-full");
    modalImage.src = largeSrc;
    modal.showModal();
}

closeButton.addEventListener('click', (event) => {
    if (event.target === closeButton) {
    modal.close();
    }
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});