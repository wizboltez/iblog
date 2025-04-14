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
    const form = document.querySelector('.login-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const email = form.querySelector('input[type="email"]').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember-me').checked;
        
        // Prepare data for API
        const userData = {
            email: email,
            password: password
        };
        
        // Send data to API
        loginUser(userData, rememberMe);
    });
}

// API call function
function loginUser(userData, rememberMe) {
    // Show loading state
    const button = document.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Logging in...';
    button.disabled = true;
    
    fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message || 'Login failed');
            });
        }
        return response.json();
    })
    .then(data => {
        // Show success message before redirecting
        showMessage('Login successful! Redirecting...', 'success');
        
        // If remember me is checked, store user info in localStorage, otherwise in sessionStorage
        const storage = rememberMe ? localStorage : sessionStorage;
        
        // Store token and user info if available
        if (data.token) {
            storage.setItem('token', data.token);
        }
        
        if (data.user) {
            storage.setItem('user', JSON.stringify(data.user));
        }
        
        // Redirect to landing page after a short delay
        setTimeout(() => {
            window.location.href = '../landing_page/home.html';
        }, 1500);
    })
    .catch(error => {
        // Error
        showMessage(error.message || 'Invalid email or password. Please try again.', 'error');
        
        // Reset button state
        button.textContent = originalText;
        button.disabled = false;
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
    const form = document.querySelector('.login-form');
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