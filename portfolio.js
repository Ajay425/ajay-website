function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
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
            setTimeout(type, 80); // Adjust typing speed here
        }
    }

    type();
});
