const number = [1, 4, 2, 9, -6, 8, -4, 5, 2, 8, 7];

// filter using for
// const newNumber = [];
// for(let i = 0; i < number.length; i++){
//     if(number[i] <= 3){
//         newNumber.push(number[i]);
//     }
// }
// console.log(newNumber);
// ------------------------------------------------------------------>

// filter
// const newNumber = number.filter(n => n <= 3);
// console.log(newNumber);

// ------------------------------------------------------------------>

// map
// const newNumber = number.map(n => n * 2);
// console.log(newNumber);

// ------------------------------------------------------------------>

// reduce
// const newNumber = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // default is 0
// console.log(newNumber);

// ------------------------------------------------------------------>
// chaining method

const result = number.filter(n => n < 5)
    .map(n => n * 2)
    .reduce((acc, curr) => acc + curr);

console.log(result);
    