export default class Target {
    constructor(data) {
        console.log("This is the target file")
        this.cheesePerSec = data.cheesePerSec;
        this.cheese = data.cheese;
        this.clickUpgrades = data.clickUpgrades;
        this.automaticUpgrades = data.automaticUpgrades;

    }
}
