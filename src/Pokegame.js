import PokedexGame from "./PokedexGame";
import { shufflePokemon, createHands } from "./helpers";



function Pokegame({pokemon}) {

  const shuffledPokemon = shufflePokemon(pokemon);
  const [firstHand, secondHand] = createHands(shuffledPokemon);

  const firstHandExp = firstHand.reduce((a,c) => {
    return a+c.base_experience;
  })

  const secondHandExp = secondHand.reduce((a,c) => {
    return a+c.base_experience;
  })

  return (
    <div className="App">
      <PokedexGame pokemon={firstHand} exp = {firstHandExp} />
      <PokedexGame pokemon={secondHand} exp = {secondHandExp}/>
    </div>
  );
}