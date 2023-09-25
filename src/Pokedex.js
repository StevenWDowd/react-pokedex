import Pokecard from "./Pokecard";

function Pokedex({ pokemon }){
  return (
    <div className="pokedex">
      {pokemon.map(mon => <Pokecard pokeData={mon}/>)};
    </div>
  )

}

export default Pokedex;