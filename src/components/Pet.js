import React from 'react'

class Pet extends React.Component {
  render() {
    let { age, gender, isAdopted, name, type, weight } = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "male" ? '♂' : '♀'} 
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* <button 
            className={ isAdopted ? "ui primary button" : "ui disabled button" }>
              Already adopted
          </button> */}
          <button 
            onClick={isAdopted ? null : () => this.props.onAdoptPet(this.props.pet.id)} 
            className={ !isAdopted ? "ui primary button" : "ui disabled button" }>
              {isAdopted ? "Already adopted" : "Adopt pet"}
          </button>
        </div>
      </div>
    )
  }
}

export default Pet
