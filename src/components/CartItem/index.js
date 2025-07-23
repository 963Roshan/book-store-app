// components/CartItem/index.js
import { Component } from "react"
import CartContext from "../../Context/CartContext"
import "./index.css"

class CartItem extends Component {
  render() {
    const { item } = this.props
    const { image, title, subtitle, price, isbn13 } = item

    return (
      <CartContext.Consumer>
        {({ removeFromCart }) => (
          <div className="cart-item">
            <img src={image} alt={title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{title}</h3>
              <p className="subtitle">{subtitle}</p>
              <p className="price">{price}</p>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(isbn13)}
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </CartContext.Consumer>
    )
  }
}

export default CartItem
