import React, { Component } from "react"
import "./Board.css"

class Board extends Component {
  render() {
    const xColor = this.props.state.gridColorX
    const oColor = this.props.state.gridColorO

    return (
      <div>
        <div className="Board grid-container">
          <div
            id="zero"
            style={{
              color:
                this.props.state.playerOneChar === this.props.state.zero.value
                  ? xColor
                  : oColor
            }}
            className="item item-0"
            onClick={(e) => this.props.handleClick(e)}
          >
            {this.props.state.zero.value}
          </div>
          <div
            id="one"
            style={{
              color:
                this.props.state.playerOneChar === this.props.state.one.value
                  ? xColor
                  : oColor
            }}
            className="item item-1"
            onClick={(e) => this.props.handleClick(e)}
          >
            {this.props.state.one.value}
          </div>
          <div
            id="two"
            style={{
              color:
                this.props.state.playerOneChar === this.props.state.two.value
                  ? xColor
                  : oColor
            }}
            className="item item-2"
            onClick={(e) => this.props.handleClick(e)}
          >
            {this.props.state.two.value}
          </div>
          <div
            style={{
              color:
                this.props.state.playerOneChar === this.props.state.three.value
                  ? xColor
                  : oColor
            }}
            id="three"
            className="item item-3"
            onClick={(e) => this.props.handleClick(e)}
          >
            {this.props.state.three.value}
          </div>
          <div
            id="four"
            style={{
              color:
                this.props.state.playerOneChar === this.props.state.four.value
                  ? xColor
                  : oColor
            }}
            className="item item-4"
            onClick={(e) => this.props.handleClick(e)}
          >
            {this.props.state.four.value}
          </div>
          <div
            id="five"
            style={{
              color:
                this.props.state.playerOneChar === this.props.state.five.value
                  ? xColor
                  : oColor
            }}
            className="item item-5"
            onClick={(e) => this.props.handleClick(e)}
          >
            {this.props.state.five.value}
          </div>
          <div
            id="six"
            style={{
              color:
                this.props.state.playerOneChar === this.props.state.six.value
                  ? xColor
                  : oColor
            }}
            className="item item-6"
            onClick={(e) => this.props.handleClick(e)}
          >
            {this.props.state.six.value}
          </div>
          <div
            id="seven"
            style={{
              color:
                this.props.state.playerOneChar === this.props.state.seven.value
                  ? xColor
                  : oColor
            }}
            className="item item-7"
            onClick={(e) => this.props.handleClick(e)}
          >
            {this.props.state.seven.value}
          </div>
          <div
            id="eight"
            style={{
              color:
                this.props.state.playerOneChar === this.props.state.eight.value
                  ? xColor
                  : oColor
            }}
            className="item item-8"
            onClick={(e) => this.props.handleClick(e)}
          >
            {this.props.state.eight.value}
          </div>
        </div>
        <button onClick={this.props.clearBoard}>Clear Board</button>

        <div
          className={
            this.props.state.playerResultMessage
              ? "conclusion-board animate"
              : "conclusion-board"
          }
        >
          <h3>Result</h3>

          <p>{this.props.state.playerResultMessage}</p>
          <div className="button-container">
            <button
              onClick={() =>
                this.props.handleModal({ playerResultMessage: "" })
              }
            >
              Close
            </button>
            <button
              onClick={() =>
                this.props.handleReload({ playerResultMessage: "" })
              }
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Board
