const ball = document.getElementsByClassName("ball");

for (let index = 0; index < ball.length; index++) {
  const element = ball.item(index);
  element.addEventListener("click", () => {
    if (element.className == "ball") {
      element.className = "right-ball";
    } else element.className = "ball";
  });
}
