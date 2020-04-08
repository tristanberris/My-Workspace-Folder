export default class Job {
    constructor (data){
        this.id = data.id || data._id
        this.company = data.company
        this.jobTitle = data.jobTitle
        this.hours = data.hours
        this.rate = data.rate
        this.description = data.description || "No description provided"


    }

    get Template(){
        return /*html*/`
        <div class="col-4 border border-info rounded shadow">
        <h1>Company: ${this.company}</h1>
        <h5>Job Title: ${this.jobTitle}</h5>
        <h5>Hours: ${this.hours}</h5>
        <h5>Rate: ${this.rate}</h5>
        <img class="img-fluid" src="${this.imgUrl}" />
        <button type="button" class="btn btn-danger btn-block" onclick="app.houseController.delete('${this.id}')">Delete</button>
     
        
        </div>



        `
    }
}