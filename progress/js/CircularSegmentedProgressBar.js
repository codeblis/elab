const cs_segments = document.getElementById("cs-segments");
const cs_progress = document.getElementById("cs-progress");
const cs_color = document.getElementById("cs-color");

const cs_fill_up = document.getElementById("cs-fill-up");

const cs_counter = document.getElementById("cs-counter");
const cs_rating = document.getElementsByClassName("cs-rating")[0];
const cs_block = document.getElementsByClassName("cs-block");

let temp_progress = cs_progress.value;

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
      `0 0 10px ${cs_color.value}, 0 0 20px ${cs_color.value}`
    );
  }
}

cs_segments.addEventListener("change", () => {
  cs_rating.innerHTML = "";
  Segmentar(cs_segments.value);
  Paint(Math.ceil((cs_progress.value / 100) * cs_segments.value));
});

cs_progress.addEventListener("input", () => {
  cs_counter.innerText = cs_progress.value;
  if (cs_progress.value > temp_progress) {
    const e = parseInt((cs_progress.value / 100) * cs_segments.value);
    for (let i = 0; i <= e; i++) {
      cs_block[i].style.setProperty("background", cs_color.value);
      cs_block[i].style.setProperty(
        "box-shadow",
        `0 0 10px ${cs_color.value}, 0 0 20px ${cs_color.value}`
      );
    }
  } else if (cs_progress.value < temp_progress) {
    const e = parseInt((cs_progress.value / 100) * cs_segments.value);
    for (let i = cs_block.length - 1; i >= e; i--) {
      cs_block[i].style.setProperty("background", "#111");
      cs_block[i].style.setProperty("box-shadow", "none");
    }
  }
  temp_progress = cs_progress.value;
});

cs_color.addEventListener("input", () => {
  SaveColor(cs_color.value);
  Paint(Math.ceil((cs_progress.value / 100) * cs_segments.value));
});

function SaveColor(value) {
  document.documentElement.style.setProperty("--cs-color", value);
}

function Counter() {
  cs_counter.innerHTML = "0";
  const interval = setInterval(() => {
    if (+cs_counter.innerText >= +cs_progress.value) {
      clearInterval(interval);
    } else {
      cs_counter.innerText = +cs_counter.innerText + 1;
    }
  }, cs_segments.value / 6);
}

cs_fill_up.addEventListener("click", () => {
  let min = parseInt((cs_progress.value / 100) * cs_segments.value);
  const max = cs_segments.value;
  cs_fill_up.style.pointerEvents = "none";
  cs_segments.style.pointerEvents = "none";
  cs_progress.style.pointerEvents = "none";
  const interval = setInterval(() => {
    if (min >= max) {
      setTimeout(() => {
        const progress = parseInt(
          (cs_progress.value / 100) * cs_segments.value
        );
        let maximo = cs_segments.value - 1;
        const intervalo = setInterval(() => {
          if (maximo <= progress) {
            clearInterval(intervalo);
          } else {
            cs_counter.innerText = parseInt(
              (maximo * 100) / cs_segments.value - 1
            );
            cs_block[maximo].style.setProperty("background", "#111");
            cs_block[maximo].style.setProperty("box-shadow", "none");
            maximo--;
          }
        }, 5);
        cs_fill_up.style.pointerEvents = "all";
        cs_segments.style.pointerEvents = "all";
        cs_progress.style.pointerEvents = "all";
      }, 2000);
      clearInterval(interval);
    } else {
      cs_counter.innerText = Math.ceil(((min + 1) * 100) / cs_segments.value);
      cs_block[min].style.setProperty("background", cs_color.value);
      cs_block[min].style.setProperty(
        "box-shadow",
        `0 0 10px ${cs_color.value}, 0 0 20px ${cs_color.value}`
      );
      min++;
    }
  }, 30);
});
