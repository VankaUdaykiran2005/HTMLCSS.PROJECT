const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const form = document.querySelector("#form");

form.addEventListener('submit', (e) => {
    if (!validateInput()) { 
        e.preventDefault();
    }
});
function validateInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
    let success = true;
    if (usernameValue === '') {
        success = false;
        setmsg(username, "Username is required");
    } else {
        setsuccess(username);
    }
    if (emailValue === '') {
        success = false;
        setmsg(email, "Email is required");
    } else if (!validateEmail(emailValue)) {
        success = false;
        setmsg(email, "Please enter a valid email address");
    } else {
        setsuccess(email);
    }
    if (passwordValue === '') {
        success = false;
        setmsg(password, "Password is required");
    } 
    //else if (passwordValue.length < 8) {
        //success = false;
        //setmsg(password, "Password must be at least 8 characters");
   // } 
    else if (!validatePassword(passwordValue)) {
        success = false;
        setmsg(password, "Password must contain at least one uppercase, one lowercase, one number, and one special character");
    } else {
        setsuccess(password);
    }
    if (cpasswordValue === '') {
        success = false;
        setmsg(cpassword, "Confirm password is required");
    } else if (cpasswordValue !== passwordValue) {
        success = false;
        setmsg(cpassword, "Passwords does not match");
    } else {
        setsuccess(cpassword);
    }

    return success;
}
function setmsg(element, message) {
    const inputGroup = element.parentElement;
    const msgElement = inputGroup.querySelector('.msg');
    msgElement.innerText = message;
    inputGroup.classList.remove('success');
    inputGroup.classList.add('error');
}
function setsuccess(element) {
    const inputGroup = element.parentElement;
    const msgElement = inputGroup.querySelector('.msg');
    msgElement.innerText = '';
    inputGroup.classList.remove('error');
    inputGroup.classList.add('success');
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,20}$/.test(password);
};
