const allButtons = Array.from(document.querySelectorAll(".button"));
console.log(allButtons);
const mainBody = document.querySelector("body");
allButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "grey":
        mainBody.style.backgroundColor = event.target.id;
        break;
      case "white":
        mainBody.style.backgroundColor = event.target.id;
        break;
      case "blue":
        mainBody.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        mainBody.style.backgroundColor = event.target.id;
        break;
      default:
        mainBody.style.backgroundColor = "red";
        break;
    }
  });
});
