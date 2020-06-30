import React, { Component } from "react"
import "./App.css"
import PlayerSelect from "./PlayerSelect"
import Board from "./Board"
import ScoreBoard from "./ScoreBoard"

class App extends Component {
  state = {
    playerOneChar: "x",
    playerTwoChar: "o",
    deck: ["x", "o", "x", "o", "x", "o", "x", "o", "x"]
  }

  registerPlayer = (data) => {
    const extractKey = Object.keys(data)
    console.log(data[extractKey[1]])
    this.setState(
      {
        [extractKey[0]]: data[extractKey[0]],
        [extractKey[1]]: data[extractKey[1]]
      },
      () => {
        console.log(this.state)
      }
    )
  }

  loadDeck = (char1, char2) => {
    const myArray = []
    for (let i = 0; i < 9; i++) {
      if (!(i % 2)) {
        myArray.push(char1)
      } else {
        myArray.push(char2)
      }
    }
    this.setState({ ...this.state, deck: myArray }, () => {
      return myArray
    })
  }

  render() {
    return (
      <div>
        <h1>reacTic Tac Toe</h1>
        <PlayerSelect
          registerPlayer={this.registerPlayer}
          loadDeck={this.loadDeck}
          state={this.state}
        />

        <Board deck={this.state.deck} />
        <ScoreBoard />
      </div>
    )
  }
}

export default App
