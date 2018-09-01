import React, { Component } from 'react';
import Nav from './components/Navbar';
import Card from './components/Card';
import dotaObjects from "./data/dotaHeroes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dotaObjects,
    }
  }
  shuffleArray = array => {
    let i, j, temp;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  render() {
    return (
      <div onClick={() => this.setState({data: this.shuffleArray(dotaObjects)})}>
        {
          this.state.data.map((object) => (
            <Card
              id={object.id}
              imgURL={object.imgURL}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
