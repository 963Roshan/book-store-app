import { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaShoppingCart } from 'react-icons/fa';
import './index.css';

class Header extends Component {
  render() {
    return (
      <nav className="header-container">
        <Link to="/" className="logo-link">
  <div className="logo">
    <div className="logo-box">B</div>
    <div className="logo-name">BookStore</div>
  </div>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/books" className="nav-link">
              <FaBook className="nav-icon" />
              <span className="nav-text">Books</span>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              <FaShoppingCart className="nav-icon" />
              <span className="nav-text">Cart</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
