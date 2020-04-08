import store from "../store.js";
import Character from "../Models/Character.js"

let _harryPotterApi = axios.create({
    baseURL: 'https://www.potterapi.com/v1/characters?key=$2a$10$ud0tzwxyGijnIeQeiiHbkuAYegFr7y9vLLZComn5QhzdQipjejEaq',
    timeout: 10000
  })
  
  let _sandboxApi = axios.create({
    // baseURL: '//bcw-sandbox.herokuapp.com/api/darryl/pokemon',
    timeout: 10000
  })

class HarryPotterService {
    getCharacters(){
        _harryPotterApi.get('')
        
        //getting index object from URL
        .then(res => {
           
            let resCharacter = res.data.map(characterData => new Character(characterData));
            console.log("HP characters", res.data)
            //points to store v
            console.log(resCharacter)
            store.commit('characters', resCharacter)
        })
    }
}

const service = new HarryPotterService();
export default service;
