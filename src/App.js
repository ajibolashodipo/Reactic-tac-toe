import React, { Component } from "react"
import "./App.css"
import PlayerSelect from "./PlayerSelect"
import Board from "./Board"
import ScoreBoard from "./ScoreBoard"
import Footer from "./Footer"

class App extends Component {
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
    keeperTwo: 0,
    gridColorX: "#edeff2",
    gridColorO: "#e6ae73",
    playerResultMessage: "",
    playerOneChar: "x",
    playerTwoChar: "o",
    deck: ["x", "o", "x", "o", "x", "o", "x", "o", "x"],

    playerOneTally:
      JSON.parse(window.localStorage.getItem("playerOneLocalStorage")) || 0,
    playerTwoTally:
      JSON.parse(window.localStorage.getItem("playerTwoLocalStorage")) || 0,
    playerDrawTally:
      JSON.parse(window.localStorage.getItem("playerDrawLocalStorage")) || 0
  }

  //assigns user-selected characters to state
  registerPlayer = (data) => {
    const extractKey = Object.keys(data)
    this.setState({
      [extractKey[0]]: data[extractKey[0]],
      [extractKey[1]]: data[extractKey[1]]
    })
  }

  //loads the deck
  loadDeck = (char1, char2) => {
    const myArray = []
    for (let i = 0; i < 9; i++) {
      if (!(i % 2)) {
        myArray.push(char1)
      } else {
        myArray.push(char2)
      }
    }
    this.setState({ ...this.state, deck: myArray }, () => {
      return myArray
    })
  }

  //handles click on board
  handleClick = (e) => {
    let { deck } = this.state
    let { clickCount } = this.state

    //disables boxes after first click
    if (this.state[e.target.id].clicked) {
      return
    }
    //stops clicks after a win has been confirmed
    if (this.state.keeperOne || this.state.keeperTwo) {
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
      let playerData = {
        gridID: e.target.id,
        gridChar: deck[clickCount]
      }
      const playerOne = [...this.state.playerOne, playerData]
      this.setState({ playerOne: playerOne })
    } else {
      let playerData = {
        gridID: e.target.id,
        gridChar: deck[clickCount]
      }
      const playerTwo = [...this.state.playerTwo, playerData]
      this.setState({ playerTwo: playerTwo })
    }
  }

  //player one win algorithm
  checkWinnerPlayerOne = (waysToWin, plOneGridEl) => {
    for (const permutation of waysToWin) {
      if (
        plOneGridEl.includes(permutation[0]) &&
        plOneGridEl.includes(permutation[1]) &&
        plOneGridEl.includes(permutation[2])
      ) {
        //to control eventual return
        this.playerOneWins({ keeperOne: this.state.keeperOne + 1 })
        return true
      }
    }

    return false
  }

  //player two win algorithm
  checkWinnerPlayerTwo = (waysToWin, plOneGridEl) => {
    for (const permutation of waysToWin) {
      if (
        plOneGridEl.includes(permutation[0]) &&
        plOneGridEl.includes(permutation[1]) &&
        plOneGridEl.includes(permutation[2])
      ) {
        //to control evental return
        this.playerTwoWins({ keeperTwo: this.state.keeperTwo + 1 })
        return true
      }
    }
    return false
  }

  //the tie/draw algorithm
  checkTie = (plOne, plTwo) => {
    if (plOne === false && plTwo === false) {
      this.updateScoreBoard("DRAW")
      this.playerNoWins({
        playerResultMessage: "A tie. No victor. No vanquished"
      })
    }
  }

  //updates scoreboard
  updateScoreBoard = (scoreChar) => {
    if (scoreChar === this.state.playerOneChar) {
      this.setState(
        (currentState) => ({
          playerOneTally: currentState.playerOneTally + 1
        }),
        () => {
          let currentTally = this.state.playerOneTally

          window.localStorage.setItem(
            "playerOneLocalStorage",
            JSON.stringify(currentTally)
          )
        }
      )
    }
    if (scoreChar === this.state.playerTwoChar) {
      this.setState(
        (currentState) => ({
          playerTwoTally: currentState.playerTwoTally + 1
        }),
        () => {
          let currentTally = this.state.playerTwoTally

          window.localStorage.setItem(
            "playerTwoLocalStorage",
            JSON.stringify(currentTally)
          )
        }
      )
    }
    if (scoreChar === "DRAW") {
      this.setState(
        (currentState) => ({
          playerDrawTally: currentState.playerDrawTally + 1
        }),
        () => {
          let currentTally = this.state.playerDrawTally

          window.localStorage.setItem(
            "playerDrawLocalStorage",
            JSON.stringify(currentTally)
          )
        }
      )
    }
  }

  //clears the scoreboard by resetting the state
  clearRecord = () => {
    window.localStorage.clear()
    this.setState({ playerOneTally: 0, playerTwoTally: 0, playerDrawTally: 0 })
  }

  //actions upon player1 winning
  playerOneWins = (data) => {
    const { playerOneChar } = this.state
    const extractKey = Object.keys(data)
    this.setState(
      {
        [extractKey[0]]: data[extractKey[0]]
      },
      () => {
        this.updateScoreBoard(playerOneChar)

        this.setState({
          playerResultMessage: `Player1 (${playerOneChar}) wins this round. `
        })
      }
    )
  }

  //actions upon player2 winning
  playerTwoWins = (data) => {
    const { playerTwoChar } = this.state
    const extractKey = Object.keys(data)
    this.setState(
      {
        [extractKey[0]]: data[extractKey[0]]
      },
      () => {
        this.updateScoreBoard(playerTwoChar)

        this.setState({
          playerResultMessage: `Player2 (${playerTwoChar}) wins this round. `
        })
      }
    )
  }

  //actions upon no wins
  playerNoWins = (data) => {
    const extractKey = Object.keys(data)
    this.setState({
      [extractKey[0]]: data[extractKey[0]]
    })
  }

  //clears the board by resetting state
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
      keeperTwo: 0,
      playerResultMessage: ""
    })
  }

  //handles button click on pop up after win or draw
  handleModal = (data) => {
    const extractKey = Object.keys(data)
    this.setState({
      [extractKey[0]]: data[extractKey[0]]
    })
  }

  //handles button click on pop up after win or draw
  handleReload = (data) => {
    const extractKey = Object.keys(data)
    this.setState({
      [extractKey[0]]: data[extractKey[0]]
    })
    this.clearBoard()
  }

  //maps data from object to array
  mapPlayertoArray = (player) => {
    //map out to another array the grid element names
    const plOneGridEl = player.map((el) => {
      return el.gridID
    })
    return plOneGridEl
  }

  render() {
    return (
      <div className="body-container">
        <div className="main-container">
          <h1>Tic Tac Choose</h1>
          <p className="tagline">Embrace the freedom. Choose your characters</p>
          <PlayerSelect
            registerPlayer={this.registerPlayer}
            loadDeck={this.loadDeck}
            state={this.state}
            clearBoard={this.clearBoard}
          />

          <div className="board-layout">
            <Board
              deck={this.state.deck}
              state={this.state}
              updateScoreBoard={this.updateScoreBoard}
              clearBoard={this.clearBoard}
              handleModal={this.handleModal}
              handleReload={this.handleReload}
              handleClick={this.handleClick}
            />
            <ScoreBoard state={this.state} clearRecord={this.clearRecord} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
