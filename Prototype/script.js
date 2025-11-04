//Oject Literal
// let user1 = {
//     name: 'Ghulsan',
//     stamina: 10,
//     eat: function (energizingBento){
//         this.stamina = this.stamina + energizingBento;
//         console.log(`You have eaten energy boosters ${this.name}`)
//     }
// }

// let user2 = {
//     name: 'Keii',
//     stamina: 20,
//     eat: function (energizingBento){
//         this.stamina = this.stamina + energizingBento;
//         console.log(`You have eaten energy boosters ${this.name}`)
//     }
// }

//Function Declaration
// const userMethod = {
//     eat: function (energizingBento){
//         this.stamina += energizingBento;
//         console.log(`You have eaten energy boosters ${this.name}.`);
//     },
//     // add more method
//     climbing: function (dash){
//         this.stamina -= dash;
//         console.log(`${this.name} dash to climb.`)
//     },
//     sleep: function (hours){
//         this.stamina += hours * 2;
//         console.log(`${this.name} sleep to increase stamina.`);
//     }
// };

// function User (name, stamina){
//     let user = {};
//     user.name = name;
//     user.stamina = stamina;
//     user.eat = userMethod.eat;
//     user.climbing = userMethod.climbing;
//     user.sleep = userMethod.sleep;

//     return user;
// }

// let ghulsan = User('Ghulsan', 10);
// let keii = User('Keii', 20);

// Object Create
// const userMethod = {
//     eat: function (energizingBento){
//         this.stamina += energizingBento;
//         console.log(`You have eaten energy boosters ${this.name}.`);
//     },
//     // add more method
//     climbing: function (dash){
//         this.stamina -= dash;
//         console.log(`${this.name} dash to climb.`)
//     },
//     sleep: function (hours){
//         this.stamina += hours * 2;
//         console.log(`${this.name} sleep to increase stamina.`);
//     }
// };

// function User (name, stamina){
//     let user = Object.create(userMethod);
//     user.name = name;
//     user.stamina = stamina;

//     return user;
// }

// let ghulsan = User('Ghulsan', 10);
// let keii = User('Keii', 20);

// Prototype
// const methodUser = {
//     eat: function (energizingBento){
//         this.stamina += energizingBento;
//         console.log(`You have eaten energy boosters ${this.name}.`)
//     },
//     climbing: function (dash){
//         this.stamina -= dash;
//         console.log(`${this.name} dash to climb.`);
//     },
//     sleep: function (hours){
//         this.stamina += hours * 2;
//         console.log(`${this.name} sleep to increase stamina.`);
//     }
// };
function User (name, stamina){
    // let user = Object.create(methodUser);
    this.name = name;
    this.stamina = stamina;

    // return user;
}
User.prototype.eat = function (energizingBento){
    this.stamina += energizingBento;
    console.log(`You have eaten energy booster ${this.name}.`);
}
User.prototype.climbing = function (dash){
    this.stamina -= dash;
    console.log(`${this.name}, dash to climb.`);
}
User.prototype.sleep = function (hours){
    this.stamina += hours * 2;
    console.log(`${this.name} sleep to increase stamina.`);
}

let ghulsan = new User('Ghulsan', 10);
let keii = new User('Keii', 20);

// Constructur Function
// Keyword new
// function User (name, stamina){
//     this.name = name;
//     this.stamina = stamina;

//     this.eat = function (energizingBento){
//         this.stamina += energizingBento;
//         console.log(`You have eaten energy boosters ${this.name}.`);
//     }
//     // add more method
//     this.climbing = function (dash){
//         this.stamina -= dash;
//         console.log(`${this.name} dash to climb.`)
//     }
// }

// let ghulsan = new User('Ghulsan', 10);
// let keii = new User('Keii', 20);