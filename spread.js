const max = Math.max (6,23,56,67,45)
const numbers = [3,4,5,6,7,13,56,34];
const arrayMax = Math.max(...numbers);

// console.log(...numbers);
console.log(arrayMax);

//use spread operator tocopy

const friends = [2,4,6,8,10];
const bondo = friends;
// bondo.push(12);
// console.log(bondo)
const dosto = [...friends]    //copy
console.log(dosto)
friends.push(100)
console.log(dosto)
console.log(friends)

//advanced

const sonkha = [...friends, 9999]  //add extra elements while copy
console.log(sonkha)