import { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import NotFound from './components/NotFound'
import CartContext from './Context/CartContext'
import OrderConfirmation from './components/OrderConfirmation'
import ProtectedRoute from './components/ProtectedRoute'
class App extends Component {
  state = {
    cartList: [],
  }

  componentDidMount() {
    const savedCart = localStorage.getItem('cartList')
    if (savedCart) {
      this.setState({ cartList: JSON.parse(savedCart) })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartList !== this.state.cartList) {
      localStorage.setItem('cartList', JSON.stringify(this.state.cartList))
    }
  }

  addToCart = book => {
    this.setState(prevState => {
      const existingItem = prevState.cartList.find(item => item.isbn13 === book.isbn13)
      if (existingItem) {
        return {
          cartList: prevState.cartList.map(item =>
            item.isbn13 === book.isbn13
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      } else {
        return {
          cartList: [...prevState.cartList, { ...book, quantity: 1 }],
        }
      }
    })
  }

  removeFromCart = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(item => item.isbn13 !== id),
    }))
  }

  clearCart = () => {
    this.setState({ cartList: [] })
  }

  increaseQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(item =>
        item.isbn13 === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }))
  }

  decreaseQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList
        .map(item =>
          item.isbn13 === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0),
    }))
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
          increaseQuantity: this.increaseQuantity,
          decreaseQuantity: this.decreaseQuantity,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:isbn13" component={BookDetails} />
          <Route exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/checkout" component={Checkout} />
          <ProtectedRoute exact path="/order-confirmation" component={OrderConfirmation} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
