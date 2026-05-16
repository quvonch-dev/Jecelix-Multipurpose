const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const backTop = document.getElementById("backTop");
const loader = document.getElementById("pageLoader");

window.addEventListener("load", () => {
  loader.classList.add("hide");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  backTop.classList.toggle("show", window.scrollY > 450);
});

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  const icon = menuBtn.querySelector("i");
  icon.className = navMenu.classList.contains("show") ? "ri-close-line" : "ri-menu-3-line";
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    menuBtn.querySelector("i").className = "ri-menu-3-line";
  });
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((item) => observer.observe(item));

const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterBtns.forEach((button) => {
  button.addEventListener("click", () => {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.dataset.filter;

    projects.forEach((project) => {
      const isVisible = filterValue === "all" || project.dataset.category === filterValue;
      project.classList.toggle("hide", !isVisible);
    });
  });
});

const slides = document.querySelectorAll(".testimonial-slide");
const prevReview = document.getElementById("prevReview");
const nextReview = document.getElementById("nextReview");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

nextReview.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevReview.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const head = item.querySelector(".accordion-head");

  head.addEventListener("click", () => {
    accordionItems.forEach((other) => {
      if (other !== item) other.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Message sent successfully! This is a demo form.";
  contactForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 3500);
});
