const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

menu?.addEventListener("click", () => {
  const open = nav.style.display === "flex";

  nav.style.display = open ? "" : "flex";

  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.right = "20px";
    nav.style.flexDirection = "column";
    nav.style.padding = "18px";
    nav.style.background = "#0c1424";
    nav.style.border = "1px solid #203452";
  }
});
