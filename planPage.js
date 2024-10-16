let box = document.getElementById("box");
let bottom = document.getElementById("bottom");

box.addEventListener("click", () => {
  box.style.border = "2px solid var(--main-color-)";
  bottom.style.opacity = "1";

  let bottomBox = document.getElementById("bottomBox");
  let seconde = document.getElementById("seconde");

  bottomBox.addEventListener("click", () => {
    bottomBox.style.border = "2px solid var(--main-color-)";
    seconde.style.opacity = "1";
  });
});
