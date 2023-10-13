function validateFirstName() {
    const firstNameInput = document.getElementById('firstNameInput');
    if (!firstNameInput.value.match(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/)) {
        let firstNameErrorMessage = document.getElementById("firstNameErrorMessage");
        firstNameErrorMessage.innerHTML = "Please enter a valid first" +
            " name.";
        firstNameInput.style.border = "2px solid red";
        firstNameErrorMessage.style.display = "block";
        return false;
    } else {
        let firstNameErrorMessage = document.getElementById("firstNameErrorMessage");
        firstNameInput.style.border = "2px solid green";
        firstNameErrorMessage.style.display = "none";
        return true;
    }
}

function validateLastName() {
    const lastNameInput = document.getElementById('lastNameInput');
    if (!lastNameInput.value.match(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/)) {
        let lastNameErrorMessage = document.getElementById("lastNameErrorMessage");
        lastNameErrorMessage.innerHTML = "Please enter a valid last" +
            " name.";
        lastNameInput.style.border = "2px solid red";
        lastNameErrorMessage.style.display = "block";
        return false;
    } else {
        let lastNameErrorMessage = document.getElementById("lastNameErrorMessage");
        lastNameInput.style.border = "2px solid green";
        lastNameErrorMessage.style.display = "none";
        return true;
    }
}

function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    if (!emailInput.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        let emailErrorMessage = document.getElementById("emailErrorMessage");
        emailErrorMessage.innerHTML = "Please enter a valid email" +
            " address.";
        emailInput.style.border = "2px solid red";
        emailErrorMessage.style.display = "block";
        return false;
    } else {
        let emailErrorMessage = document.getElementById("emailErrorMessage");
        emailInput.style.border = "2px solid green";
        emailErrorMessage.style.display = "none";
        return true;
    }
}

const passwordInput = document.getElementById("passwordInput");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

passwordInput.onfocus = function() {
    document.getElementById("passwordMessage").style.display = "block";
}

passwordInput.onblur = function() {
    document.getElementById("passwordMessage").style.display = "none";
}

const validatePassword = function() {
//     validate lowercase letters
    let sum = 0;
    const lowerCaseLetters = /[a-z]/;
    if (passwordInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
        sum += 1;
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // validate capital letters
    const upperCaseLetters = /[A-Z]/;
    if (passwordInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
        sum += 1;
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // validate number in password
    const numbers = /\d/;
    if (passwordInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
        sum += 1;
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // validate length of password
    if (passwordInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        sum += 1;
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    if (sum === 4) {
        passwordInput.style.border = "2px solid green";
    }
}

const doPasswordsMatch = function() {
    let password1 = document.getElementById("passwordInput");
    let password2 = document.getElementById("passwordInputRepeat");
    let passwordRepeatErrorMessage = document.getElementById("passwordRepeatErrorMessage");

    if (password1.value !== password2.value) {
        console.log(password1.value);
        console.log(password2.value);
        passwordRepeatErrorMessage.innerHTML = "Passwords do not match.";
        password2.style.border = "2px solid red";
        passwordRepeatErrorMessage.style.display = "block";
    }
    else {
        password2.style.border = "2px solid green";
        passwordRepeatErrorMessage.style.display = "none";
    }
}
