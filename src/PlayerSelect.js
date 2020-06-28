import React, { Component } from "react"

class PlayerSelect extends Component {
  render() {
    return (
      <div>
        <p>Choose your character</p>
        <form action="">
          <label htmlFor="player1">Player 1:</label>
          <input type="text" id="player1" />
          <label htmlFor="player2">Player 2:</label>
          <input type="text" id="player2" />
          <button>Let's Play</button>
        </form>
      </div>
    )
  }
}

export default PlayerSelect
