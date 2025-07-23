import { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import CartContext from "../../Context/CartContext"

class ProtectedRoute extends Component {
  render() {
    const { component: ComponentToRender, ...restProps } = this.props
    return (
      <CartContext.Consumer>
        {({ cartList }) => (
          <Route
            {...restProps}
            render={props =>
              cartList.length > 0 ? (
                <ComponentToRender {...props} />
              ) : (
                <Redirect to="/cart" />
              )
            }
          />
        )}
      </CartContext.Consumer>
    )
  }
}

export default ProtectedRoute
