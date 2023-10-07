const progressBar = document.getElementById("progress-bar");
const progressBarValue = document.getElementById("progress-bar-value");

const ancho = document.getElementById("ancho");
const alto = document.getElementById("alto");
const border_radius = document.getElementById("border-radius");
const progress = document.getElementById("progress");
const color = document.getElementById("color");

ancho.addEventListener("change", () => {
  progressBar.style.width = ancho.value + "px";
});

alto.addEventListener("change", () => {
  progressBar.style.height = alto.value + "px";
  progressBarValue.style.height = alto.value + "px";
});

border_radius.addEventListener("change", () => {
  progressBar.style.borderRadius = border_radius.value + "px";
});

progress.addEventListener("change", () => {
  progressBarValue.style.width = progress.value + "%";
});

color.addEventListener("change", () => {
  progressBarValue.style.backgroundColor = color.value;
});
