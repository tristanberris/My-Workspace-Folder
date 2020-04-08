import CharacterService from "../Services/CharacterService.js";
import store from "../store.js";


//Private
function _draw() {
  console.log("from draw characters" + store.State.characters)
  let characters = store.State.characters
  let template = ''
  characters.forEach(c => { 
    
    template += c.Template;
  });
  document.getElementById("hp-characters").innerHTML = template
  console.log(characters)
  
}

//Public
export default class CharacterController {
  constructor() {
    store.subscribe('characters', _draw);
    _draw()
    this.getCharacter()
  }

  getCharacter(){
    CharacterService.getCharacters( )
  }
  
}
