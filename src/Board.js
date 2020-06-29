import React, { Component } from "react"
import "./Board.css"

class Board extends Component {
  state = {
    one: { value: null, clicked: false },
    two: { value: null, clicked: false },
    three: { value: null, clicked: false },
    four: { value: null, clicked: false },
    five: { value: null, clicked: false },
    six: { value: null, clicked: false },
    seven: { value: null, clicked: false },
    eight: { value: null, clicked: false },
    nine: { value: null, clicked: false },
    clickCount: 0
  }

  handleClick = (e) => {
    let { deck } = this.props
    let { clickCount } = this.state

    //disables boxes after first click
    if (this.state[e.target.id].clicked) {
      return
    }

    this.setState(
      {
        ...this.state,
        clickCount: clickCount + 1,
        [e.target.id]: { value: deck[clickCount], clicked: true }
      },
      (e) => {
        // console.log(clickCount)
        console.log(clickCount)
        console.log(this.state)
        console.log(deck)
      }
    )
  }
  render() {
    // destructuring
    // let { deck } = this.props
    // let { clickCount } = this.state

    return (
      <div>
        <div className="grid-container">
          <div id="one" className="item item-1" onClick={this.handleClick}>
            {this.state.one.value}
          </div>
          <div id="two" className="item item-2" onClick={this.handleClick}>
            {this.state.two.value}
          </div>
          <div id="three" className="item item-3" onClick={this.handleClick}>
            {this.state.three.value}
          </div>
          <div id="four" className="item item-4" onClick={this.handleClick}>
            {this.state.four.value}
          </div>
          <div id="five" className="item item-5" onClick={this.handleClick}>
            {this.state.five.value}
          </div>
          <div id="six" className="item item-6" onClick={this.handleClick}>
            {this.state.six.value}
          </div>
          <div id="seven" className="item item-7" onClick={this.handleClick}>
            {this.state.seven.value}
          </div>
          <div id="eight" className="item item-8" onClick={this.handleClick}>
            {this.state.eight.value}
          </div>
          <div id="nine" className="item item-9" onClick={this.handleClick}>
            {this.state.nine.value}
          </div>
        </div>
      </div>
    )
  }
}

export default Board
