
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = '#333333';
        // change all text to white
        document.body.style.color = '#FFFFFF';
        logo.src = './images/byui-logo-white.png';
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = '#FFFFFF';
        document.body.style.color = '#000000';
        logo.src = './images/byui-logo-blue.webp';
    }
}           
                    