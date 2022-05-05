import React, {Component} from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends Component{
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      pokemonList: pokemons,
      filtro: '',
      filteredList: pokemons
    }
  }

  filterList = () => {
    if (this.state.filtro === '') {
      return (
        this.setState({
          filteredList: this.state.pokemonList
        })
      )
    } 
    const list = pokemons.filter((pokemon) => pokemon.type === this.state.filtro);
    console.log(list);
    this.setState({
      filteredList: list
    })
  }

  setFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
    this.filterList()
  }

  setPokemon = () => {
    return {
      name: this.state.filteredList[this.state.currentIndex].name,
      type: this.state.filteredList[this.state.currentIndex].type,
      averageWeight: this.state.filteredList[this.state.currentIndex].averageWeight,
      image: this.state.filteredList[this.state.currentIndex].image
    }
  }

  nextPokemon = () => {
    if (this.state.currentIndex < this.state.filteredList.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      })
    } else {
      this.setState({
        currentIndex: 0,
      })
    }
  }

  render(){
    return (
      <div>
        <div className="pokemon">
          <Pokemon { ...this.setPokemon()}/>
        </div>
        <div className="buttons">
          <button onClick={this.nextPokemon}>Próximo</button>
          <button onClick={this.setFilter} value="Fire">Fire</button>
          <button onClick={this.setFilter} value="Electric">Electric</button>
        </div>
      </div>
    )
  }
}

export default Pokedex;
