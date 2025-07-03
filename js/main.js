document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Dark mode toggle
  const toggle = document.createElement('button');
  toggle.textContent = "🌓 Toggle Theme";
  toggle.style.position = "fixed";
  toggle.style.top = "10px";
  toggle.style.right = "10px";
  toggle.style.padding = "10px";
  toggle.style.border = "none";
  toggle.style.borderRadius = "8px";
  toggle.style.background = "#007acc";
  toggle.style.color = "white";
  toggle.style.cursor = "pointer";
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // ✨ Scroll animation
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
});
