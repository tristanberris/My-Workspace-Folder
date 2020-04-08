class Car{
    
}

let yourCar = new Car();

class Cookie {
    constructor(type, ingredients){
        this.type = type;
        this.ingredients = ingredients
    }
}

let cc = new Cookie("chocolate chip", ["flour", "chocolate chips"])
let pb = new Cookie("peanut butter", ["flour", "peanut butter"])

// Methods
class Enemy {
    attack(){
        return this.damage;
    }
    constructor(hp, damage){
        this.hp = hp;
        this.damage = damage;
    }
}
 //let Orc is creating an instance of the Enemy class. 
    //Enemy isn't an instance of itself
let orc = new Enemy(100, 10);
orc.attack();

// Class vs Instance (using Static)
    //this might not be as important

//Darryl example:

class Car {
    constructor(make, model, year, price = "free"){
        this.make = make || model || "something else"
        this.model = model
        this.year = year
        this.price = price
    }

    drive(){
        console.log(`you have driven the ${this.make} ${this.model}`)
    }
}
//price = free sets "price"'s default value at "free," if nothing is specified
    //the || operator in "this.make = make" does the same thing

let subaru = new Car("Subaru", "forester", 2017, "23000")
subaru.drive()