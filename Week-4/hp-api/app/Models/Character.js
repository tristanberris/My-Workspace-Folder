export default class Character {
    constructor(data) {
        this.id = data.id || data._id
        this.name = data.name
        this.house = data.house
        this.role = data.role
    }

    get Template() {
        return /*html*/ `
        <div class=" col-4 border border-info rounded shadow">
            <h1> Name: <br>${this.name}  </h1>
            <h3> House: ${this.house} </h3>
            <h3> Role: ${this.role} </h3>

        </div>
        
        `
    }
}