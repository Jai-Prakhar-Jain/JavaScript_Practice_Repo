const sampleArrowFunction = (parameter1, parameter2)=>
{
    return parameter1+parameter2
}
// console.log(sampleArrowFunction(1,2));
// console.log(sampleArrowFunction("Hello"," World"));

const sampleArrowFunction1 = (parameter1, parameter2)=> parameter1+parameter2  // There is no need to use {} and return keyword if you only have return statement in your arrow function  
// console.log(sampleArrowFunction1(2,3));
const sampleArrowFunction2 = ()=> ({"firstName": "Jai", "lastName":"Jain"}) // To return an object from arrow function parantheses are used () and object is defined inside the ()
console.log(sampleArrowFunction2());

