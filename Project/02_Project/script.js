const form = document.querySelector("form");
let BMI;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const heightInput = parseFloat(document.querySelector("#height").value);
  const weightInput = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (
    (heightInput < 0 || isNaN(heightInput) || heightInput === "") &&
    (weightInput < 0 || isNaN(weightInput) || weightInput === "")
  ) {
    result.innerText = "Please Give A Valid Height & Weight";
  } else if (heightInput < 0 || isNaN(heightInput) || heightInput === "") {
    result.innerText = "Please Give A Valid Height";
  } else if (weightInput < 0 || isNaN(weightInput) || weightInput === "") {
    result.innerText = "Please Give A Valid Weight";
  } else {
    BMI = weightInput / (heightInput * heightInput);
    result.innerText = BMI.toFixed(1);
  }

  if (BMI.toFixed(1) < 18.6) {
    result.appendChild(document.createElement("br"));
    result.appendChild(document.createTextNode("You are UnderWeight"));
  } else if (BMI.toFixed(1) >= 18.6 && BMI.toFixed(1) <= 24.9) {
    result.appendChild(document.createElement("br"));
    result.appendChild(document.createTextNode("You are OK!"));
  } else {
    result.appendChild(document.createElement("br"));
    result.appendChild(document.createTextNode("You are OverWeight"));
  }
});
