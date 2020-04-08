


import GameService from "../services/GameService.js"

//NOTE private area
let _gameService = new GameService()

function _draw() {
    _gameService.clickUpgrades
    let cheeseCount = document.getElementById("cheese-counter")
    cheeseCount.innerText = _gameService.myCheese;
    let pickaxeCount = document.getElementById("pickaxe-counter")
    pickaxeCount.innerText = "Pickaxes: " + _gameService.myPickaxe;
    let shovelCount = document.getElementById("shovel-counter")
    shovelCount.innerText = "Shovels: " + _gameService.myShovel;
    let roverCount = document.getElementById("rover-counter")
    roverCount.innerText = "Rovers: " + _gameService.myRover;
    let scoutCount = document.getElementById("scout-counter")
    scoutCount.innerText = "Scouts: " + _gameService.myScout;

    let cheeseAdded = document.getElementById("cheese-added")
    cheeseAdded.innerText = "+" + _gameService.myModNum + " perClick";
    let shovelAdd = document.getElementById("shovel-add")
    shovelAdd.innerText = "+" + (_gameService.clickUpgrades.shovel.quantity * _gameService.clickUpgrades.shovel.multiplier)
    let pickaxeAdd = document.getElementById("pickaxe-add")
    pickaxeAdd.innerText = "+" + (_gameService.clickUpgrades.pickaxes.quantity * _gameService.clickUpgrades.pickaxes.multiplier)

    let roverAdd = document.getElementById("rover-add")
    roverAdd.innerText = "+" + _gameService.myAutoUpgrades;
    let scoutAdd = document.getElementById("scout-add")
    scoutAdd.innerText = "+" + _gameService.myAutoUpgrades;
}


//NOTE public area
export default class GameController {


    constructor() {
        // _draw()
    }

    mine(){
        
        _gameService.mine()
        _draw()
    }
    buyPickaxe(){
        _gameService.buyPickaxe()
        _draw()
    }
    buyShovel(){
        _gameService.buyShovel()
        _draw()
    }
    buyRover(){
        _gameService.buyRover()
        _draw()
    }
    buyScout(){
        _gameService.buyScout()
        _draw()
    }
    collectAutoUpgrades(){
        _gameService.collectAutoUpgrades()
        _draw()
    }
    modNum(){
        _gameService.modNum()
        _draw()
    }


}