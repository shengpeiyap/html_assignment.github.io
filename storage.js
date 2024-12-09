//Function for storage input data from contact.html and return to form.html
function storageData(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('message', message);

    window.location.href = 'form.html';
}

//Function for getting data from contact.html to form.html
function getFormData() {
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const message = sessionStorage.getItem('message');

    if (name && email && message) {
        document.getElementById('confirmation-name').textContent = name;
        document.getElementById('confirmation-email').textContent = email;
        document.getElementById('confirmation-message').textContent = message;

    } else {
        document.getElementById('confirmation-message').textContent = "Sorry, no data was found!";
    }
}

//Function for window display data
window.onload = function() {
    if (document.getElementById('contact-form')) {
        document.getElementById('contact-form').onsubmit = storageData;
    } else if (document.getElementById('confirmation-name')) {
        getFormData();
    }
};

//Function for popup confirmation
function confirmation() {
    alert('');
}