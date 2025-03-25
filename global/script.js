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


// document.getElementById('messageInput').addEventListener('input', function() {
//     if (this.value.length > 1000) {
//         this.value = this.value.substring(0, 1000); // Trim excess characters
//     }
// });

// const submitBtn = document.getElementById('submitBtn');
// if (submitBtn) {
//     submitBtn.addEventListener('click', function(event) {
//         const name = document.getElementById('nameInput').value.trim();
//         const email = document.getElementById('emailInput').value.trim();
//         const message = document.getElementById('messageInput').value.trim();
//         const statusElement = document.getElementById('formStatus');

//         // Clear any previous messages
//         statusElement.textContent = "";
//         statusElement.style.color = "red";

//         // Simple email validation pattern
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         // Validate inputs
//         if (!name || !email || !message) {
//             event.preventDefault(); // Prevents form submission

//             if (!name) {
//                 statusElement.textContent = "Please fill out your name.";
//             } else if (!email) {
//                 statusElement.textContent = "Please fill out your email.";
//             } else if (!message) {
//                 statusElement.textContent = "Please fill out your message.";
//             }

//             return;
//         }

//         // Validate email format
//         if (!emailPattern.test(email)) {
//             event.preventDefault(); // Prevents form submission
//             statusElement.textContent = "Please enter a valid email address.";
//             return;
//         }

//         if (message.length > 1000) {
//             event.preventDefault(); // Prevent form submission
//             statusElement.textContent = "Message must be under 1000 characters.";
//             return;
//         }
        
//     });
// }
//the following commented code makes the button appear after scrolling 300px which was not handy
// document.addEventListener("DOMContentLoaded", function () {
//     const scrollToTopBtn = document.getElementById("scrollToTop");

//     // Show button when scrolling down
//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 300) {
//             scrollToTopBtn.style.display = "flex";
//         } else {
//             scrollToTopBtn.style.display = "none";
//         }
//     });

//     // Scroll smoothly to navbar when button is clicked
//     scrollToTopBtn.addEventListener("click", function () {
//         document.querySelector(".navbar").scrollIntoView({ behavior: "smooth" });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) { // Show button after scrolling down 200px
            scrollToTopButton.style.display = "flex";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
