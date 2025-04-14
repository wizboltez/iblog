// Toggle password visibility
function togglePasswordVisibility(id, show) {
    const input = document.getElementById(id);
    if (input) input.type = show ? 'text' : 'password';
  }
  
  // Handle form submission
  document.querySelector('.signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Form submission intercepted for demo.");
  });
  
  // Sparkle particle effect on DOM load
  document.addEventListener('DOMContentLoaded', function() {
    const sparkleContainer = document.querySelector('.tech-sparkles');
    const sparkleCount = 50;
  
    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
  
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
  
      // ⚡ Faster delay and duration
      const delay = Math.random() * 3;       // reduced from 15 to 3
      const duration = 3 + Math.random() * 4; // reduced from 10–30 to 3–7
      sparkle.style.animationDelay = `${delay}s`;
      sparkle.style.animationDuration = `${duration}s`;
  
      sparkleContainer.appendChild(sparkle);
    }
  });
  function switchToSignup() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('signin-form').style.display = 'none';
  }
  
  function switchToSignin() {
    document.getElementById('signin-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
  }
  
  