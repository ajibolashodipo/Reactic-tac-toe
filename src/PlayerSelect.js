import React, { Component } from "react"
import "./PlayerSelect.css"

class PlayerSelect extends Component {
  state = {
    playerOneChar: this.props.state.playerOneChar,
    playerTwoChar: this.props.state.playerTwoChar,
    errorMessage: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const { playerOneChar, playerTwoChar } = this.state
    e.preventDefault()

    if (playerOneChar === "" || playerTwoChar === "") {
      console.log("one or more empty input field")
      this.setState(
        { errorMessage: "One or more empty input field(s)" },
        () => {
          setTimeout(() => {
            this.setState({ errorMessage: "" })
          }, 3000)
        }
      )

      return
    }
    if (playerOneChar === playerTwoChar) {
      console.log("characters cannot be identical")
      this.setState({ errorMessage: "Characters cannot be identical" }, () => {
        setTimeout(() => {
          this.setState({ errorMessage: "" })
        }, 3000)
      })
      return
    }

    this.props.loadDeck(this.state.playerOneChar, this.state.playerTwoChar)
    this.props.registerPlayer(this.state)
  }
  render() {
    return (
      <div className="player-select-form">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-flex-container">
            <div className="">
              <label className="form-label" htmlFor="playerOneChar">
                Player 1:
              </label>
              <input
                type="text"
                id="playerOneChar"
                className="player-input"
                onChange={this.handleChange}
                value={this.state.playerOneChar}
                maxlength="1"
              />
            </div>
            <div className="">
              <label className="form-label" htmlFor="playerTwoChar">
                Player 2:
              </label>
              <input
                type="text"
                id="playerTwoChar"
                className="player-input"
                onChange={this.handleChange}
                value={this.state.playerTwoChar}
                maxlength="1"
              />
            </div>
          </div>

          <button>Let's Play</button>
        </form>
        <p className={this.state.errorMessage ? "alert-paragraph" : ""}>
          {this.state.errorMessage}
        </p>
      </div>
    )
  }
}

export default PlayerSelect
