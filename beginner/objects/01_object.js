
const mySymbol = Symbol("symbol1");
const myObject = {
    firstName:"Jai",
    "lastName":"Jain",
    age:20,
    email:"demoemail@gmail.com",
    subjects:["English","Physics","Chemistry","Maths"],
    [mySymbol]: "mySymbol1"//Correct way to add Symobl in an object is to first declare it outside the object and then use the declared Symbol inside object inside []
}

// console.log(myObject.firstName)
// console.log(myObject["lastname"]) // keys of object are stored in the form of string and can be accessed in this way aswell
// console.log(myObject.lastName);
// console.log(myObject[mySymbol])
// console.log(myObject.subjects)

// console.log(myObject);
myObject.middleName="Prakhar";
// console.log(myObject)
// Object.freeze(myObject);
// myObject.firstName="Jai";
// console.log(myObject);

myObject.printMyName=function()
{
    console.log(`Hi, My name is ${myObject.firstName} ${myObject.middleName} ${myObject.lastName}`);
    return ;
}

myObject.printMyName();

/*
//This is how we can modify a object even if it is freezed but in such cases the original object should not be declared const anything except const will work(for example let, var)

const tempObj={};
for(let key in myObject)
{
    tempObj[key]=myObject[key];
}
tempObj.middleName = "Prakhar";
tempObj.firstName="Jai";
myObject= tempObj;
console.log(myObject);
*/





