const attackButton = document.querySelector("#attackedBtn");
const levelUpButton = document.querySelector("#levelUpBtn");


const character = {
    name: "Kyndor Vekali",
    age: 40,
    class: "Barbarian",
    level: 12,
    maxHealth: 137,
    health: 137,

    attacked() {
        this.health -= 10;
        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has been slain!`);
        }
    },

    levelUp() {
        this.level++;
        this.maxHealth += 20;
        this.health = this.maxHealth;

        alert(`${this.name} has leveled up to level ${this.level}!`);
    }
}

function updateCharacterInfo() {
    document.querySelector("#level").textContent = character.level;
    document.querySelector("#health").textContent = character.health;
}

attackButton.addEventListener("click", () => {
    character.attacked();
    updateCharacterInfo();
});

levelUpButton.addEventListener("click", () => {
    character.levelUp();
    updateCharacterInfo();
});

updateCharacterInfo();