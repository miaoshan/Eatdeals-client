import React, { Component } from 'react';
import Button from "@material-ui/core/Button";


const SearchBar = (props) => {

    return (
        <div>
            <div className="searching">
                <span className="searching">
                    <form onSubmit={"props.setSortBy"} className="searchBar">
                        <input
                            className="searchBox"
                            onChange={props.setSortBy}
                            type="text"
                            placeholder="Search"
                        />
                        <input className="searchButton" type="submit" />
                    </form>
                </span>
                <span className="searching">
                    <p className="orangeFont">Sort By:</p>
                    <select onChange={props.setFilter} className="searchButton">
                        <option value="All">All</option>
                        <option value="Alphabetically">Alphabetically</option>
                        <option value="Review">Review</option>
                    </select>
                </span>
            </div>
        </div>
    )

}





export default SearchBar;







