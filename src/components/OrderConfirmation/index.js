// components/OrderConfirmation/index.js
import { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class OrderConfirmation extends Component {
  render() {
    return (
      <div className="order-confirmation-container">
        <h1 className="success-heading">🎉 Order Placed Successfully!</h1>
        <p className="success-text">Thank you for shopping with us.</p>
        <Link to="/" className="home-link">
          Go to Home
        </Link>
      </div>
    )
  }
}

export default OrderConfirmation
