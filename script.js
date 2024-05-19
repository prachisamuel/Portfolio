function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".carousel").scrollLeft = 0;
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".arrow-left");
    const nextBtn = document.querySelector(".arrow-right");

    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;

    let scrollPosition = 0;

    // Move carousel to the left
    prevBtn.addEventListener("click", function () {
        if (scrollPosition > 0) {
        scrollPosition -= clientWidth;
        carousel.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
        });
        }
    });

    // Move carousel to the right
    nextBtn.addEventListener("click", function () {
        if (scrollPosition + clientWidth < scrollWidth) {
        scrollPosition += clientWidth;
        carousel.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
        });
        }
    });
});
  