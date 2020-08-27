import React from 'react'

class Filters extends React.Component {
  // Should receive an onChangeType callback prop. This callback prop gets called whenever the value of the <select> element changes with the value of the <select>
  handleAnimalSelect = event => this.props.onChangeType(event.target.value);

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={ this.handleAnimalSelect }>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          {/* Should receive an onFindPetsClick callback prop. This callback prop gets called when the users clicks the 'Find pets' button. */}
          <button className="ui secondary button" onClick={ e => this.props.onFindPetsClick() }>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
