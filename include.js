async function loadHTML(id, url) {
  const res = await fetch(url);
  const text = await res.text();
  document.getElementById(id).innerHTML = text;

  // If this is the footer, set the current year
  if (id === "footer") {
    document.getElementById("current-year").textContent = new Date().getFullYear();
  }
}

loadHTML("header", "partials/header.html");
loadHTML("footer", "partials/footer.html");
