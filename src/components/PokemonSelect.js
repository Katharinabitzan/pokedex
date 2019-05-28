import React, {Component} from 'react';

const PokemonSelect = (props) => {

  const options = props.pokemon.map((pokemon, index) => {
    return(
      <option key={index} value={index}>{pokemon.name}</option>
    )
  });

  function handleSelectChange(evt) {
    const selectedIndex = evt.target.value;
    props.onSelect( selectedIndex );
  }


  return(
    <select
    id="pokemon-selector"
    defaultValue="default"
    onChange={handleSelectChange}
      >
      <option disabled value="default"> Choose a pokemon</option>
      {options}
    </select>
  )
}

export default PokemonSelect;
