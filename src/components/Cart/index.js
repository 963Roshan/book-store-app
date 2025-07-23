// components/Cart/index.js
import { Component } from "react"
import CartItem from "../CartItem"
import CartContext from "../../Context/CartContext"
import "./index.css"

class Cart extends Component {
  renderCartItems = (cartList, removeFromCart) =>
    cartList.map(item => (
      <CartItem key={item.isbn13} item={item} />
    ))

  render() {
    return (
      <CartContext.Consumer>
        {({ cartList }) => {
          const total = cartList.reduce((sum, item) => {
            const price = parseFloat(item.price.replace("$", "")) || 0
            return sum + price
          }, 0)

          return (
            <div className="cart-page">
              <div className="cart-header">Cart</div>

              <div className="cart-body">
                <div className="cart-left">
                  {cartList.length > 0 ? (
                    this.renderCartItems(cartList)
                  ) : (
                    <p className="empty-msg">Your cart is empty</p>
                  )}
                </div>

                <div className="cart-right">
                  <h3>Order Summary</h3>
                  <p>Total Items: {cartList.length}</p>
                  <p>Total Price: ${total.toFixed(2)}</p>
                  <button className="checkout-btn">Checkout</button>
                </div>
              </div>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
