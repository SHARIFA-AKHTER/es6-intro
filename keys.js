const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

console.log(glass);
//all property name
const keys = Object.keys(glass);
//[ 'name', 'color', 'price', 'isCleaned' ]
// console.log(keys)

//all property value
const values = Object.values(glass)
//[ 'glass', 'golden', 12, true ]
    console.log(values)

    // const entries= Object.entries(glass);
    // console.log(entries);
// array of array dimensional array

    // [ 'glass', 'golden', 12, true ]
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// ]

//delete glass.isCleaned;
const {isCleaned, ...shortGlass} =glass
console.log(shortGlass)

//freeze

// Object.freeze(glass);
Object.seal(glass);
glass.source = 'Bangladesh'
glass.price = 5000;
delete glass.name;
console.log(glass)


