import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class BookItem extends Component {
  render() {
    const { bookData } = this.props
    const { title, subtitle, price, image, isbn13 } = bookData

    return (
      <li className="book-card">
        <Link to={`/books/${isbn13}`} className="book-link">
          <img src={image} alt={title} className="book-image" />
          <h3 className="book-title">{title}</h3>
          <p className="book-subtitle">{subtitle}</p>
          <p className="book-price">{price}</p>
        </Link>
      </li>
    )
  }
}

export default BookItem
