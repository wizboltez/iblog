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
document.getElementById('messageInput').addEventListener('input', function() {
    if (this.value.length > 1000) {
        this.value = this.value.substring(0, 1000); // Trim excess characters
    }
});

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

        if (message.length > 1000) {
            event.preventDefault(); // Prevent form submission
            statusElement.textContent = "Message must be under 1000 characters.";
            return;
        }
        
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Show button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Scroll smoothly to navbar when button is clicked
    scrollToTopBtn.addEventListener("click", function () {
        document.querySelector(".navbar").scrollIntoView({ behavior: "smooth" });
    });
});