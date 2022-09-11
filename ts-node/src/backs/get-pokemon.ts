import { getPokemon } from '../generics/get-pokemon';

// console.log(getPokemon())

getPokemon(4)
  .then(pokemon => console.log(pokemon.name))
  .catch (error => console.error(error))
  .finally(() => console.log("Fin de get pokemon")
  )
  