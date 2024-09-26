const actor = {
    name: 'Anananta',
    age: 30,
    phone: '01735566778',
    money: 12356767778
}

//if right side is an object left side of destructing will be
//object as well

//use property name as a vARIABLE THAT CONTAINS the property value

const  {phone, age: boyos}  = actor

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(boyos)
// console.log(age)
// console.log(age)

//array destructuring.
const numbers = [45, 99]
const [first,second] =numbers;
const [x, y] = [12,66];


function doubleThem(a,b){
    return [a*2, b*2];

}
const [prothom, ditiyo] =doubleThem(6,9);
console.log(prothom, ditiyo)

