// components/UserDetailsForm/index.js
import { Component } from 'react'
import './index.css'

class UserDetailsForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    errorMsg: '',
    isFormSubmitted: false,
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, errorMsg: '' })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { firstName, lastName, email, mobile } = this.state
    if (!firstName || !lastName || !email || !mobile) {
      this.setState({ errorMsg: 'Please fill in all fields' })
    } else {
      this.setState({ isFormSubmitted: true }, () => {
        this.props.history.push('/order-confirmation')
      })
    }
  }

  renderSummary = () => {
    const { cartList } = this.props
    const totalItems = cartList.reduce((acc, item) => acc + (item.quantity || 1), 0)
    const totalPrice = cartList.reduce(
      (acc, item) => acc + (parseFloat(item.price.replace('$', '')) || 0) * (item.quantity || 1),
      0
    )

    return (
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    )
  }

  render() {
    const { firstName, lastName, email, mobile, errorMsg } = this.state

    return (
      <form className="user-form" onSubmit={this.handleSubmit}>
        <h2>Enter Your Details</h2>
        <input name="firstName" value={firstName} onChange={this.handleChange} placeholder="First Name" />
        <input name="lastName" value={lastName} onChange={this.handleChange} placeholder="Last Name" />
        <input name="email" value={email} onChange={this.handleChange} placeholder="Email" type="email" />
        <input name="mobile" value={mobile} onChange={this.handleChange} placeholder="Mobile No." type="tel" />
        {errorMsg && <p className="error">{errorMsg}</p>}

        {this.renderSummary()}

        <button type="submit" className="place-order-button">Place Order</button>
      </form>
    )
  }
}

export default UserDetailsForm
