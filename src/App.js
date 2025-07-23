import { Component } from 'react';
import { Route, Switch ,Redirect} from 'react-router-dom';
import Home  from  "./components/Home";
import BookList from "./components/BookList"
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
class App extends Component {
  render() {
    return (
      <>
      
        <Switch>
          
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:isbn13" component={BookDetails}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/not-found" component = {NotFound}/>
          <Redirect to="/not-found"/>
          
        </Switch>
    </>
    );
  }
}

export default App;
