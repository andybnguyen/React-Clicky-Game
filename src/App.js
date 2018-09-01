import React, { Component } from 'react';
import Nav from './components/Navbar';
import Card from './components/Card';
import dotaObjects from "./data/dotaHeroes";

class App extends Component {
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
    const shuffledArray = this.shuffleArray(dotaObjects);
    return (
      shuffledArray.map((dotaObject) => (
        <Card
          id={dotaObject.id}
          imgURL={dotaObject.imgURL}
        />
      ))
    );
  }
}

export default App;
