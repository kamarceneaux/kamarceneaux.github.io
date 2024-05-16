document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[data-link]");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const url = link.getAttribute("href");
      history.pushState(null, null, url);
      handleNavigation();
    });
  });

  window.addEventListener("popstate", handleNavigation);

  function handleNavigation() {
    const path = window.location.pathname;
    let page = "index";
    if (path === "/eresume") {
      page = "eresume";
    }
    fetch(`${page}.html`)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("content").innerHTML = html;
      });
  }

  window.navigateTo = (url) => {
    history.pushState(null, null, url);
    handleNavigation();
  };

  handleNavigation();
});
