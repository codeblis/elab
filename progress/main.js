const progressBar = document.getElementById("progress-bar");
const progressBarValue = document.getElementById("progress-bar-value");
const content = document.getElementById("progress-bar-content");

const ancho = document.getElementById("ancho");
const alto = document.getElementById("alto");
const border_radius = document.getElementById("border-radius");
const progress = document.getElementById("progress");
const color = document.getElementById("color");

if (parseInt(progress.value) > 50) content.style.color = "#fff";
else content.style.color = "#000";

ancho.addEventListener("change", () => {
  progressBar.style.width = ancho.value + "px";
  // content.style.width = ancho.value + "px";
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
  content.innerHTML = progress.value + " %";
  if (parseInt(progress.value) > 50) content.style.color = "#fff";
  else content.style.color = "#000";
});

color.addEventListener("change", () => {
  progressBarValue.style.backgroundColor = color.value;
  if (parseInt(progress.value) > 50) content.style.color = "#fff";
  else content.style.color = "#000";
});

const llenar = document.getElementById("completar");

llenar.addEventListener("click", () => {
  let width = 0;
  llenar.style.pointerEvents = "none";
  const interval = setInterval(() => {
    if (width >= 100) {
      llenar.style.pointerEvents = "all";
      clearInterval(interval);
    } else {
      width++;
      progressBarValue.style.width = `${width}%`;
      content.innerHTML = `${width}%`;
      if (width <= 50) content.style.color = "#000";
      else content.style.color = "#fff";
    }
  }, 30);
});
