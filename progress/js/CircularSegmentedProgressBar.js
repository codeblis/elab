const cs_radius = document.getElementById("cs-radius");
const cs_segments = document.getElementById("cs-segments");
const cs_progress = document.getElementById("cs-progress");
const cs_color = document.getElementById("cs-color");

const cs_fill_up = document.getElementById("cs-fill-up");

const cs_counter = document.getElementById("cs-counter");
const cs_rating = document.getElementsByClassName("cs-rating")[0];
const cs_block = document.getElementsByClassName("cs-block");

Counter();
Segmentar(cs_segments.value);
SaveColor(cs_color.value);
Paint(Math.ceil((cs_progress.value / 100) * cs_segments.value));

function Segmentar(index) {
  for (let i = 0; i < index; i++) {
    cs_rating.innerHTML += "<div class='cs-block'></div>";
    cs_block[i].style.transform = "rotate(" + (360 / index) * i + "deg)";
    cs_block[i].style.animationDelay = `${i / 60}s`;
  }
}

function Paint(index) {
  for (let i = 0; i < index; i++) {
    cs_block[i].style.setProperty("background", cs_color.value);
    cs_block[i].style.setProperty(
      "box-shadow",
      `0 0 15px ${cs_color.value}, 0 0 30px ${cs_color.value}`
    );
  }
}
cs_segments.addEventListener("input", () => {
  Segmentar(cs_segments.value);
});

cs_color.addEventListener("input", () => {
  SaveColor(cs_color.value);
  Paint(Math.ceil((cs_progress.value / 100) * cs_segments.value));
});

function SaveColor(value) {
  document.documentElement.style.setProperty("--cs-color", value);
}

function Counter() {
  const interval = setInterval(() => {
    if (+cs_counter.innerText >= +cs_progress.value) {
      clearInterval(interval);
    } else {
      cs_counter.innerText = Math.ceil(+cs_counter.innerText + 1);
    }
  }, cs_segments.value / 6);
}
