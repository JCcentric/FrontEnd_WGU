// Function to validate email matching
function validateEmail() {
    var email = document.getElementById("email").value;
    var cemail = document.getElementById("cemail").value;
    var cemail = document.getElementById("emailError").value;

    if (email !== cemail) {
        emailError.textContent = "Emails do not match!"
        return false;
    }

    else{
        emailError.textContent = "";
    }
    return true; // Allow form submission
}

// Event listener for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    if (!validateEmail()) {
        event.preventDefault(); // Prevent form submission if emails do not match
    }
});