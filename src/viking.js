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
      this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    this.name = name;
    super(health, strength);
    }

    receiveDamage(damage){
      this.health - damage
      if (Viking === "ALive"){
        return "A Saxon has received DAMAGE points of damage"
      }
    }

    battleCry(){
       return "Odin Owns You All!"
    }
 
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage){
    this.health - damage
    if (Saxon === "ALive"){
      return "NAME has received DAMAGE points of damage"
    }
  }
}

// War
class War {}




const Charlie = new Soldier ("100","100");
console.log (Charlie);


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
