import _ from "lodash"

function shufflePokemon (pokemons){
 return _.shuffle(pokemons);
}

function createHands (shuffledPokemon){

  const middleIndex = Math.floor((shuffledPokemon.length/2));
  const firstHand = shuffledPokemon.slice(0,middleIndex);
  const secondHand = shuffledPokemon.slice(middleIndex);

  const gameHands = [firstHand,secondHand];
  return gameHands;
}

export {shufflePokemon, createHands};