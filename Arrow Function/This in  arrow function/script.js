// constructur function
// const Character = function(){
//     this.name = 'Gabumon',
//     this.element = 'Fire',
//     this.healt = 100

//     this.attack = function(){
//         console.log(`${this.name} attack with ${this.element}.`);
//     }
// }

// const gabumon = new Character();
//---------------------------------------------------------------->
// arrow function
const Character = function() {
    this.name = 'Gabumon',
    this.element = 'Fire',
    this.healt = 100

    this.attack = () => {
        console.log(`${this.name} attack with ${this.element}.`);
    }
}

const gabumon = new Character();
//---------------------------------------------------------------->

// object literal
// const digimon = {
//     char: 'Veemon',
//     elemental: 'Lightning',
//     healt: 100,
//     attack: () => {
//         console.log(`${this.char} attack with ${this.elemental}`);
//         console.log(this);
//     }
// }

// constructor function
const Digimon = function() {
    this.char = 'Agumon',
    this.elemental = 'Fire',
    this.mana = 100,
    this.attack = function(){
        console.log(`${this.char} attack with ${this.elemental}`);
    }

    setInterval(() => {
        // console.log(this.mana--);
    }, 1000);
}


const digimon = new Digimon();

