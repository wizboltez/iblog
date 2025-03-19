// Add smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').includes('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').split('#')[1];
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Team member card animations
const teamMembers = document.querySelectorAll('.member');
teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
        member.style.backgroundColor = '#1a1a1a';
    });

    member.addEventListener('mouseleave', () => {
        member.style.backgroundColor = '#121212';
    });
});

// Contact form functionality
const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
    submitBtn.addEventListener('click', function(event) {
        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const message = document.getElementById('messageInput').value.trim();
        const statusElement = document.getElementById('formStatus');

        // Clear any previous messages
        statusElement.textContent = "";
        statusElement.style.color = "red";

        // Simple email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate inputs
        if (!name || !email || !message) {
            event.preventDefault(); // Prevents form submission

            if (!name) {
                statusElement.textContent = "Please fill out your name.";
            } else if (!email) {
                statusElement.textContent = "Please fill out your email.";
            } else if (!message) {
                statusElement.textContent = "Please fill out your message.";
            }

            return;
        }

        // Validate email format
        if (!emailPattern.test(email)) {
            event.preventDefault(); // Prevents form submission
            statusElement.textContent = "Please enter a valid email address.";
            return;
        }

        // If all fields are valid, show success message
        statusElement.style.color = "green";
        statusElement.textContent = "Your message has been successfully sent!";
    });
}
