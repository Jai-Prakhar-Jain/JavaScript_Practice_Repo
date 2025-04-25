//Immediately Invoked Function Expression (IIFE)

(function sayHello(){
    console.log("Hello Everyone!");
})(); // it is necessary to put ; at the end of IIFE so that it does not casue any error

(function sayNamaste(){
    console.log("Namaste Everyone!");
})();

(()=>{
    console.log("I am inside arrow function");
})();

(function addTwoNumbers(num1, num2){
    console.log(num1+num2);
})(3,4);

((num1, num2)=>{
    console.log(num1+num2);
})(8,4);

