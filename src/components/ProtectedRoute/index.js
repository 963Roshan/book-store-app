import { Route, Redirect } from 'react-router-dom'

// ProtectedRoute component
const ProtectedRoute = ({ component: Component, cartList, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      cartList.length > 0 ? (
        <Component {...props} />
      ) : (
        <Redirect to="/cart" />
      )
    }
  />
)
export default ProtectedRoute;