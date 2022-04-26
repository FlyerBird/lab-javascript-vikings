// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage; //this.healt = this.health - damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat"
    }
  }
}

// War
class War {
  
  constructor(){
    this.vikingArmy=[];
    this.saxonArmy=[];
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }         
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  
  vikingAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    let randomDamage = this.randomSaxon.receiveDamage(this.randomViking.strength) 
    if (this.randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon.indexOf(randomSaxon),1)
    } 
    return randomDamage
  }

  saxonAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    let randomDamage = this.randomViking.receiveDamage(this.randomSaxon.strength) 
    if (this.randomViking.health <= 0) {
      this.saxonArmy.splice(randomViking.indexOf(randomSaxon),1)
    } 
    return randomDamage
    }

  randomAttack() {
    randomAttack = Math.round(Math.random());
    if(this.randomAttack === 0) {
      let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
      let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
      let randomDamage = this.randomSaxon.receiveDamage(this.randomViking.strength) 
      if (this.randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon.indexOf(randomSaxon),1)
    } 
    return randomDamage
    }
    else if (this.randomAttack === 1) {
     let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
     let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
     let randomDamage = this.randomViking.receiveDamage(this.randomSaxon.strength) 
     if (this.randomViking.health <= 0) {
     this.saxonArmy.splice(randomViking.indexOf(randomSaxon),1)
    } 
    return randomDamage
    }
  }


  showStatus(){
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    }
    return "Vikings and Saxons are still in the thick of battle."
  }

    
}

//const testingNewViking = new War()
//console.log ();

/*
const testingViking = new Viking('Viking1', 100, 200);
console.log(testingViking.receiveDamage(100));

console.log(testingViking.battleCry());

const testingSaxon = new Saxon (100,150);
console.log(testingSaxon.receiveDamage(100));
*/



// // The following is required to make unit tests work.
// /* Environment setup. Do not modify the below code. */
// if (typeof module !== 'undefined') {
//   module.exports = { Soldier, Viking, Saxon, War };
// }



