import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander')

// charmander.savePokemonToDB(3)

charmander.publicApi = 'asd'
console.log(charmander)