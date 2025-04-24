function addTwoNumber(number1, number2)
{
    let result = number1+number2;
    return result;
}
// console.log(addTwoNumber(2,6));
// console.log(addTwoNumber()) //Output: NaN 

function sayMyName(name)
{
    return `My Name Is: ${name}`
}
// console.log(sayMyName("Jai"));
// console.log(sayMyName(Jai)); //Output: Error
// console.log(sayMyName());

function getMyNameFromObject(myName)
{
    console.log(`My Name Is ${myName.firstName} ${myName.lastName}`);
    
}
const myFullName={firstName: "Jai",
    lastName:"Jain"
}
getMyNameFromObject(myFullName)
