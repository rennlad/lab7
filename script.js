// Container for the Form
const formContainer = document.getElementById("form-container");
// Submit Button
const submitButton = document.getElementById("submit-button");
// Hidden Message
const hiddenMessage = document.getElementById("hidden-message");
// Input for the Name
const nameInput = document.getElementById("name-input");
// Input for the Email
const emailInput = document.getElementById("email-input");



// Event listener for hiding form and displaying hidden message when button is clicked
submitButton.addEventListener("click", e => {
    // Prevent page from refreshing
    e.preventDefault();

    // Hide the from container
    formContainer.style.display = "none";

    // Store the values in the name and email inputs
    let name = nameInput.value;
    let email = emailInput.value;

    // Set the text of the hidden message
    hiddenMessage.innerHTML = `${name}, thank you for your details. We will be in touch via ${email} shortly.`

    // Display the hidden message
    hiddenMessage.style.display = "block";
})