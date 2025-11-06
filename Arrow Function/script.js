// let plus = function(a, b){
//     return console.log(a + b);
// }
// plus(10, 20);

// ---------------------------------------------------------------------->
// let sayHello = (name) => {
//     return console.log(`Hello my name is ${name}`)
// }
// sayHello('Ghulsan');

// ---------------------------------------------------------------------->
// implisit return
// let sayHello = name => console.log(`Hello my name is ${name}`);
// sayHello('Ghulsan');

// ---------------------------------------------------------------------->
// let sayHello = () => console.log(`Hello my name is Ghulsan`);
// sayHello();

// ---------------------------------------------------------------------->
let peoples = ['Ghulsan', 'Keii', 'Adel'];
// let charName = peoples.map(people => people.length);
// console.log(charName);

let charName = peoples.map( people => ({
    name: people,
    charName: people.length
}));
console.table(charName);