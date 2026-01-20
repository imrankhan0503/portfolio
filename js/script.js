const container = document.getElementById("projects-container");
const username = "imrankhan0503";

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      if (repo.fork) return;

      const card = document.createElement("article");
      card.className = "project-card";
      card.setAttribute("data-aos", "fade-up");

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Front end project created during my studies."}</p>
        <a href="${repo.html_url}" target="_blank">
          View on GitHub
        </a>
      `;

      container.appendChild(card);
    });
  })
  .catch(() => {
    container.innerHTML = "<p>Projects could not be loaded.</p>";
  });
