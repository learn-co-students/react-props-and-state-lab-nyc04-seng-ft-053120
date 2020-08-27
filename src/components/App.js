import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  // App should pass a callback prop, onChangeType, to <Filters />. This callback needs to update <App />'s state.filters.type
  onChangeType = (newFilterType) => {
    return this.setState({
      ...this.state,
      filters: {
        type: newFilterType
      }
    })
  }

  // <Filters /> needs a callback prop, onFindPetsClick. When the <Filters /> component calls onFindPetsClick, <App /> should fetch a list of pets using fetch().
   onFindPetsClick = () => {
    let fetchURL = '/api/pets';

    if (this.state.filters.type !== 'all') {
      fetchURL += ('?type=' + this.state.filters.type)
    }

    fetch(fetchURL)
      .then(response => response.json())
      .then(result => {
        // The pet data received will include information on individual pets and their adoption status.

        // Set <App/>'s state.pets with the results of your fetch request so you can pass the pet data down as props to <PetBrowser />
        this.setState({ pets: result })
      });
  }

  // Finally, App should pass a callback prop, onAdoptPet, to <PetBrowser />. This callback should take in an id for a pet, find the matching pet in state.pets and set the isAdopted property to true.
  onAdoptPet = (id) => {
    const newPetArr = [...this.state.pets].map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      }
      return pet
    })
    this.setState({ pets: newPetArr })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={ this.onChangeType }  onFindPetsClick={ this.onFindPetsClick }/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={ this.state.pets } onAdoptPet={ this.onAdoptPet }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
