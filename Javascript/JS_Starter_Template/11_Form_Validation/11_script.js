// Get the Input Elements
const userName = document.querySelector('#username');
const userEmail = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const userConfPassword = document.querySelector('#password_confirm');

// Get the Error Message Elements
const nameError = document.querySelector('#name_error');
const emailError = document.querySelector('#email_error');
const passwordError = document.querySelector('#password_error');

// Add blur events for Fields
userName.addEventListener('blur', function (event) { // when element looses focus this event is called
    // event.target.style.background = ""  valid
    setBlur(userName, nameError)
});
userEmail.addEventListener('blur', function () {
    setBlur(userEmail, emailError)
});
userPassword.addEventListener('blur', function () {
    setBlur(userPassword, passwordError)
});
userConfPassword.addEventListener('blur', function () {
    setBlur(userConfPassword, passwordError)
});

//Add focus event for Elements (When an element has focus)
userName.addEventListener('focus', function (event) {
    event.target.style.background = "lightyellow"
});
userEmail.addEventListener('focus', function (event) {
    event.target.style.background = "lightyellow"
});
userPassword.addEventListener('focus', function (event) {
    event.target.style.background = "lightyellow"
});
userConfPassword.addEventListener('focus', function (event) {
    event.target.style.background = "lightyellow"
});

function validate() {
    let txt = userName.value;
    let email = userEmail.value;
    let pwd = userPassword.value;
    let confPwd = userConfPassword.value;
    let isValid = true;

    if(!txt){
        setError(userName, nameError, 'Username is empty !');
        return isValid=false;
    }
    // UserName Length validation
    if(txt.length < 5){
        setError(userName, nameError, 'Enter at least 5 letters');
        isValid = false;
        return isValid;
    }
    if(!email){
        setError(userEmail, emailError, 'Email is empty !');
        return isValid=false;
    }

    if(!validateEmail(email)){
        setError(userEmail, emailError, "Invalid email!");
        isValid = false;
        return isValid;
    }

    if(!pwd){
        setError(userPassword, passwordError, 'Password is empty !');
        return isValid=false;
    }

    if(!confPwd){
        setError(userConfPassword, passwordError, 'Confirm Password is empty !');
        return isValid=false;
    }

    if(pwd!== confPwd){
        setError(userPassword, passwordError);
        setError(userConfPassword, passwordError, 'password doesn\'t Match !');
        return isValid=false;
    }
}

function setError(element, errorElement, message){
    element.style.backgroundColor = 'lightsalmon';
    element.style.border = 'red';
    element.style.boxShadow = '0 0 5px red';
    errorElement.style.color = 'red';
    errorElement.textContent = message;
}

function setBlur(element, errorElement, message){
    element.style.backgroundColor = 'white';
    element.style.border = '';
    element.style.boxShadow = '';
    errorElement.style.color = '';
    errorElement.textContent = '';
}

function validateEmail(email) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ;
    return email.match(reg)
}