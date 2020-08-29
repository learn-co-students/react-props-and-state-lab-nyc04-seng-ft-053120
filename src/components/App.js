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

  onChangeType = (evt) => {
    this.setState({
      ...this.state.filters,
      type: evt.target.value
    })
  }

  onFindPetsClick = () => {
  
    if (this.state.type === "all")
    {
    fetch("/api/pets")
    .then(res => res.json())
    .then(petArray => 
      {
          this.setState({
          pets: petArray
      })
    })
  }
  else {
    fetch(`/api/pets?type=${this.state.type}`)
    .then(res => res.json())
    .then(petArray =>  
      {
        this.setState({
        pets: petArray
    })
  })
  }
  }

  onAdoptPet = petId => {
    console.log(petId)
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };

  render() {
    // console.log(this.state.pets)
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
