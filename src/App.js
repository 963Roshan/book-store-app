import { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import NotFound from './components/NotFound'
import CartContext from './Context/CartContext'

class App extends Component {
  state = {
    cartList: [],
  }

  addToCart = book => {
    const { cartList } = this.state
    const isAlreadyInCart = cartList.some(item => item.isbn13 === book.isbn13)
    if (!isAlreadyInCart) {
      this.setState({ cartList: [...cartList, book] })
    }
  }

  removeFromCart = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(item => item.isbn13 !== id),
    }))
  }

  clearCart = () => {
    this.setState({ cartList: [] })
  }

  render() {
    const { cartList } = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          clearCart: this.clearCart,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:isbn13" component={BookDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
