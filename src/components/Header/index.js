import { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaShoppingCart } from 'react-icons/fa';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="toolbar-container">
        <div className="logo">📚 BookStore</div>

        <div className="icon-links">
          <Link to="/" className="icon"><FaHome title="Home" /></Link>
          <Link to="/books" className="icon"><FaBook title="Books" /></Link>
          <Link to="/cart" className="icon"><FaShoppingCart title="Cart" /></Link>
        </div>
      </div>
    );
  }
}

export default Header;
