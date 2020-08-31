import React from 'react'

// 3) should render the name
// 4) should render the correct gender icon for male pets
//       5) should render the correct gender icon for female pets
//       6) should render the pet type
// 7) should render the pet age
// 8) should render the pet weight

class Pet extends React.Component {

  renderAdoptButton = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    }
    return <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>

  }

  render() {
    // console.log(this.props)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "male" ? '♂' : '♀'} {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderAdoptButton()}
        </div>
      </div>
    )
  }
}

export default Pet
