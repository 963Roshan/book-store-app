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
          <Link to="/" className="icon-link">
            <FaHome className="d-xl-none" />
            <span className="d-none d-xl-inline">Home</span>
          </Link>

          <Link to="/books" className="icon-link">
            <FaBook className="d-xl-none" />
            <span className="d-none d-xl-inline">Books</span>
          </Link>

          <Link to="/cart" className="icon-link">
            <FaShoppingCart className="d-xl-none" />
            <span className="d-none d-xl-inline">Cart</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
