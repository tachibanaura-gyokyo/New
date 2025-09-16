fetch("/New/_includes/footer.html")
  .then(r => r.text())
  .then(html => {
    const box = document.querySelector("#footer");
    if (box) {
      box.innerHTML = html;
      box.querySelectorAll("[data-year]").forEach(el => {
        el.textContent = new Date().getFullYear();
      });
    }
  });
