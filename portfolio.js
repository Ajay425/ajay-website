function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function handleVisibilityChange() {
    if (document.hidden) {
        // User has switched away from the page
        document.body.style.opacity = '0';
    } else {
        // User has returned to the page
        document.body.style.opacity = '1';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    const text = textElement.textContent;
    textElement.textContent = '';

    let index = 0;
    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 90); // Adjust typing speed here
        }
    }

    type();

    document.addEventListener('visibilitychange', handleVisibilityChange);
});

