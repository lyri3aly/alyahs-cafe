// draggable stars! 
const stickers = document.querySelectorAll(".leapordstar, .maroonstar, .starss, .glass-star");

stickers.forEach((sticker) => {
    let dragging = null;

    sticker.addEventListener("pointerdown", (event) => {
        dragging = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            startLeft: sticker.offsetLeft,
            startTop: sticker.offsetTop
        };

        sticker.setPointerCapture(event.pointerId);
    });

    sticker.addEventListener("pointermove", (event) => {
        if (!dragging || event.pointerId !== dragging.pointerId) return;

        const dx = event.clientX - dragging.startX;
        const dy = event.clientY - dragging.startY;

        sticker.style.position = "absolute";
        sticker.style.left = `${dragging.startLeft + dx}px`;
        sticker.style.top = `${dragging.startTop + dy}px`;
    });

    sticker.addEventListener("pointerup", () => {
        dragging = null;
    });

    sticker.addEventListener("pointercancel", () => {
        dragging = null;
    });
});

// navbar links and detect section
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".topnav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 500;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});