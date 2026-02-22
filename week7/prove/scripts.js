const form = document.querySelector('#cardForm');

function displayError(msg){
    document.querySelector('#error').textContent = msg;
}

function isCardNumberValid(cardNumber){
    return number === '123412341234';
}

function submitHandler(event){
    event.preventDefault();
    let errorMsg = '';
    displayError('');

    const cardNum = document.querySelector('#cardNumber').value.trim();

    if(!/^\d{16}$/.test(cardNum)){
        errorMsg += 'Card number must be 16 digits.\n';
    } else if(!isCardNumberValid(cardNum)){
        errorMsg += 'Card number is invalid.\n';
    }

    const expYear = Number(document.querySelector('#Year').value);
    const expMonth = Number(document.querySelector('#Month').value);
    const currentDate = new Date();

    if(2000 + expYear < currentDate.getFullYear() ||
       (2000 + expYear === currentDate.getFullYear() && expMonth <= currentDate.getMonth() + 1)){
        errorMsg += 'Card has expired.\n';
    }

    if(errorMsg !== ''){
        displayError(errorMsg);
        return;
    }

    form.innerHTML = '<h2>Payment Successful!</h2>';
}

form.addEventListener('submit', submitHandler);