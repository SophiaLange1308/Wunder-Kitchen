document.querySelectorAll('.social-icon').forEach(icon => {
    const originalSrc = icon.src;
    const hoverSrc = icon.getAttribute('data-hover');

    icon.addEventListener('mouseenter', () => {
        icon.src = hoverSrc;
    });

    icon.addEventListener('mouseleave', () => {
        icon.src = originalSrc;
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault(); // Verhindert den Standard-Sprung

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60, // Passt den Abstand zur fixierten Navbar an
                behavior: "smooth"
            });
        }
    });
});