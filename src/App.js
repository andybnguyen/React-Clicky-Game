import React, { Component } from 'react';
import { CardHolder, Card } from "./components/Card";
import { Score } from "./components/Score";
import characters from "./data/characters";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: characters,
      score: 0,
      highestScore: 0,
      newClickId: 0,
      clickedIdArray: [],
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

  handleCardClicked = id => {
    const {score, highestScore, clickedIdArray} = this.state;
    if (this.check(id)) {
      this.setState({
        data: this.shuffleArray(characters),
        score: score + 1,
        highestScore: score + 1> highestScore ? score + 1: highestScore,
        newClickId: id,
        clickedIdArray: clickedIdArray.concat([id]),
      })
    } else {
      this.setState({
        data: characters,
        score: 0,
        newClickId: 0,
        clickedIdArray: [],
      })
    }
  };


  check = id => {
    return this.state.clickedIdArray.includes(id) ? false : true;
  };

  render() {
    return (
      <React.Fragment>
        <Score score={this.state.score} highScore={this.state.highestScore}/>
        <CardHolder onClick={() => this.setState({
          data: this.shuffleArray(characters),
        })}>
          {
            this.state.data.map(object => {
              return (
                <Card
                  key={object.id}
                  id={object.id}
                  imgURL={object.imgURL}
                  handleCardClicked={this.handleCardClicked}
                />
              )
            })
          }
        </CardHolder>
      </React.Fragment>
    );
  };
}

export default App;
