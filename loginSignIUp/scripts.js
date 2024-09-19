// Login form validation
function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('login-error-message');

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        return false;
    } else if (username.length < 3) {
        errorMessage.textContent = "Username must be at least 3 characters long!";
        return false;
    } else if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long!";
        return false;
    }

    alert("Login successful!");
    return true;
}

// Registration form validation
function validateRegisterForm() {
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('register-error-message');

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required!";
        return false;
    } else if (username.length < 3) {
        errorMessage.textContent = "Username must be at least 3 characters long!";
        return false;
    } else if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long!";
        return false;
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    }

    alert("Registration successful!");
    return true;
}

