const form = document.querySelector('#cardForm');

function displayError(msg){
    document.querySelector('.errors').textContent = msg;
}

function isCardNumberValid(cardNumber){
    return cardNumber === '1234123412341234';
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

    const cardHolder = document.querySelector('#cardHolder').value.trim();
    if(cardHolder === ''){
        errorMsg += 'Card holder name is required.\n';
    } else if (!/^[a-zA-Z\s'-]+$/.test(cardHolder)){
        errorMsg += 'Please enter a valid name.\n';
    }

    const expYear = Number(document.querySelector('#year').value);
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date();

    if(expMonth < 1 || expMonth > 12){
        errorMsg += 'Expiration month must be between 1 and 12.\n';
    }

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