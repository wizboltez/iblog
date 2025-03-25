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
