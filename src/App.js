import React, { Component } from 'react';
import { CardHolder, Card } from "./components/Card";
import characters from "./data/characters";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: characters,
      score: 0,
      highestscore: 0,
      clickedIdArray: [],
      newClickId: 0,
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
    if (this.check(id)) {
      this.setState({
        newClickId: id,
        clickedIdArray: this.state.clickedIdArray.concat([id]),
        score: this.state.score + 1
      })
    } else {
      this.setState({
        newClickId: 0,
        clickedIdArray: [],
        score: 0,
      })
    }
  };


  check = id => {
    return this.state.clickedIdArray.includes(id) ? false : true;
  };

  render() {
    return (
      <React.Fragment>
        <div>Score: {this.state.score}</div>
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
