// function greeting(){
//     // let name = 'Ghulsan';
//     // let age = 23;
//     return function(name, age){
//         console.log(`Halo my name is ${name}`);// Closure
//         console.log(`I am ${age} Years old`);// Closure
//     }
// }
// let hallo = greeting();
// hallo('Ghulsan', 23);
// hallo('Keii', 20)

// function greetings(time){
//     return function(name){
//         console.log(`Hi ${name}, good ${time}`);
//     }
// }

// let goodMorning = greetings('Good Morning');
// let goodAfternoon = greetings('Good Avternoon');
// let goodEvening = greetings('Good Avternoon');
// let goodNight = greetings('Good Night');

// goodMorning('Ghulsan');
// goodNight('Keii');

let add = (function(){
    let counter = 0
    return function(){
        return ++counter
    }
})();

counter = 100

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());