document.addEventListener("DOMContentLoaded", () => {

  // ===== GALLERY =====
  const panels = document.querySelectorAll('.panel');

  panels.forEach(panel => {
    panel.addEventListener('click', () => {

      panels.forEach(item => item.classList.remove('active'));
      panel.classList.add('active');

    });
  });

  // ===== MOBILE MENU =====
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ===== DARK MODE =====
  if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

});
  }

  console.log("Website Loaded");

});
