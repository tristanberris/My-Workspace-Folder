
import Target from "../models/Target.js"

//NOTE private area

let _targetConfigObj = {
    cheesePerSec: 0,

    cheese: 10000,
    clickUpgrades: {
        pickaxes: {
            price: 100,
            quantity: 0,
            multiplier: 10
        },
        shovel: {
            price: 150,
            quantity: 0,
            multiplier: 30
        }
    },
    automaticUpgrades: {
        rovers: {
            price: 600,
            quantity: 0,
            multiplier: 20
        },
        scout: {
            price: 1000,
            quantity: 0,
            multiplier: 35
        }
    }
}

let _target = new Target(_targetConfigObj)

//NOTE public area
export default class GameService {

    mine() {
        _target.cheese++
        _target.cheese += this.modNum()
    }

    get myCheese(){
    return _target.cheese.toString();
    }

    buyPickaxe() {
        if (_target.cheese >= _target.clickUpgrades.pickaxes.price) {
            _target.clickUpgrades.pickaxes.quantity++;
            _target.cheese -= _target.clickUpgrades.pickaxes.price;
            _target.clickUpgrades.pickaxes.price += 50;
        }
    }
    get myPickaxe(){
        return _target.clickUpgrades.pickaxes.quantity.toString();
    }
    buyShovel() {
 
        if (_target.cheese >= _target.clickUpgrades.shovel.price) {
            _target.clickUpgrades.shovel.quantity++;
            _target.cheese -= _target.clickUpgrades.shovel.price;
            _target.clickUpgrades.shovel.price += 75
        }
    }
    get myShovel(){
        return _target.clickUpgrades.shovel.quantity.toString();
    }
    buyRover() {
        if (_target.cheese >= _target.automaticUpgrades.rovers.price) {
            _target.automaticUpgrades.rovers.quantity++;
            _target.cheese -= _target.automaticUpgrades.rovers.price;
            _target.automaticUpgrades.rovers.price += 200
        }
    }
    get myRover(){
        return _target.automaticUpgrades.rovers.quantity.toString()
    }
    buyScout() {
        if (_target.cheese >= _target.automaticUpgrades.scout.price) {
            _target.automaticUpgrades.scout.quantity++;
            _target.cheese -= _target.automaticUpgrades.scout.price;
            _target.automaticUpgrades.scout.price += 300
        }
    }
    get myScout(){
        return _target.automaticUpgrades.scout.quantity.toString();
    }


    //function creates interval on pageload, added 0, 

    collectAutoUpgrades() {
         _target.autoUpgrades = (_target.automaticUpgrades.rovers.quantity * _target.automaticUpgrades.rovers.multiplier) + (_target.automaticUpgrades.scout.quantity * _target.automaticUpgrades.scout.multiplier)
        _target.cheesePerSec = (_target.automaticUpgrades.rovers.quantity * _target.automaticUpgrades.rovers.multiplier) + (_target.automaticUpgrades.scout.quantity * _target.automaticUpgrades.scout.multiplier)
        _target.cheese += _target.autoUpgrades
    }
    get myAutoUpgrades(){
        return _target.autoUpgrades.toString()
    }



    // setInterval(  
    //   , 3000);

    modNum() {
        _target.modNumber = (_target.clickUpgrades.pickaxes.quantity * _target.clickUpgrades.pickaxes.multiplier) + (_target.clickUpgrades.shovel.quantity * _target.clickUpgrades.shovel.multiplier)
        _target.modNum = _target.modNumber;
        return _target.modNum;
    }

    get myModNum(){
        return this.modNum()
    }


}