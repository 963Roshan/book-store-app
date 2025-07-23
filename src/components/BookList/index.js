import React, { Component } from 'react'
import Header from '../Header'
import SearchInput from '../SearchInput'
import PriceRange from '../PriceRange'
import BookItem from '../BookItem'
import Loader from '../Loader'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class BookList extends Component {
  state = {
    searchInputValue: '',
    priceRangeValue: 100,
    booksList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = async (query = '') => {
    this.setState({ apiStatus: apiStatusConstants.inProgress })

    const url = query.trim()
      ? `https://api.itbook.store/1.0/search/${query}`
      : 'https://api.itbook.store/1.0/new'

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (response.ok) {
        const books = data.books || []
        const updatedBooks = books.map(book => ({
          title: book.title,
          subtitle: book.subtitle,
          isbn13: book.isbn13,
          price: book.price,
          image: book.image,
        }))

        this.setState({
          booksList: updatedBooks,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({ apiStatus: apiStatusConstants.failure })
      }
    } catch {
      this.setState({ apiStatus: apiStatusConstants.failure })
    }
  }

  handleSearchChange = event => {
    const searchInputValue = event.target.value
    this.setState({ searchInputValue })

    if (searchInputValue.trim() === '') {
      this.fetchBooks() // Fetch all books again
    } else {
      this.fetchBooks(searchInputValue)
    }
  }

  handlePriceChange = value => {
    this.setState({ priceRangeValue: value })
  }

  getFilteredBooks = () => {
    const { booksList, priceRangeValue } = this.state
    return booksList.filter(book => {
      const numericPrice = parseFloat(book.price.replace('$', ''))
      return numericPrice <= priceRangeValue
    })
  }

  renderBooksView = () => {
    const filteredBooks = this.getFilteredBooks()

    return filteredBooks.length > 0 ? (
      <ul className="book-items-container">
        {filteredBooks.map(book => (
          <BookItem key={book.isbn13} bookData={book} />
        ))}
      </ul>
    ) : (
      <div className="no-books">
        <p>No books found.</p>
      </div>
    )
  }

  renderLoaderView = () => <Loader />

  renderFailureView = () => (
    <div className='failure-view-text'>
    <p>Something went wrong. Please try again.</p></div>
  )

  renderBooksContent = () => {
    const { apiStatus } = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderBooksView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const { searchInputValue, priceRangeValue } = this.state

    return (
      <div className="booklist-main-container">
        <Header />
        <div className="search-box-wrapper">
          <div className="search-box">
            <SearchInput
              searchInputValue={searchInputValue}
              onChangeSearchInput={this.handleSearchChange}
            />
          </div>
        </div>

        <div className="content-row">
          <div className="left-panel">
            <PriceRange
              priceRangeValue={priceRangeValue}
              onChangePrice={this.handlePriceChange}
            />
          </div>
          <div className="right-panel">
            {this.renderBooksContent()}
          </div>
        </div>
      </div>
    )
  }
}

export default BookList
