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
