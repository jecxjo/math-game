import React, { Component } from 'react'
import Board from './components/Board'
import Tile from './components/Tile'
import ListGenerator from './ListGenerator'
import MathOps from './MathOps'

import './styles/App.css'

class App extends Component {
  constructor() {
    super()
    let numListGen = new ListGenerator([1,2,3,4,5,6,7,8,9])
    let numList = numListGen.all()
    let opListGen = new ListGenerator([
      '+', '+', '+', '+', '+', '+',
      '-', '-', '-', '-', '-', '-',
      '*', '*', '*', '*', '*', '*'
    ])
    let opList = opListGen.all().splice(0, 13)

    this.tiles = [
      [
        (<Tile tileType='Number' value={ numList[0] } isValid={true} />),
        (<Tile tileType='Operator' value={ opList[0] } isValid={true} />),
        (<Tile tileType='Number' value={ numList[1] } isValid={true} />),
        (<Tile tileType='Operator' value={ opList[1] } isValid={true} />),
        (<Tile tileType='Number' value={ numList[2] } isValid={true} />),
        (<Tile tileType='SolutionHorizontal' value={ MathOps.doMath(numList[0], opList[0], numList[1], opList[1], numList[2]) } isValid={true} />),
      ],
      [
        (<Tile tileType='Operator' value={ opList[3] } />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='Operator' value={ opList[4] } />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='Operator' value={ opList[5] } />),
        (<Tile tileType='Blank' />),
      ],
      [
        (<Tile tileType='Number' value={ numList[3] } />),
        (<Tile tileType='Operator' value={ opList[6] } />),
        (<Tile tileType='Number' value={ numList[4] } />),
        (<Tile tileType='Operator' value={ opList[7] } />),
        (<Tile tileType='Number' value={ numList[5] } />),
        (<Tile tileType='SolutionHorizontal' value={ MathOps.doMath(numList[3], opList[6], numList[4], opList[7], numList[5]) } isValid={true} />),
      ],
      [
        (<Tile tileType='Operator' value={ opList[8] } />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='Operator' value={ opList[9] } />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='Operator' value={ opList[10] } />),
        (<Tile tileType='Blank' />),
      ],
      [
        (<Tile tileType='Number' value={ numList[6] } />),
        (<Tile tileType='Operator' value={ opList[11] } />),
        (<Tile tileType='Number' value={ numList[7] } />),
        (<Tile tileType='Operator' value={ opList[12] } />),
        (<Tile tileType='Number' value={ numList[8] } />),
        (<Tile tileType='SolutionHorizontal' value={ MathOps.doMath(numList[6], opList[11], numList[7], opList[12], numList[8]) } isValid={true} />),
      ],
      [
        (<Tile tileType='SolutionVertical' value={ MathOps.doMath(numList[0], opList[3], numList[3], opList[8], numList[6]) } isValid={true} />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='SolutionVertical' value={ MathOps.doMath(numList[1], opList[4], numList[4], opList[9], numList[7]) } isValid={true} />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='SolutionVertical' value={ MathOps.doMath(numList[2], opList[5], numList[5], opList[10], numList[8]) } isValid={true} />),
        (<Tile tileType='Blank' />),
      ],
    ]

  }

  render() {
    return (
      <div className="App">
        <Board tiles={this.tiles} />
      </div>
    );
  }
}

export default App;
