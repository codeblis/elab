const up = document.querySelector(".up");
up.addEventListener("click", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
});
