// Tech sparkles animation
document.addEventListener('DOMContentLoaded', function() {
    createTechSparkles();
    setupFormSubmission();
});

function createTechSparkles() {
    const sparklesContainer = document.querySelector('.tech-sparkles');
    const numOfSparkles = 30;
    
    for (let i = 0; i < numOfSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Random position
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 5 + 1;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Random animation delay
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        
        sparklesContainer.appendChild(sparkle);
    }
}

// Password visibility toggle
function togglePasswordVisibility(inputId, show) {
    const passwordInput = document.getElementById(inputId);
    passwordInput.type = show ? 'text' : 'password';
}

// Form submission handler
function setupFormSubmission() {
    const form = document.querySelector('.signup-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Validate passwords match
        if (password !== confirmPassword) {
            showMessage('Passwords do not match!', 'error');
            return;
        }
        
        // Prepare data for API
        const userData = {
            name: name,
            email: email,
            password: password
        };
        
        // Send data to API
        registerUser(userData);
    });
}

// API call function
function registerUser(userData) {
    // Show loading state
    const button = document.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Creating Account...';
    button.disabled = true;
    
    fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message || 'Registration failed');
            });
        }
        return response.json();
    })
    .then(data => {
        // Show success message before redirecting
        showMessage('Account created successfully! Redirecting to login...', 'success');
        
        // Redirect to login page after a short delay
        setTimeout(() => {
            window.location.href = '../login/login.html';
        }, 2000);
    })
    .catch(error => {
        // Error
        showMessage(error.message || 'Something went wrong. Please try again.', 'error');
    })
    .finally(() => {
        // Reset button state only if there was an error (for success we keep the button disabled)
        if (document.querySelector('.message.error')) {
            button.textContent = originalText;
            button.disabled = false;
        }
    });
}

// Message display function
function showMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = message;
    
    // Insert message after the form
    const form = document.querySelector('.signup-form');
    form.after(messageElement);
    
    // Only auto-remove error messages
    if (type === 'error') {
        // Remove message after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }
}