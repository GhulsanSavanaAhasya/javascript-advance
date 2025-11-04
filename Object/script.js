//Oject Literal
// let user = {
//     name: 'Ghulsan',
//     stamina: 10,
//     eat: function (energizingBento){
//         this.stamina = this.stamina + energizingBento;
//         console.log(`You have eaten energy boosters ${this.name}`)
//     }
// }

//Function Declaration
// function User (name, stamina){
//     let user = {};
//     user.name = name;
//     user.stamina = stamina;

//     user.eat = function (energizingBento){
//         this.stamina += energizingBento;
//         console.log(`You have eaten energy boosters ${this.name}.`);
//     }
//     // add more method
//     user.climbing = function (dash){
//         this.stamina -= dash;
//         console.log(`${this.name} dash to climb.`)
//     }
//     return user;
// }

// let ghulsan = User('Ghulsan', 10);
// let keii = User('Keii', 20);

// Constructur Function
// Keyword new
function User (name, stamina){
    this.name = name;
    this.stamina = stamina;

    this.eat = function (energizingBento){
        this.stamina += energizingBento;
        console.log(`You have eaten energy boosters ${this.name}.`);
    }
    // add more method
    this.climbing = function (dash){
        this.stamina -= dash;
        console.log(`${this.name} dash to climb.`)
    }
}

let ghulsan = new User('Ghulsan', 10);
let keii = new User('Keii', 20);