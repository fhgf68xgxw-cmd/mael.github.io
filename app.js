// Menu mobile
const burger = document.querySelector(".burger");
const menu = document.querySelector("#menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });

  // Fermer menu après clic
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Year
document.querySelector("#year").textContent = new Date().getFullYear();

// Contact form -> ouvre mailto
const form = document.querySelector("#contactForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = encodeURIComponent(data.get("name"));
  const email = encodeURIComponent(data.get("email"));
  const message = encodeURIComponent(data.get("message"));

  const subject = encodeURIComponent("Contact portfolio — Alternance");
  const body = encodeURIComponent(
    `Nom: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\n\nMessage:\n${decodeURIComponent(message)}`
  );

  // Remplace par ton email
  window.location.href = `mailto:mael.re@icloud.com?subject=${subject}&body=${body}`;
});