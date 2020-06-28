import React, { Component } from "react"
import "./App.css"
import PlayerSelect from "./PlayerSelect"
import Board from "./Board"
import ScoreBoard from "./ScoreBoard"

export class App extends Component {
  render() {
    return (
      <div>
        <h1>reacTic Tac Toe</h1>
        <PlayerSelect />
        <Board deck={["x", "o", "x", "o", "x", "o", "x", "o", "x"]} />
        <ScoreBoard />
      </div>
    )
  }
}

export default App
