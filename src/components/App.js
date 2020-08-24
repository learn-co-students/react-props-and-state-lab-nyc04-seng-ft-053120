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

  onChangeType = newType => {
    this.setState(prevState => {
      return {
        ...prevState,
        filters: {
          type: newType,
        }
      }
    })
  }

  onFindPetsClick = () => {
    let url = '/api/pets';
    if (this.state.filters.type === 'all') {
      fetch(url)
        .then(res => res.json())
        .then(pets => this.setState({ pets: pets }))
    } else {
      const filterType = this.state.filters.type;
      fetch(`${url}?type=${filterType}`)
        .then(res => res.json())
        .then(pets => this.setState({ pets: pets }))
    }
  }

  onAdoptPet = petID => {
    const newPets = [...this.state.pets];
    const targetPetIdx = newPets.findIndex(pet => pet.id == petID);
    newPets[targetPetIdx].isAdopted = true;
    this.setState({
      pets: newPets,
    })
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
              <Filters 
                onChangeType={this.onChangeType} 
                onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
