// components/Loader/index.js
import React, { Component } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import './index.css'

class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
        <ClipLoader
          size={60}
          color="#000000"
          loading={true}
        />
      </div>
    )
  }
}

export default Loader
