window.onload = function () {
  const menu = document.querySelector(".hamburger-menu");
  const navPages = document.querySelector(".nav__pages");
  let isOpen = false;
  menu.addEventListener("click", () => {
    if (isOpen) {
      navPages.style.display = "none";
    } else {
      navPages.style.display = "flex";
    }
    isOpen = !isOpen;
  });
  document.addEventListener("click", (e) => {
    if (isOpen && !menu.contains(e.target)) {
      console.log("hi");
      navPages.style.display = "none";
      isOpen = false;
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      navPages.style.display = "inline-flex";
      isOpen = false;
    } else if (!isOpen) {
      navPages.style.display = "none";
    }
  });
};
