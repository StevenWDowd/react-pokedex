import Pokecard from "./Pokecard";


function PokedexGame({ pokemon, isWinner, exp }){
  console.log("exp is: ", exp);
  let result;
  isWinner ? result = "won" : result = "lost";
  return (
    <div className="pokedexgame">
      <div className="PokedexGame-exp-field">Total EXP: {exp}</div>
        <div className="pokedex">
          {pokemon.map(mon => <Pokecard pokeData={mon}/>)};
        </div>
      <div className="PokdexGame-result-field" style={isWinner ? {color: "green"} : {color:"red"}}>You {result}!</div>
    </div>
  )

}

export default PokedexGame;