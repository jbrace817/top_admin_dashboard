/** Global Variables */
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const h1 = document.querySelector("h1");
const logo = document.querySelector(".logo");
const links = document.querySelectorAll(".links");
const paras = document.querySelectorAll(".links > p");
const navTop = document.querySelector(".top");
const navBottom = document.querySelector(".bottom");
const container = document.querySelector(".container");

/** Event listener for Navigation menu. */
menu.addEventListener("click", (e) => {
  nav.classList.toggle("short");
  h1.classList.toggle("short");

  if (nav.classList.contains("short")) {
    logo.style.visibility = "hidden";
    h1.style.visibility = "hidden";
    paras.forEach((p) => (p.style.display = "none"));
    menu.style.transform = "rotate(180deg)";
  } else {
    setTimeout(() => {
      logo.style.visibility = "visible";
      h1.style.visibility = "visible";
      paras.forEach((p) => (p.style.display = "block"));
      menu.style.transform = "rotate(360deg)";
    }, 200);
  }

  links.forEach((link) => link.classList.toggle("closed"));
  navTop.classList.toggle("closed");
  navBottom.classList.toggle("closed");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    const highlight = document.querySelectorAll(".highlight");
    link.classList.toggle("highlight");
    if (highlight.length >= 1) {
      for (var i = 0; i < links.length; i++) {
        var links2 = links[i];
        links2.classList.remove("highlight");
      }
      link.classList.toggle("highlight");
    }
  });
});

/** Function to detect if it is a mobile device and what orientation it is in. */
function screenOrientation() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    const portrait = window.matchMedia("(orientation:portrait)").matches;
    const landscape = window.matchMedia("(orientation:landscape)").matches;

    if (portrait) {
      container.style.height = "100vh";
    } else {
      container.style.height = "200vh";
    }

    window
      .matchMedia("(orientation: portrait)")
      .addEventListener("change", (e) => {
        const portrait = e.matches;

        if (portrait) {
          container.style.height = "100vh";
        } else {
          container.style.height = "200vh";
        }
      });
    window
      .matchMedia("(orientation: landscape)")
      .addEventListener("change", (e) => {
        const landscape = e.matches;

        if (landscape) {
          container.style.height = "200vh";
        } else {
          container.style.height = "100vh";
        }
      });
  }
}

screenOrientation();
