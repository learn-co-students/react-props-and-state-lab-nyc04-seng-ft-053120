import React from 'react'

import Pet from './Pet'


class PetBrowser extends React.Component {
  // Should receive a pets prop. This is an array of pets that the component uses to render <Pet /> components. App should determine which pets to pass down as props. App should be responsible for filtering this list based on the types of pets the user wants to see.

  // Should receive an onAdoptPet prop. This callback prop gets passed to its <Pet /> children components.
  renderPets = () => {
    
    return this.props.pets.map(pet => {
      return <Pet key= { pet.id } pet={ pet } onAdoptPet={ this.props.onAdoptPet }/>
    })
  }

  render() {
    return (<div className="ui cards">{ this.renderPets() }</div>)
  }
}

export default PetBrowser
