import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
})

export default CartContext
