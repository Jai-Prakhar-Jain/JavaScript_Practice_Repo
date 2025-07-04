const sampleObject = new Object(); // This creates a singleton object
const sampleObject1 = {}; //This creates a non-singleton object

sampleObject[1] = "A";
sampleObject[2] = "B";
sampleObject[3] = "C";
sampleObject[4] = "D";

const sampleObject2 = { ...sampleObject, ...sampleObject1 };
// const sampleObject2 = {sampleObject,sampleObject1}
// console.log(sampleObject2);

const myObject = {
  myFirstName: "Jai",
  myMiddleName: "Prakhar",
  myLastName: "Jain",
  myAge: 21,
};
const { myFirstName } = myObject;
const { myFirstName: firstName } = myObject;
console.log(myFirstName);
console.log(firstName);

// const myObject = { A: 1, AA: 1 };
// let string = "AAA";
// for (let index = 1; index < 100000; index++) {
//   myObject.[string] = 1;
//   string = string.concat("A");
// }
//This will casue Memory Exhaustion
