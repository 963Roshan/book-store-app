import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './index.css'

class PriceRange extends Component {
  render() {
    const { priceRangeValue, onChangePrice } = this.props

    return (
      <div className="price-range-container">
        <label className="price-label">Filter by Price</label>
        <Slider
          min={0}
          max={100}
          step={1}
          value={priceRangeValue}
          onChange={onChangePrice}
        />
        <p className="price-value">Up to ${priceRangeValue}</p>
      </div>
    )
  }
}

export default PriceRange
