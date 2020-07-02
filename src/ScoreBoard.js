import React, { Component } from "react"
import "./ScoreBoard.css"

class ScoreBoard extends Component {
  render() {
    const {
      playerOneChar,
      playerTwoChar,
      playerOneTally,
      playerTwoTally,
      playerDrawTally
    } = this.props.state
    return (
      <div>
        <div className="score-tally score-grid-container">
          <p className="score-item">Player 1 ({playerOneChar})</p>
          <p className="score-item">Tie </p>
          <p className="score-item">Player 2 ({playerTwoChar})</p>
          <p className="score-item">{playerOneTally}</p>
          <p className="score-item">{playerDrawTally}</p>
          <p className="score-item">{playerTwoTally}</p>
        </div>
        <button onClick={this.props.clearRecord}>Clear Records</button>
      </div>
    )
  }
}

export default ScoreBoard
