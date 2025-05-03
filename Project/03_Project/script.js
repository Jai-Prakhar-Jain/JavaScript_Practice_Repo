const clock = document.querySelector("#clock");

setInterval(() => {
  const date = new Date();
  const currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  clock.innerText = currentTime;
}, 1000);
