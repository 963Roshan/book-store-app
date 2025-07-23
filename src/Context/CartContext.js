import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
})

export default CartContext
