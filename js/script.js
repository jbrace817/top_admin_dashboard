const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const h1 = document.querySelector("h1");
const logo = document.querySelector(".logo");
const links = document.querySelectorAll(".links");
const paras = document.querySelectorAll(".links > p");

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
});
