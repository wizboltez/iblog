
// Add smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href').includes('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').split('#')[1];
            const targetElement = document.getElementById(targetId);
            
            if(targetElement) {
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
if(submitBtn) {
    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const message = document.getElementById('messageInput').value;
        const statusElement = document.getElementById('formStatus');
        
        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(name && email && message) {
            if(!emailPattern.test(email)) {
                statusElement.textContent = 'Please enter a valid email address.  
