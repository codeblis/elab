const processor_title = document.querySelector("#processor-title");
const processor_chevron = document.querySelector("#processor-chevron");
const processor_details = document.querySelector("#processor-details");

processor_title.addEventListener("click", () => {
  if (processor_chevron.className === "chevron")
    processor_chevron.className = "chevron-open";
  else processor_chevron.className = "chevron";
  if (processor_details.className === "card-details") {
    processor_details.className = "card-details-open";
  } else processor_details.className = "card-details";
});

const motherboard_title = document.querySelector("#motherboard-title");
const motherboard_chevron = document.querySelector("#motherboard-chevron");
const motherboard_details = document.querySelector("#motherboard-details");

motherboard_title.addEventListener("click", () => {
  if (motherboard_chevron.className === "chevron")
    motherboard_chevron.className = "chevron-open";
  else motherboard_chevron.className = "chevron";
  if (motherboard_details.className === "card-details") {
    motherboard_details.className = "card-details-open";
  } else motherboard_details.className = "card-details";
});

const ram_title = document.querySelector("#ram-title");
const ram_chevron = document.querySelector("#ram-chevron");
const ram_details = document.querySelector("#ram-details");

ram_title.addEventListener("click", () => {
  if (ram_chevron.className === "chevron")
    ram_chevron.className = "chevron-open";
  else ram_chevron.className = "chevron";
  if (ram_details.className === "card-details") {
    ram_details.className = "card-details-open";
  } else ram_details.className = "card-details";
});

const chasis_title = document.querySelector("#chasis-title");
const chasis_chevron = document.querySelector("#chasis-chevron");
const chasis_details = document.querySelector("#chasis-details");

chasis_title.addEventListener("click", () => {
  if (chasis_chevron.className === "chevron")
    chasis_chevron.className = "chevron-open";
  else chasis_chevron.className = "chevron";
  if (chasis_details.className === "card-details") {
    chasis_details.className = "card-details-open";
  } else chasis_details.className = "card-details";
});

const ssd_title = document.querySelector("#ssd-title");
const ssd_chevron = document.querySelector("#ssd-chevron");
const ssd_details = document.querySelector("#ssd-details");

ssd_title.addEventListener("click", () => {
  if (ssd_chevron.className === "chevron")
    ssd_chevron.className = "chevron-open";
  else ssd_chevron.className = "chevron";
  if (ssd_details.className === "card-details") {
    ssd_details.className = "card-details-open";
  } else ssd_details.className = "card-details";
});

const hdd_title = document.querySelector("#hdd-title");
const hdd_chevron = document.querySelector("#hdd-chevron");
const hdd_details = document.querySelector("#hdd-details");

hdd_title.addEventListener("click", () => {
  if (hdd_chevron.className === "chevron")
    hdd_chevron.className = "chevron-open";
  else hdd_chevron.className = "chevron";
  if (hdd_details.className === "card-details") {
    hdd_details.className = "card-details-open";
  } else hdd_details.className = "card-details";
});

const wifi_title = document.querySelector("#wifi-title");
const wifi_chevron = document.querySelector("#wifi-chevron");
const wifi_details = document.querySelector("#wifi-details");

wifi_title.addEventListener("click", () => {
  if (wifi_chevron.className === "chevron")
    wifi_chevron.className = "chevron-open";
  else wifi_chevron.className = "chevron";
  if (wifi_details.className === "card-details") {
    wifi_details.className = "card-details-open";
  } else wifi_details.className = "card-details";
});

const video_title = document.querySelector("#video-title");
const video_chevron = document.querySelector("#video-chevron");
const video_details = document.querySelector("#video-details");

video_title.addEventListener("click", () => {
  if (video_chevron.className === "chevron")
    video_chevron.className = "chevron-open";
  else video_chevron.className = "chevron";
  if (video_details.className === "card-details") {
    video_details.className = "card-details-open";
  } else video_details.className = "card-details";
});

const fuente_title = document.querySelector("#fuente-title");
const fuente_chevron = document.querySelector("#fuente-chevron");
const fuente_details = document.querySelector("#fuente-details");

fuente_title.addEventListener("click", () => {
  if (fuente_chevron.className === "chevron")
    fuente_chevron.className = "chevron-open";
  else fuente_chevron.className = "chevron";
  if (fuente_details.className === "card-details") {
    fuente_details.className = "card-details-open";
  } else fuente_details.className = "card-details";
});

const display_title = document.querySelector("#display-title");
const display_chevron = document.querySelector("#display-chevron");
const display_details = document.querySelector("#display-details");

display_title.addEventListener("click", () => {
  if (display_chevron.className === "chevron")
    display_chevron.className = "chevron-open";
  else display_chevron.className = "chevron";
  if (display_details.className === "card-details") {
    display_details.className = "card-details-open";
  } else display_details.className = "card-details";
});
