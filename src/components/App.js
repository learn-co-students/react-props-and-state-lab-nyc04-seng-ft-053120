import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all',
      },
    };
  }

  fetchPets = () => {
    let BASE_URL = '/api/pets';
    let PATH = `?type=${this.state.filters.type}`;

    if (this.state.filters.type !== 'all') {
      BASE_URL += PATH;
    }

    fetch(BASE_URL)
      .then((response) => response.json())
      .then((pets) => this.setState({ pets: pets }));
  };

  onChangeType = ({ target: { value } }) => {
    console.log({ target: { value } });
    this.setState({
      filters: { ...this.state.filters, type: value },
    });
  };

  onAdoptPet = (id) => {
    const pets = this.state.pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({ pets: pets });
  };

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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
