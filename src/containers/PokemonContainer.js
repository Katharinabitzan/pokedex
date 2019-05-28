import React, {Component} from "react";
import PokemonSelect from '../components/PokemonSelect.js';
import PokemonDetails from '../components/PokemonDetails.js';

class PokemonContainer extends Component {
  constructor(props){
    super(props);
      this.state = {
        pokemon: [],
        selectedPokemon: null,
        selectedPokemonSpecies: null,
      };

    this.selectPokemon = this.selectPokemon.bind(this);
  }

  componentDidMount(){
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    fetch(url)
      .then((res) => res.json())
      .then((allResults) => {
        this.setState({pokemon: allResults.results})
       })
  }

  selectPokemon(selectedIndex){
    const selectedPokemon = this.state.pokemon[selectedIndex];
    const selectedPokemonUrl = selectedPokemon.url;

    fetch(selectedPokemonUrl)
    .then((res) => res.json())
    .then((pokemonObject) => {
      this.setState({selectedPokemon: pokemonObject})
      const speciesUrl = pokemonObject.species.url;
      fetch(speciesUrl)
      .then((res) => res.json())
      .then((speciesObject) => {
        this.setState({selectedPokemonSpecies: speciesObject})
      })
    })

  }


  render(){
    return (
      <div>
        <h1>Pokedex</h1>
        <PokemonSelect
        pokemon = {this.state.pokemon}
        onSelect = {this.selectPokemon}
        />
        <PokemonDetails
        pokemon = {this.state.selectedPokemon}
        pokemonSpecies = {this.state.selectedPokemonSpecies}
        />
      </div>
    )
  }

}

export default PokemonContainer;
