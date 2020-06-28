import React, { Component } from "react"
import "./App.css"
import PlayerSelect from "./PlayerSelect"
import Board from "./Board"
import ScoreBoard from "./ScoreBoard"

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Choose</h1>
        <PlayerSelect />
        <Board />
        <ScoreBoard />
      </div>
    )
  }
}

export default App
