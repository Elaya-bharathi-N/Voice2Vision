
    // Function to validate the form
    function validateForm(event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Get form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation checks
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.'); // Alert for empty fields
            return; // Exit the function if validation fails
        }

        // Simple email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.'); // Alert for invalid email
            return; // Exit the function if validation fails
        }

        // Display success message and reset form
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        document.querySelector('form').reset(); // Reset the form fields
    }

    // Attach the validateForm function to the form submit event
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('form');
        form.addEventListener('submit', validateForm);
    });
