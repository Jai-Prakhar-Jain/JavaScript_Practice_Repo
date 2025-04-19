// Number To Other Data Types

let numberVariable = 72;
let stringVariable = "83"; // Note --> if string contains any character value then the result upon type conversion will be NaN(Not A Number) which will have type number
let stringToNumber = Number(stringVariable);
let booleanVariable = false;
let booleanToNumber = Number(booleanVariable);
let undefinedVariable = undefined;
let undefinedToNumber = Number(undefinedVariable);
let nullVariable = null;
let nullToNumber = Number(nullVariable);

console.table([
  stringToNumber,
  booleanToNumber,
  undefinedToNumber,
  nullToNumber,
]);
console.log(Boolean(0)); //Output --> false
console.log(Boolean(-1)); //Output --> true
console.log(Boolean(8373)); //Output --> true
console.log(Boolean("Jai")); //Output --> true
console.log(Boolean(" ")); //Output --> true
console.log(Boolean("")); //Output --> false
let numberToString = String(numberVariable);
console.log(numberToString);
console.log(typeof numberToString);
