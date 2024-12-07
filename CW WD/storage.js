// Function to store form data in sessionStorage and redirect to form.html
function showSuccessPopup(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Store form data in sessionStorage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('message', message);

    // Redirect to form.html after successful form submission
    window.location.href = 'form.html';
}

// Function to retrieve form data from sessionStorage and display it
function getFormData() {
    // Retrieve form data from sessionStorage
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const message = sessionStorage.getItem('message');

    // Check if the data exists and display it
    if (name && email && message) {
        document.getElementById('confirmation-name').textContent = name;
        document.getElementById('confirmation-email').textContent = email;
        document.getElementById('confirmation-message').textContent = message;
    } else {
        // If no data, show an error message
        document.getElementById('confirmation-message').textContent = "Sorry, no data was found!";
    }
}

// Bind the functions to the window.onload event for form.html and contact.html
window.onload = function() {
    if (document.getElementById('contact-form')) {
        // If the form is on the contact page, bind the showSuccessPopup function
        document.getElementById('contact-form').onsubmit = showSuccessPopup;
    } else if (document.getElementById('confirmation-name')) {
        // If the confirmation elements exist, load the form data
        getFormData();
    }
};
