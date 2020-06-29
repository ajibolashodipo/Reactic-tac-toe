import React, { Component } from "react"
import "./Board.css"

class Board extends Component {
  state = {
    zero: { value: null, clicked: false },
    one: { value: null, clicked: false },
    two: { value: null, clicked: false },
    three: { value: null, clicked: false },
    four: { value: null, clicked: false },
    five: { value: null, clicked: false },
    six: { value: null, clicked: false },
    seven: { value: null, clicked: false },
    eight: { value: null, clicked: false },
    clickCount: 0,
    playerOne: [],
    playerTwo: [],
    waysToWin: [
      ["zero", "one", "two"],
      ["three", "four", "five"],
      ["six", "seven", "eight"],
      ["zero", "three", "six"],
      ["one", "four", "seven"],
      ["two", "five", "eight"],
      ["zero", "four", "eight"],
      ["two", "four", "six"]
    ]
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
        // console.log(this.state)

        // map player one to array
        let jb = mapPlayertoArray(this.state.playerOne)
        //check if player one wins and store its return value
        let returnPlayerOne = checkWinnerPlayerOne(this.state.waysToWin, jb)
        // map player two to array
        let show = mapPlayertoArray(this.state.playerTwo)
        //check if player two wins and store its return value
        let returnPlayerTwo = checkWinnerPlayerTwo(this.state.waysToWin, show)

        //
        //check for ties
        // console.log(returnPlayerTwo)
        checkTie(returnPlayerOne, returnPlayerTwo)
        console.log(checkWinnerPlayerOne(this.state.waysToWin, jb))
      }
    )

    //use counter to separate them
    if (clickCount % 2 === 0) {
      let playerData = { gridID: e.target.id, gridChar: deck[clickCount] }
      const playerOne = [...this.state.playerOne, playerData]
      this.setState({ playerOne: playerOne })
    } else {
      let playerData = { gridID: e.target.id, gridChar: deck[clickCount] }
      const playerTwo = [...this.state.playerTwo, playerData]
      this.setState({ playerTwo: playerTwo })
    }

    //player one winning algo
    function mapPlayertoArray(player) {
      //map out to another array the grid element names
      const plOneGridEl = player.map((el) => {
        return el.gridID
      })
      return plOneGridEl
    }

    function checkWinnerPlayerOne(waysToWin, plOneGridEl) {
      waysToWin.forEach((perm) => {
        if (
          plOneGridEl.includes(perm[0]) &&
          plOneGridEl.includes(perm[1]) &&
          plOneGridEl.includes(perm[2])
        ) {
          console.log("x wins")
          return true
        }
        return false
      })
    }
    function checkWinnerPlayerTwo(waysToWin, plOneGridEl) {
      waysToWin.forEach((perm) => {
        if (
          plOneGridEl.includes(perm[0]) &&
          plOneGridEl.includes(perm[1]) &&
          plOneGridEl.includes(perm[2])
        ) {
          console.log("o wins")
          return true
        }
        return false
      })
    }
    function checkTie(plOne, plTwo) {
      // console.log(waysToWin)
      if (plOne === false && plTwo === false) {
        console.log("draw")
      }
    }
  }
  render() {
    // destructuring
    // let { deck } = this.props
    // let { clickCount } = this.state

    return (
      <div>
        <div className="grid-container">
          <div id="zero" className="item item-0" onClick={this.handleClick}>
            {this.state.zero.value}
          </div>
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
        </div>
      </div>
    )
  }
}

export default Board
