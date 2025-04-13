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

// the following commented code makes the button appear after scrolling 300px which was not handy
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
