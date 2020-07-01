import React, { Component } from "react"
import "./App.css"
import PlayerSelect from "./PlayerSelect"
import Board from "./Board"
import ScoreBoard from "./ScoreBoard"

class App extends Component {
  state = {
    playerOneChar: "x",
    playerTwoChar: "o",
    deck: ["x", "o", "x", "o", "x", "o", "x", "o", "x"],

    playerOneTally:
      JSON.parse(window.localStorage.getItem("playerOneLocalStorage")) || 0,
    playerTwoTally:
      JSON.parse(window.localStorage.getItem("playerTwoLocalStorage")) || 0,
    playerDrawTally:
      JSON.parse(window.localStorage.getItem("playerDrawLocalStorage")) || 0
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

  updateScoreBoard = (scoreChar) => {
    if (scoreChar === this.state.playerOneChar) {
      this.setState(
        (currentState) => ({
          playerOneTally: currentState.playerOneTally + 1
        }),
        () => {
          let currentTally = this.state.playerOneTally

          window.localStorage.setItem(
            "playerOneLocalStorage",
            JSON.stringify(currentTally)
          )
        }
      )
    }
    if (scoreChar === this.state.playerTwoChar) {
      this.setState(
        (currentState) => ({
          playerTwoTally: currentState.playerTwoTally + 1
        }),
        () => {
          let currentTally = this.state.playerTwoTally

          window.localStorage.setItem(
            "playerTwoLocalStorage",
            JSON.stringify(currentTally)
          )
        }
      )
    }
    if (scoreChar === "DRAW") {
      this.setState(
        (currentState) => ({
          playerDrawTally: currentState.playerDrawTally + 1
        }),
        () => {
          let currentTally = this.state.playerDrawTally

          window.localStorage.setItem(
            "playerDrawLocalStorage",
            JSON.stringify(currentTally)
          )
        }
      )
    }
  }

  clearRecord = () => {
    window.localStorage.clear()
    this.setState({ playerOneTally: 0, playerTwoTally: 0, playerDrawTally: 0 })
  }

  render() {
    return (
      <div>
        <div className="main-container">
          <h1>Tic Tac Choose</h1>
          <p className="tagline">Embrace the freedom. Choose your characters</p>
          <PlayerSelect
            registerPlayer={this.registerPlayer}
            loadDeck={this.loadDeck}
            state={this.state}
          />
          <div className="board-layout">
            <Board
              deck={this.state.deck}
              state={this.state}
              updateScoreBoard={this.updateScoreBoard}
            />
            <ScoreBoard state={this.state} clearRecord={this.clearRecord} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
