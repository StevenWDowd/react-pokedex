import PokedexGame from "./PokedexGame";
import { shufflePokemon, createHands } from "./helpers";



function Pokegame({pokemon}) {

  //console.log("pokemon are ", pokemon);
  const shuffledPokemon = shufflePokemon(pokemon);
  const [firstHand, secondHand] = createHands(shuffledPokemon);
  console.log("firstHand is ", firstHand);

  const firstHandExp = firstHand.reduce((a,c) => {
    console.log("baseexp is ", c.base_experience);
    return a+c.base_experience;
  }, 0);

  const secondHandExp = secondHand.reduce((a,c) => {
    return a+c.base_experience;
  }, 0);

  console.log("firstHandExp is ", firstHandExp);
  // let winner;

  // (firstHandExp > secondHandExp) ? winner = firstHand : winner = secondHand;

  return (
    <div className="Pokegame">
      <PokedexGame pokemon={firstHand} exp = {firstHandExp}
                              isWinner={firstHandExp > secondHandExp}/>
      <PokedexGame pokemon={secondHand} exp = {secondHandExp}
                            isWinner={secondHandExp > firstHandExp}/>
    </div>
  );
}

export default Pokegame;