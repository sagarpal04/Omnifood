const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const navElement = document.querySelector(".alternate-nav");

menuOpen.addEventListener("click", function () {
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
  navElement.classList.add("nav-visible");
});

menuClose.addEventListener("click", function () {
  menuOpen.style.display = "block";
  menuClose.style.display = "none";
  navElement.classList.remove("nav-visible");
});

// Add click event listeners to all elements with class "alternate-link"
document.querySelectorAll(".alternate-link").forEach((link) => {
  link.addEventListener("click", () => {
    // Apply the specified styles when clicked
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
    navElement.classList.remove("nav-visible");
  });
});

const copyDate = document.querySelector(".newDate");
copyDate.textContent = new Date().getFullYear();
