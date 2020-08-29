import React from 'react'

import Pet from './Pet'

// onAdoptPet = () => {

// }



class PetBrowser extends React.Component {

  //this can use arrow function as well petCards = () => {}
  petCards() {
    return this.props.pets.map(p => (
      <Pet pet={p} key={p.id} onAdoptPet={this.props.onAdoptPet} />))
  }

  render() 
  {
    /////////////////Other way to render petCards this would just be called as {petCards}
    // const petCards = this.props.pets.map(pet => (
    //   <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    // ));
    // console.log(petCards)
    return <div className="ui cards">{this.petCards()}</div>
  }
}

export default PetBrowser
