import { Component } from "react"
import "./index.css"

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-container">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="not found"
          className="not-found-image"
        />
        <h1 className="not-found-heading">Oops! Page Not Found</h1>
        <p className="not-found-text">We can't seem to find the page you're looking for.</p>
      </div>
    )
  }
}

export default NotFound
