const array1 = [1,2,3,4,5];
const array2 = ["A","B","C","D","E"];

// array1.push(array2);
// console.log(array1);  This will add array2 as a single element into array1 

// const array3 = array1.concat(array2);
// console.log(array3);  concat function does not manipulates the original array, it returns a new array 

const array3 = [...array1,...array2] //... is known as spread operator it spreads all the values which are present inside an array
console.log(array3);

const array4 = [1,2,[3,4,5],[6,7,[8,9]],10];
const array5 = array4.flat(Infinity);
console.log(array5);

const array6 = Array.from("Learning Array");
console.log(array6)


