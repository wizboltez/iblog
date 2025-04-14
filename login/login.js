  function showPassword() {
    document.getElementById('password').type = 'text';
  }

  function hidePassword() {
    document.getElementById('password').type = 'password';
  }

  // Sparkle generator
  const sparkleContainer = document.querySelector('.tech-sparkles');
  for (let i = 0; i < 80; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 20}s`;
    sparkleContainer.appendChild(sparkle);
  }

