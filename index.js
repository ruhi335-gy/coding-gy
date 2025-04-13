// 🔍 Filter projects by search
const searchInput = document.getElementById("search");
const projectList = document.getElementById("project-list");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const projects = projectList.getElementsByClassName("project-card");

  Array.from(projects).forEach((project) => {
    const title = project.querySelector("h3").textContent.toLowerCase();
    const description = project.querySelector("p").textContent.toLowerCase();
    const matches = title.includes(query) || description.includes(query);
    project.style.display = matches ? "block" : "none";
  });
});

// 🍔 Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
