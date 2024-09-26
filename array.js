// function declaration

// function add (a,b){
//     const result = a+b;
//     return result;
// }
function add (a,b){
  return a+b;
}

// const sum = add(5, 90);
// console.log(sum)

//function expression

const add2 = function(a,b){
    return a+b;
}

// arrow function

// const add3 = (a,b) => a + b;
// const sum = add3(5,93)
// console.log(sum);

const add3 = (a,b) =>  a + b;
const add4= (num1 , num2, num3,num4,) => num1 + num2 + num3 + num4;

const multiply = (num1,num2) => num1 * num2;

const sum = add4(5,7,9,10);
const mult    = multiply(3, 12)  ;
console.log(mult) 
console.log(sum);