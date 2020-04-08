import Job from "../Models/Job.js"
import _store from "../store.js"
import store from "../store.js"

let _api = axios.create({
    baseURL: '//bcw-sandbox.herokuapp.com/api/jobs',
  timeout: 3000
})


class JobService {

getHouse(){
    _api.get()
        .then
}



}
