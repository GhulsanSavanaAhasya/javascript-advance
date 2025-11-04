//Oject Literal
let user = {
    name: 'Ghulsan',
    stamina: 10,
    eat: function (energizingBento){
        this.stamina = this.stamina + energizingBento;
        console.log(`You have eaten energy boosters ${this.name}`)
    }
}