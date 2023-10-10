const progressBar = document.getElementById("progress-bar");
const progressBarValue = document.getElementById("progress-bar-value");
const content = document.getElementById("progress-bar-content");

const ancho = document.getElementById("ancho");
const alto = document.getElementById("alto");
const border_radius = document.getElementById("border-radius");
const progress = document.getElementById("linear-progress");
const linear_color = document.getElementById("linear-color");
const linear_fill_up = document.getElementById("linear-fill-up");

setBackgroundSize(ancho);
setBackgroundSize(alto);
setBackgroundSize(border_radius);
setBackgroundSize(progress);

document.documentElement.style.setProperty(
  "--linear-color",
  linear_color.value
);

linear_fill_up.style.backgroundColor = linear_color.value;

progressBarValue.style.width = progress.value + "%";
content.innerHTML = progress.value + " %";
if (parseInt(progress.value) > 50) content.style.color = "#fff";
else content.style.color = "#000";

ancho.addEventListener("input", () => {
  progressBar.style.width = ancho.value + "px";
  setBackgroundSize(ancho);
});

alto.addEventListener("input", () => {
  progressBar.style.height = alto.value + "px";
  progressBarValue.style.height = alto.value + "px";
  setBackgroundSize(alto);
});

border_radius.addEventListener("input", () => {
  progressBar.style.borderRadius = border_radius.value + "px";
  setBackgroundSize(border_radius);
});

progress.addEventListener("input", () => {
  progressBarValue.style.width = progress.value + "%";
  content.innerHTML = progress.value + " %";
  setBackgroundSize(progress);
  if (parseInt(progress.value) > 50) content.style.color = "#fff";
  else content.style.color = "#000";
});

linear_color.addEventListener("input", () => {
  progressBarValue.style.backgroundColor = linear_color.value;
  linear_fill_up.style.backgroundColor = linear_color.value;
  document.documentElement.style.setProperty(
    "--linear-color",
    linear_color.value
  );
  if (parseInt(progress.value) > 50) content.style.color = "#fff";
  else content.style.color = "#000";
});

linear_fill_up.addEventListener("click", () => {
  let width = progress.value;
  linear_fill_up.style.pointerEvents = "none";
  const interval = setInterval(() => {
    if (width >= 100) {
      setTimeout(() => {
        progressBarValue.style.width = progress.value + "%";
        content.innerHTML = progress.value + " %";
        if (parseInt(progress.value) > 50) content.style.color = "#fff";
        else content.style.color = "#000";
        linear_fill_up.style.pointerEvents = "all";
      }, 1500);
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

function setBackgroundSize(input) {
  document.documentElement.style.setProperty(
    `--background-size-${input.id}`,
    `${getBackgroundSize(input)}%`
  );
}

function getBackgroundSize(input) {
  const min = +input.min || 0;
  const max = +input.max || 100;
  const value = +input.value;

  const size = ((value - min) / (max - min)) * 100;
  return size;
}
