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
    ],
    keeperOne: 0,
    keeperTwo: 0
  }

  //maps data from object to array
  mapPlayertoArray = (player) => {
    //map out to another array the grid element names
    const plOneGridEl = player.map((el) => {
      return el.gridID
    })
    return plOneGridEl
  }

  //player one win algorithm
  checkWinnerPlayerOne = (waysToWin, plOneGridEl) => {
    const { playerOneChar } = this.props.state
    for (const permutation of waysToWin) {
      if (
        plOneGridEl.includes(permutation[0]) &&
        plOneGridEl.includes(permutation[1]) &&
        plOneGridEl.includes(permutation[2])
      ) {
        //to control eventual return
        this.setState(
          (currentState) => ({
            keeperOne: currentState.keeperOne + 1
          }),
          () => {
            this.props.updateScoreBoard(playerOneChar)
            console.log(`${playerOneChar} wins`)
          }
        )
        return true
      }
    }

    return false
  }

  //player two win algorithm
  checkWinnerPlayerTwo = (waysToWin, plOneGridEl) => {
    const { playerTwoChar } = this.props.state
    for (const permutation of waysToWin) {
      if (
        plOneGridEl.includes(permutation[0]) &&
        plOneGridEl.includes(permutation[1]) &&
        plOneGridEl.includes(permutation[2])
      ) {
        //to control evental return
        this.setState(
          (currentState) => ({
            keeperTwo: currentState.keeperTwo + 1
          }),
          () => {
            this.props.updateScoreBoard(playerTwoChar)
            console.log(`${playerTwoChar} wins`)
          }
        )
        return true
      }
    }

    return false
  }

  //the tie/draw algorithm
  checkTie = (plOne, plTwo) => {
    if (plOne === false && plTwo === false) {
      this.props.updateScoreBoard("DRAW")
      console.log("draw")
    }
  }

  clearBoard = () => {
    this.setState({
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
      keeperOne: 0,
      keeperTwo: 0
    })
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
        // map player one to array
        let jb = this.mapPlayertoArray(this.state.playerOne)
        let show = this.mapPlayertoArray(this.state.playerTwo)

        //check if player one/two wins and store their return value
        let returnPlayerOne = this.checkWinnerPlayerOne(
          this.state.waysToWin,
          jb
        )
        let returnPlayerTwo = this.checkWinnerPlayerTwo(
          this.state.waysToWin,
          show
        )

        console.log(returnPlayerOne, returnPlayerTwo)

        //check for tie
        if (
          this.state.clickCount === 9 &&
          returnPlayerOne === false &&
          returnPlayerTwo === false
        )
          this.checkTie(returnPlayerOne, returnPlayerTwo)
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
  }
  render() {
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
        <button onClick={this.clearBoard}>Clear Board</button>
      </div>
    )
  }
}

export default Board
