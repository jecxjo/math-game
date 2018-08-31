import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { snakeCase } from 'lodash'

import './styles/Tile.css'

class Tile extends Component {
  render() {
    let { tileType, value, isValid, isInvalid, isTouched } = this.props
    isValid = isValid || false
    isInvalid = isInvalid || false

    let className = `Tile ${snakeCase(tileType)}`

    if (tileType !== 'Blank') {
      if (isValid) {
        className = `${className} is_valid`
      } else if (isInvalid) {
        className = `${className} is_invalid`
      } else if (isTouched) {
        className = `${className} is_touched`
      }
    }

    return (
      <div className={className}>{value}</div>
    )
  }
}

Tile.propTypes = {
  tileType: PropTypes.oneOf(['Blank', 'Number', 'Operator', 'SolutionVertical', 'SolutionHorizontal']).isRequired,
  value: PropTypes.string,
  isValid: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isTouched: PropTypes.bool
}

export default Tile
