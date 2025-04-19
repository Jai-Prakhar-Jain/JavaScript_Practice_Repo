let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log("\n\n");
let myDate1 = new Date("2025-04-15");
console.log(myDate1);
console.log(myDate1.toString());
console.log(myDate1.toLocaleString())
console.log(myDate1.toLocaleDateString());
console.log(myDate1.toLocaleTimeString());
console.log(myDate1.toDateString());
console.log(myDate1.toTimeString());
console.log("\n\n");
let myTimeStamp = Date.now();
console.log(myTimeStamp);
let myTimestamp1 = myDate1.getTime();
console.log(myTimestamp1);