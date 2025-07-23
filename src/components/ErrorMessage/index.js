import { Component } from "react"
import "./index.css"

class ErrorMessage extends Component {
  handleRetry = () => {
    window.location.reload()
  }

  render() {
    return (
      <div className="error-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="error"
          className="error-img"
        />
        <h1 className="error-title">Something went wrong</h1>
        <p className="error-text">We are facing some issues. Please try again.</p>
        <button className="retry-btn" onClick={this.handleRetry}>
          Retry
        </button>
      </div>
    )
  }
}

export default ErrorMessage
