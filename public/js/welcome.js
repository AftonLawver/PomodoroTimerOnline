// localStorage.setItem('testKey', 'testValue');
// var retrievedValue = localStorage.getItem('testKey');
// if (retrievedValue !== null) {
//     console.log('localStorage is working. Value retrieved: ' + retrievedValue);
//     document.getElementById("continueAsGuestButton").innerText = retrievedValue;
// } else {
//     console.log('localStorage may not be working.');
// }

const signUpButton = document.getElementById("signUpButton");
signUpButton.addEventListener('click', () => {
    window.location.href = 'register.html';
})

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener('click', () => {
    window.location.href = 'login.html';
})

const continueAsGuestButton = document.getElementById("continueAsGuestButton");
continueAsGuestButton.addEventListener('click', () => {
    document.getElementById("nameSectionPopup").style.display = "block";
})

const submitAsGuestButton = document.getElementById("submitAsGuestButton");
submitAsGuestButton.addEventListener('click', () => {
    if (validateName()) {
        let name = document.getElementById("nameInput").value;
        localStorage.setItem('name', name);
        window.location.href = 'mainWindow.html';
    }
})

function validateName() {
    const nameInput = document.getElementById('nameInput');
    if (!nameInput.value.match(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/) ) {
        let firstNameErrorMessage = document.getElementById("firstNameErrorMessage");
        firstNameErrorMessage.innerHTML = "Please enter a valid first" +
            " name.";
        nameInput.style.border = "2px solid red";
        firstNameErrorMessage.style.display = "block";
        return false;
    } else {
        let firstNameErrorMessage = document.getElementById("firstNameErrorMessage");
        nameInput.style.border = "2px solid green";
        firstNameErrorMessage.style.display = "none";
        return true;
    }
}






