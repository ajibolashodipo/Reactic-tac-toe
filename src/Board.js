import React, { Component } from "react"
import "./Board.css"

class Board extends Component {
  state = {
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    seven: null,
    eight: null,
    nine: null,
    clickCount: 0
  }

  handleClick = (e) => {
    let { deck } = this.props
    let { clickCount } = this.state
    // console.log(clickCount)
    this.setState(
      {
        clickCount: clickCount + 1,
        [e.target.id]: deck[clickCount]
      },
      (e) => {
        // console.log(clickCount)
        console.log(this.state)
      }
    )
  }
  render() {
    // destructuring
    let { deck } = this.props
    let { clickCount } = this.state

    return (
      <div>
        <div className="grid-container">
          <div id="one" className="item item-1" onClick={this.handleClick}>
            {this.state.one}
          </div>
          <div id="two" className="item item-2" onClick={this.handleClick}>
            {this.state.two}
          </div>
          <div id="three" className="item item-3" onClick={this.handleClick}>
            {this.state.three}
          </div>
          <div id="four" className="item item-4" onClick={this.handleClick}>
            {this.state.four}
          </div>
          <div id="five" className="item item-5" onClick={this.handleClick}>
            {this.state.five}
          </div>
          <div id="six" className="item item-6" onClick={this.handleClick}>
            {this.state.six}
          </div>
          <div id="seven" className="item item-7" onClick={this.handleClick}>
            {this.state.seven}
          </div>
          <div id="eight" className="item item-8" onClick={this.handleClick}>
            {this.state.eight}
          </div>
          <div id="nine" className="item item-9" onClick={this.handleClick}>
            {this.state.nine}
          </div>
        </div>
      </div>
    )
  }
}

export default Board
