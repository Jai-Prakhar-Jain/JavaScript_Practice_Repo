console.log(addOne(3)); //This will not cause any error because here function is not assigned to any variable

function addOne(number)
{
    return number+1;
}
console.log(addOne(3));

// console.log(addTwo(7)); // This line will throw an error because here we have declared a function as a variable and a variable can not be accessed before it is declared
const addTwo = function(number)
{
    return number+2;
}
console.log(addTwo(7));
