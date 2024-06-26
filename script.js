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

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
