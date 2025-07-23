import React, { Component } from 'react'
import Header from '../Header'
import SearchInput from '../SearchInput'
import PriceRange from '../PriceRange'
import BookItem from '../BookItem'
import './index.css'

const sampleBooks = [
  {
    title: 'Designing Across Senses',
    subtitle: 'A Multimodal Approach to Product Design',
    isbn13: '9781491954249',
    price: '$27.59',
    image: 'https://itbook.store/img/books/9781491954249.png',
  },
  {
    title: 'Web Scraping with Python, 2nd Edition',
    subtitle: 'Collecting More Data from the Modern Web',
    isbn13: '9781491985571',
    price: '$33.99',
    image: 'https://itbook.store/img/books/9781491985571.png',
  },
  {
    title: 'Programming iOS 11',
    subtitle: 'Dive Deep into Views, View Controllers, and Frameworks',
    isbn13: '9781491999226',
    price: '$59.17',
    image: 'https://itbook.store/img/books/9781491999226.png',
  },
]

class BookList extends Component {
  state = {
    searchInputValue: '',
    priceRangeValue: 1000,
  }

  handleSearchChange = event => {
    this.setState({ searchInputValue: event.target.value })
  }

  handlePriceChange = value => {
    this.setState({ priceRangeValue: value })
  }

  getFilteredBooks = () => {
    const { searchInputValue, priceRangeValue } = this.state

    return sampleBooks.filter(book => {
      const searchText = searchInputValue.toLowerCase()
      const titleMatch = book.title.toLowerCase().includes(searchText)
      const subtitleMatch = book.subtitle.toLowerCase().includes(searchText)

      const numericPrice = parseFloat(book.price.replace('$', ''))
      const priceMatch = numericPrice <= priceRangeValue

      return (titleMatch || subtitleMatch) && priceMatch
    })
  }

  render() {
    const { searchInputValue, priceRangeValue } = this.state
    const filteredBooks = this.getFilteredBooks()

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
            {filteredBooks.length > 0 ? (
              <ul className="book-items-container">
                {filteredBooks.map(book => (
                  <BookItem key={book.isbn13} bookData={book} />
                ))}
              </ul>
            ) : (
              <p>No books found.</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default BookList
