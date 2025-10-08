class Enemy {
    constructor(name) {
        this.name = name;
        this.speed = 2;
        this.attackPower = 5;
        this.health = 100;
        this.defend = 2;
    }

    attack() {
        console.log(`enemy attack, attack = ${this.attackPower}`);
    }

    walk() {
        console.log(`enemy walk, speed = ${this.speed}`);
    }

    dash() {
        console.log(`enemy dash, speed = 5`);
    }

    getInformation() {
        console.log(`${this.name} memiliki speed=${this.speed}, attack=${this.attackPower}, health=${this.health}, dan defend=${this.defend}`);
    }
}

class Goblin extends Enemy {
    constructor(name) {
        super(name);
        this.speed = 3; 
    }

    
    teleport() {
        console.log("Goblin teleports!");
    }
}

const enemy = new Enemy("Basic Enemy");
enemy.getInformation();
enemy.attack();
enemy.walk();
enemy.dash();

console.log("\\n--- Goblin ---");

const goblin = new Goblin("Goblin King");
goblin.getInformation();
goblin.attack();
goblin.walk(); 
goblin.dash();
goblin.teleport();
