// typing effect
const title = document.getElementById("typing");

function typeWriter() {
    title.classList.add("typing");
    title.textContent = "";
    let i = 0;
    const text = "welcome to alyah's cafe";

    function tick() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(tick, 50);
        }
    }

    tick();
}

setTimeout(typeWriter, 1000);

// draggable stars! 
const stickers = document.querySelectorAll(".leapordstar, .maroonstar, .starss, .glass-star, .blueystar");

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

function updateActiveNav() {
    const triggerPoint = window.innerHeight * 0.35;
    let current = "home";

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            current = section.id || "home";
        }
    });

    navLinks.forEach(link => {
        const isActive = link.getAttribute("href") === `#${current}`;
        link.classList.toggle("active", isActive);
    });
}

updateActiveNav();
window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("load", updateActiveNav);