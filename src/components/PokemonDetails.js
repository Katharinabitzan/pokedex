import React, {Component} from 'react';

const PokemonDetails = ({pokemon, pokemonSpecies}) => {
  if (pokemon === null || pokemonSpecies === null) {
    return (
      <p> Please choose a pokemon </p>
    )
  }

  const types = pokemon.types.map((type) => {
    return(
      <li key={type.slot}> {type.type.name} </li>
    )
  });


  return(

    <div>
      <h2>{pokemon.name}</h2>
      <p> Evolves from { pokemonSpecies.evolves_from_species ? pokemonSpecies.evolves_from_species.name : "nothing"} </p>
      <img src={pokemon.sprites.front_default}/>
      <p> height: {pokemon.height}0cm </p>
      <p> weight: {pokemon.weight}00g </p>
      <ul> types: {types} </ul>

      <h3>species info</h3>
      <ul>
      <li>Base happiness: {pokemonSpecies.base_happiness}</li>
      <li>Capture rate: {pokemonSpecies.capture_rate}</li>

</ul>

    </div>
  )
}

export default PokemonDetails;
