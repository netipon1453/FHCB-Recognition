const loginForm = getelementById("Login");
loginForm.addEventListener('submit', function(event) {
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "knetipon@gmail.com" && password === "123456") {
    event.preventDefault(); 
    window.location.href = "Dashboard.html";
    } else {
        alert("Invalid email or password. Please try again.");
        console.log("Login failed for email:", email);
        
    }
});