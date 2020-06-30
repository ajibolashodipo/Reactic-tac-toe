import React, { Component } from "react"

class PlayerSelect extends Component {
  state = {
    playerOneChar: "",
    playerTwoChar: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.registerPlayer(this.state)
    this.props.loadDeck(this.state.playerOneChar, this.state.playerTwoChar)
    this.setState({
      playerOneChar: "",
      playerTwoChar: ""
    })
  }
  render() {
    return (
      <div>
        <p>Choose your character</p>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="playerOneChar">Player 1:</label>
          <input
            type="text"
            id="playerOneChar"
            onChange={this.handleChange}
            value={this.state.playerOneChar}
          />
          <label htmlFor="playerTwoChar">Player 2:</label>
          <input
            type="text"
            id="playerTwoChar"
            onChange={this.handleChange}
            value={this.state.playerTwoChar}
          />
          <button>Let's Play</button>
        </form>
      </div>
    )
  }
}

export default PlayerSelect
