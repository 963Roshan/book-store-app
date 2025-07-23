import { Component } from "react";
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import Header from "../Header";

class BookList extends Component{
    render(){
        return(
            <>
            <Header/>
        <div className="price-range-container">
        <label className="price-label">Filter by Price</label>
        <Slider
          min={0}
          max={100}
          step={5}
          value={priceRangeValue}
          onChange={onChangePrice}
        />
        <p className="price-value">Up to ₹{priceRangeValue}</p>
      </div>
      <div>
         <input
        type="search"
        className="search-input"
        placeholder="Search by title or author"
        value={searchInputValue}
        onChange={onChangeSearchInput}
      />
      </div>
            </>
        )
    }
}
export default BookList;