function Pokecard({ pokeData }) {
  const { id, name, type, base_experience } = pokeData;
  //TODO: remember pattern for CSS class names, put URL in cosntant
  return (
    <div className="poke-card">
      <p className="name-field">{name}</p>
      <div className="image-slot">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
      </div>
      <p className="type-field">Type: {type}</p>
      <p className="exp-field">EXP: {base_experience}</p>

    </div>
  )

}

export default Pokecard;