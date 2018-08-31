import React, { Component } from 'react'
import Board from './components/Board'
import Tile from './components/Tile'

import './styles/App.css'

class App extends Component {
  constructor() {
    super()
    this.tiles = [
      [
        (<Tile tileType='Number' value='3' isValid={true} />),
        (<Tile tileType='Operator' value='x' isValid={true} />),
        (<Tile tileType='Number' value='4' isValid={true} />),
        (<Tile tileType='Operator' value='+' isValid={true} />),
        (<Tile tileType='Number' value='5' isValid={true} />),
        (<Tile tileType='SolutionHorizontal' value='60' isValid={true} />),
      ],
      [
        (<Tile tileType='Operator' value='x' />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='Operator' value='+' />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='Operator' value='+' />),
        (<Tile tileType='SolutionHorizontal' value='60' />),
      ],
      [
        (<Tile tileType='Number' value='3' />),
        (<Tile tileType='Operator' value='x' />),
        (<Tile tileType='Number' value='4' />),
        (<Tile tileType='Operator' value='+' />),
        (<Tile tileType='Number' value='5' />),
        (<Tile tileType='SolutionHorizontal' value='60' />),
      ],
      [
        (<Tile tileType='Operator' value='x' />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='Operator' value='+' />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='Operator' value='+' />),
        (<Tile tileType='SolutionHorizontal' value='60' />),
      ],
      [
        (<Tile tileType='Number' value='3' />),
        (<Tile tileType='Operator' value='x' />),
        (<Tile tileType='Number' value='4' />),
        (<Tile tileType='Operator' value='+' />),
        (<Tile tileType='Number' value='5' />),
        (<Tile tileType='SolutionHorizontal' value='60' />),
      ],
      [
        (<Tile tileType='SolutionVertical' value='60' />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='SolutionVertical' value='60' />),
        (<Tile tileType='Blank' />),
        (<Tile tileType='SolutionVertical' value='60' />),
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
