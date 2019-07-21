import React, { Component } from 'react';
import Button from "@material-ui/core/Button";


const SearchBar = (props) => {

    return (
        <div>
            <div className="searching">
                <span className="searching">
                    <form onSubmit={"props.setFilter"} className="searchBar">
                        <input
                            className="searchBox"
                            onChange={props.setFilter}  // need a function
                            type="text"
                            placeholder="Search"
                        />
                        <input className="searchButton" type="submit" />
                    </form>
                </span>
                <span className="searching">
                    <p className="orangeFont">Sort By:</p>
                    <select onChange={props.setSortBy} className="searchButton">
                        <option value="All">All</option>
                        <option value="Alphabetically">Alphabetically</option>
                        <option value="Price">Average cost per person High-Low</option>
                        <option value="Review">Review High-Low</option>
                        <option value="GBP">United Kingdom Pounds</option>
                    </select>
                </span>
            </div>
        </div>
    )

}





export default SearchBar;







