import Pokecard from "./Pokecard";


function PokedexGame({ pokemon }){
  return (
    <div className="pokedex">
      {pokemon.map(mon => <Pokecard pokeData={mon}/>)};
    </div>
  )

}

export default PokedexGame;