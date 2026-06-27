function showTab(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  event.target.classList.add("active");
}

// Dark mode
const btn = document.getElementById("themeToggle");

btn.onclick = () => {
  const isDark = document.body.getAttribute("data-theme") === "dark";

  if (isDark) {
    document.body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
};

// load theme
if (localStorage.getItem("theme") === "dark") {
  document.body.setAttribute("data-theme", "dark");
}
