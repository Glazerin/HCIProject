function emptyFieldVal(str) {
    if (str.length == 0) {
        return true
    }
    else return false
}

function checkPass(password) {
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
            return true;
        }
    }
    return false;
}

function Validate() {

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const confpass = document.getElementById('confirmpass').value
    const gender_male = document.getElementById('male')
    const gender_female = document.getElementById('female')
    const email = document.getElementById('email').value
    const address = document.getElementById('address').value
    const checkbox = document.getElementById('checkbox')

    if (emptyFieldVal(username)) {
        alert('Username must be filled!')
    }
    else if (username.length < 5) {
        alert("Name must be more than 5 characters")
    }
    else if (password == '') {
        alert('Password must be filled!')
    }
    else if (password.length < 8) {
        alert('Password must be minimum 8 characters!')
    }
    else if (confpass == '') {
        alert('Re-type password must be filled!')
    }
    else if (password != confpass.value) {
        alert('Password not same!')
    }
    else if (!gender_male.checked && !gender_female.checked) {
        alert("Select your Gender!");
    }
    else if (emptyFieldVal(email)) {
        alert('Email Address must be filled!')
    }
    else if (!email.endsWith('@gmail.com')) {
        alert('Email Address must ends with "@gmail.com"')
    }
    else if (address == '') {
        alert('Address must be filled!')
    }
    else if (!checkbox1.checked) {
        alert("You must agree with the terms and conditions!")
    }
    else {
        alert("You have successfully register.")
        location.href = "home.html"
    }
} 