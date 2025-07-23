import { Component } from "react"
import CartContext from "../../Context/CartContext"
import { FaPlus, FaMinus } from "react-icons/fa"
import "./index.css"

class CartItem extends Component {
  render() {
    const { item } = this.props
    const { image, title, subtitle, price, quantity, isbn13 } = item

    return (
      <CartContext.Consumer>
        {({ removeFromCart, increaseQuantity, decreaseQuantity }) => (
          <div className="cart-item">
            <button
              className="remove-icon"
              onClick={() => removeFromCart(isbn13)}
              title="Remove"
            >
              X
            </button>
            <div className="cart-item-body">
              <img src={image} alt={title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-title">{title}</h3>
                <p className="cart-subtitle">{subtitle}</p>
                <p className="cart-price">Price: {price}</p>
                <div className="quantity-container">
                  <button onClick={() => decreaseQuantity(isbn13)}>
                    <FaMinus />
                  </button>
                  <span className="qty-count">{quantity}</span>
                  <button onClick={() => increaseQuantity(isbn13)}>
                    <FaPlus />
                  </button>
                </div>
                <p className="total-price">
                  Total: ${(parseFloat(price.slice(1)) * quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}
      </CartContext.Consumer>
    )
  }
}

export default CartItem
