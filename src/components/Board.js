import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tile from './Tile'

import './styles/Board.css'

class Board extends Component {
  render() {
    return (
      <div className='Board'>
        <div className='Row'>{this.props.tiles[0]}</div>
        <div className='Row'>{this.props.tiles[1]}</div>
        <div className='Row'>{this.props.tiles[2]}</div>
        <div className='Row'>{this.props.tiles[3]}</div>
        <div className='Row'>{this.props.tiles[4]}</div>
        <div className='Row'>{this.props.tiles[5]}</div>
      </div>
    )
  }
}

Board.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.arrayOf(Tile)).isRequired
}

export default Board
