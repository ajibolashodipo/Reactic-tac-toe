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
        <h3>Score Board</h3>
        <div className="score-tally">
          <p>
            Player 1 ({playerOneChar}): {playerOneTally}
          </p>
          <p>Tie: {playerDrawTally} </p>
          <p>
            Player 2 ({playerTwoChar}): {playerTwoTally}{" "}
          </p>
        </div>
      </div>
    )
  }
}

export default ScoreBoard
