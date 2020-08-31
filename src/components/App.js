import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { config } from 'chai'


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

  updateType = (input) => {
    // input should be what the component filter returns
    // input should then be added to type in state 
    this.setState((prevState) => ({
      pets: [...prevState.pets],
      filters: {
        type: input
      }
    })) 
  }

  handlePetsFetch = () => {
    const type = this.state.filters.type
    
    if (type !== "all"){
      fetch(`/api/pets?type=${type}`) .then(resp => resp.json())
      .then(list =>{
        this.setState({
          pets: [...list]
        })
      })
    }else{
       fetch("/api/pets") 
      .then(resp => resp.json())
      .then(list =>{
        this.setState({
          pets: [...list]
        })
      })
    }
  }
  
  onAdoptPet = (petId) => {
    console.log("adopting pet...", petId)
    this.setState((prev) => ({
      // find the pet with matching id, update that pets isAdopted status
      pets: prev.pets.map((pet) => {
        if(pet.id === petId) { 
          pet.isAdopted = true 
        }
        return pet
        })
    }))
  }
  
  

  render() {
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateType} onFindPetsClick={this.handlePetsFetch}/>
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
