import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }
  
  onFindPetsClick = () => {
    let query = this.state.filters.type === 'all' ? "" : `?type=${this.state.filters.type}`
    fetch(`/api/pets${query}`)
    .then(resp => resp.json())
    .then(data => {
      this.setState(prevState => ({pets: data}))
    })
  }

  onAdoptPet = (petId) => {
    let petsArray = [...this.state.pets]
    let targetPetIndex = petsArray.findIndex(pet => pet.id === petId)
    petsArray[targetPetIndex].isAdopted = true

    this.setState(prevState => ({
      pets: petsArray
    }))
  }
  
  handleFilterChange = (event) => {
    event.persist()
    this.setState(prevState => ({
      filters: {
        type: event.target.value
      }
    }))
  }
  
  componentDidMount() {
    this.onFindPetsClick();
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
                filter={this.state.filters.type}
                onChangeType={this.handleFilterChange}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
