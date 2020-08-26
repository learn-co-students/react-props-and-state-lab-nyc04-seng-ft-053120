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

  // updates filters in state
  onChangeType = (value) => {
    this.setState({
      filters: {
        type: value
      }
    })
  }

  // when called by filters this fetches a list of pets with fetch
  onFindPetsClick = () => {
    if (this.state.filters.type === "all"){
      fetch('/api/pets')
      .then(res => res.json())
      .then((petArr) => {
        this.setState({
          pets: petArr
        })
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`) 
      .then(res => res.json())
      .then((petArr) => {
        this.setState({
          pets: petArr
        })
      })
    }
  }

  // find matching pet in state.pets and change isAdopted to true -- set state
  // you have to make a copy of the array of objects by individually copying each object because you can't directly mutate state
  onAdoptPet = (id) => {
    // find index of pet to change
    let pet = this.state.pets.findIndex((pet) => (pet.id === id))

    // create a copy of the state's pet's value
    let petsArr = this.state.pets.map((pet) => { return {...pet} })

    // change the pet
    petsArr[pet].isAdopted = true

    // set state to altered copy
    this.setState({
      pets: petsArr
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
