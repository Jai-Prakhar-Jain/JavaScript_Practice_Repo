const array1 = [1, 2, 3, 4, 5];
const array2 = new Array(6, 7, 8, 9, 10);
//There are 2 ways of declaring an array in JavaScript
//JavaScript array can hold multiple data types and all built in copy operations create shallow copy of the array i.e. they share the same refrence 

array1.push(100)//adds the element at the last index of array
array1.push(200)
array1.pop()//removes the element from the last index of array

console.log(array1);

array2.unshift(1000);//adds the element at the first index of array
array2.unshift(2000);
array2.shift();////removes the element from the first index of array
console.log(array2);

//Slice Vs Splice
/*
Slice is same like in any other language ending index is not included and it also does not manipulates the original array
*/

/*
Splice when we use this function the result includes the element at last index and it also manipulates the original array all the element whic
*/