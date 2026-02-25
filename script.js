// Simple Local Storage Login System

function registerUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);
    alert("Account Created Successfully!");
    window.location.href = "login.html";
}

function loginUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUser = localStorage.getItem("user");
    let storedPass = localStorage.getItem("pass");

    if(username === storedUser && password === storedPass) {
        localStorage.setItem("loggedIn", "true");
        alert("Login Successful!");
        window.location.href = "services.html";
    } else {
        alert("Invalid Credentials");
    }
}

function orderProduct() {
    if(localStorage.getItem("loggedIn") === "true") {
        alert("Order placed successfully!");
    } else {
        alert("Please login to order.");
        window.location.href = "login.html";
    }
}

function submitComplaint() {
    alert("Your complaint has been registered. We will contact you soon.");
}

