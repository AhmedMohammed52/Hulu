const showBtn = document.querySelector("#showBtn");
const hiddenTitels = document.querySelector(".hiddenTitels");

showBtn.addEventListener("click", () => {
  hiddenTitels.style.display = "block";
  showBtn.style.display = "none";
});

const hideBtn = document.getElementById("hideBtn");

hideBtn.addEventListener("click", () => {
  hiddenTitels.style.display = "none";
  showBtn.style.display = "inline";
});

const secContainer = document.getElementByClassName("secFour");
const activeBtn = document.getElementById("btnBox");

activeBtn.addEventListener("click", () => {
  secContainer.setAttribute(
    "background",
    "url('Images/secondeBackground.jfif')"
  );
});
