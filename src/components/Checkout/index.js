// components/Checkout/index.js
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header'
import CartContext from '../../Context/CartContext'
import UserDetailsForm from '../UserDetailsForm'
import './index.css'

class Checkout extends Component {
  handleBack = () => {
    const { history } = this.props
    history.goBack()
  }

  render() {
    return (
      <CartContext.Consumer>
        {({ cartList }) => (
          <>
            <Header />
            <div className="checkout-container">
              <button className="back-button" onClick={this.handleBack}>
                ← Back
              </button>
              <UserDetailsForm cartList={cartList} />
            </div>
          </>
        )}
      </CartContext.Consumer>
    )
  }
}

export default withRouter(Checkout)
