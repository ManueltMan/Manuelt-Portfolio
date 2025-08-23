'use strict';

/* =========================
   ELEMENT TOGGLE FUNCTION
========================= */
const elemToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

/* =========================
   HEADER & GO TOP BUTTON
========================= */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
const navLinks = document.querySelectorAll(".navbar-link");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

  // Highlight active navbar link
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 80;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector(`.navbar-link[href="#${id}"]`).classList.add("active");
    }
  });
});

/* =========================
   SMOOTH SCROLL
========================= */
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    document.getElementById("check").checked = false; // close mobile nav
  });
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================
   THEME TOGGLE
========================= */
const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", () => {
  elemToggleFunc(themeToggleBtn);
  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    localStorage.setItem("theme", "dark_theme");
  }
});

// Apply theme on page load
if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/* =========================
   SKILLS TOGGLE
========================= */
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

toggleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    elemToggleFunc(toggleBtnBox);
    toggleBtns.forEach(b => elemToggleFunc(b));
    elemToggleFunc(skillsBox);
  });
});
