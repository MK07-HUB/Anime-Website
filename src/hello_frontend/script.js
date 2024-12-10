// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        // Add animation or other effects here
        console.log('Button clicked!');
    });
});

// Add animation to sections
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.transform = 'scale(1.1)';
        section.style.transition = 'transform 0.5s ease-in-out';
    });

    section.addEventListener('mouseout', () => {
        section.style.transform = 'scale(1)';
        section.style.transition = 'transform 0.5s ease-in-out';
    });
});