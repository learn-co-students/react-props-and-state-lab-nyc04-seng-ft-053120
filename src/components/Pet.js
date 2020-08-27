import React from 'react'

class Pet extends React.Component {

  render() {
    // Should receive a pet prop. Use the attributes in this data to render the pet card correctly. It should show the pet's name, type, age and weight. Based on the pet's gender, the component also needs to contain either a male (♂) or female (♀) symbol.
    const { id, type, gender, age, weight, name, isAdopted } = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { gender === 'male' ? '♂' : '♀' }
            { name }
          </a>
          <div className="meta">
            <span className="date">{ type }</span>
          </div>
          <div className="description">
            <p>Age: { age }</p>
            <p>Weight: { weight }</p>
          </div>
        </div>
        <div className="extra content">
          {/* Each pet may or may not have an isAdopted property set to true. Using this property, render the correct button in the pet's card; if the pet is adopted, show the disabled button. Otherwise, show the primary button to adopt the pet. */}

          {/* Should receive an onAdoptPet callback prop. This callback prop gets called with the pet's id when the user clicks the adopt pet button — not when they click the disabled button! */}
          { isAdopted  
            ? (<button className="ui disabled button">Already adopted</button>)
            : (<button className="ui primary button" onClick={ e => this.props.onAdoptPet(id) } >Adopt pet</button>) 
          }
        </div>
      </div>
    )
  }
}

export default Pet
