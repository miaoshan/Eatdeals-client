import React, { Component } from "react";
import { Link } from "react-router-dom";



class RestList extends Component {
    state = {
        searchTerm: "",
        clicked: false
    };

    renderRest = () => {
        return this.props.restaurants.map(rest => (
            <div className="innerCard">
                <Link style={{ textDecoration: "none" }} to={`/restaurants/${rest.id}`}>
                    <img
                        className="rest-img"
                    // src={book.volumeInfo.imageLinks.thumbnail}
                    // alt={book.volumeInfo.title}
                    />
                    {/* <h3 className="bookTitleLink"> {rest.volumeInfo.title} </h3>
                    <h5 className="bookAuthorLink"> {rest.volumeInfo.authors} </h5>
                    <p className="bookPriceLink"> £{rest.saleInfo.listPrice.amount} </p> */}
                </Link>
            </div>
        ));
    };

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.searchTerm.length > 0) {
            this.props.getFilteredRestListFromServer(this.state.searchTerm);
        } else {
            this.props.resetRestLists();
        }
        this.setState({
            searchTerm: ""
        });
        event.target.reset();
    };

    render() {
        return (
            <>
                <div className="searching">
                    <span className="searching">
                        <form onSubmit={this.handleSubmit} className="searchBar">
                            <input
                                className="searchBox"
                                onChange={this.handleChange}
                                type="text"
                                placeholder="Search"
                            />
                            <input className="searchButton" type="submit" />
                        </form>
                    </span>
                    <span className="searching">
                        <p className="orangeFont">Sort By:</p>
                        <select onChange={this.props.setSortBy} className="searchButton">
                            <option value="All">All</option>
                            <option value="Alphabetically">Alphabetically</option>
                            <option value="Review">Review</option>
                        </select>
                    </span>
                </div>
                <div className="Card">{this.renderRest()}</div>
            </>
        );
    }
}

export default RestList;
