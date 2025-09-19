// DARK MODE
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    document.body.style.background = "#f5f5f5";
    document.body.style.color = "#111";
    toggleBtn.textContent = "☀️";
  } else {
    document.body.style.background = "#111";
    document.body.style.color = "#fff";
    toggleBtn.textContent = "🌙";
  }
});

// SCROLL ANIMATIONS
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});


