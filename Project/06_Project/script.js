const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const body = document.querySelector("body");
const createRandomColor = function () {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  return color;
};
let start;
startButton.addEventListener("click", (event) => {
  if (!start) {
    start = setInterval(() => {
      const color = createRandomColor();
      body.style.backgroundColor = color;
    }, 1000);
  }
});

stopButton.addEventListener("click", (event) => {
  clearInterval(start);
  start = null;
});
