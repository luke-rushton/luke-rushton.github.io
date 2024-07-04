const toggleButton = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const toggleIcon = document.getElementById('toggle-icon');
let collapsed = true;

toggleButton.addEventListener('click', () => {
    if (collapsed) {
        collapsed = false;
        navMenu.style.display = 'block';
        toggleIcon.src = 'side-arrow.png';
    } else {
        collapsed = true;
        navMenu.style.display = 'none';
        toggleIcon.src = 'down-arrow.png';
    }
});