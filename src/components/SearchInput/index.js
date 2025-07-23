import React, { Component } from 'react'
import './index.css'

class SearchInput extends Component {
  render() {
    const { searchInputValue, onChangeSearchInput } = this.props

    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search by title or author"
          value={searchInputValue}
          onChange={onChangeSearchInput}
        />
        <span className="search-icon">🔍</span>
      </div>
    )
  }
}

export default SearchInput
