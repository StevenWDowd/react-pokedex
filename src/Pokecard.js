const BASE_IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

function Pokecard({ pokeData }) {
  const { id, name, type, base_experience } = pokeData;
  return (
    <div className="poke-card">
      <p className="pokecard-name-field">{name}</p>
      <div className="pokecard-image-slot">
        <img src={`${BASE_IMAGE_URL}${id}.png`}/>
      </div>
      <p className="pokecard-type-field">Type: {type}</p>
      <p className="pokecard-exp-field">EXP: {base_experience}</p>

    </div>
  )

}

export default Pokecard;