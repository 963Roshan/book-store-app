import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import './index.css';

class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="banner-container">
                    <h1 className="banner-heading">Welcome to the Book Store</h1>
                    <p className="banner-description">
                        Dive into a world of knowledge, adventure, and imagination with our curated book collection.
                    </p>
                    <Link to ="/books">
                    <button className="explore-button">Explore Books</button>
                    </Link>
                </div>
               <Footer/>
            </>
        );
    }
}

export default Home;
