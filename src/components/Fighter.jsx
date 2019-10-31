class Fighter {
    constructor(name, defense, attack) {
        this.name = name
        this.defense = defense*5
        this.attack = attack
    }
    giveAcidSpray(target) {
        const message = `${this.name} spray acid on ${target}`
        console.log(message)
        return {attack:this.attack+2, message} 
    }
    giveASlash(target) {
        const message = `${this.name} slash ${target}`
        console.log(message)
        return {attack:this.attack, message} 
    }
    Bite(target) {
        const message = `${this.name} bite ${target}`
        console.log(message)
        return {attack:this.attack , message} 
    }
    RipOfHisFlesh(target) {
        const message= `${this.name} ripe off the flesh of ${target}`
        console.log(message)
        return {attack: this.attack+5, message} 
    }
    takeDamage(dmg){
        this.defense -= dmg
        console.log(`${this.name}: ${this.defense} HP`);
        return this.defense
    }
}

export default Fighter