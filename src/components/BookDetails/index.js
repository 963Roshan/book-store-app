import { Component } from "react"
import { withRouter } from "react-router-dom"
import Loader from "../Loader"
import Header from "../Header"
import ErrorMessage from "../ErrorMessage"
import "./index.css"

class BookDetails extends Component {
  state = {
    apiStatus: "initial",
    bookDetailsData: {},
    isAddedToCart: false,
  }

  componentDidMount() {
    this.fetchBookDetails()
  }

  fetchBookDetails = async () => {
    this.setState({ apiStatus: "loading" })
    const { match } = this.props
    const { params } = match
    const { isbn13 } = params

    try {
      const response = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      const data = await response.json()
      this.setState({ bookDetailsData: data, apiStatus: "success" })
    } catch (error) {
      this.setState({ apiStatus: "failure" })
    }
  }

  handleAddToCart = () => {
    this.setState({ isAddedToCart: true })
    // Optional: Add cart logic here
  }

  handleBack = () => {
    const { history } = this.props
    history.goBack()
  }

  renderSuccessView = () => {
    const { bookDetailsData, isAddedToCart } = this.state
    const { title, subtitle, price, image, desc } = bookDetailsData

    return (
      <div className="book-details-layout">
        <Header />
        <div className="book-details-content">
          <div className="image-info-box">
            <div className="image-box">
              <img src={image} alt={title} className="book-image" />
            </div>
            <div className="info-box">
              <h1>{title}</h1>
              <p className="subtitle">{subtitle}</p>
              <p className="price">{price}</p>
              <button
                disabled={isAddedToCart}
                onClick={this.handleAddToCart}
                className={`add-to-cart-btn ${isAddedToCart ? "disabled" : ""}`}
              >
                {isAddedToCart ? "Added" : "Add to Cart"}
              </button>
              <button onClick={this.handleBack} className="back-btn">Back</button>
            </div>
          </div>
          <div className="desc-box">
            <h2>Description</h2>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { apiStatus } = this.state

    switch (apiStatus) {
      case "loading":
        return <Loader />
      case "success":
        return this.renderSuccessView()
      case "failure":
        return <ErrorMessage />
      default:
        return null
    }
  }
}

export default withRouter(BookDetails)
