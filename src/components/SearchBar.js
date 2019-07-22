import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

const SearchBar = (props) => {

    return (

        <div>
            <div className="searching">
                <span className="searching">
                    <form onSubmit={props.selectRestaurant} className="searchBar">

                        {/* <form> */}
                        <input
                            className="searchBox"
                            onChange={props.updateSearchTerm}
                            type="text"
                            placeholder="Search"
                        />
                        {/* <input className="searchButton" type="submit" /> */}
                    </form>

                </span>
            </div>


            <div>
                <span className="searching">
                    <p className="orangeFont">Sort By:</p>
                    <select onChange={props.setSortBy} className="searchButton">
                        {/* <option value="All">All</option> */}
                        <option value="Alphabetically">Alphabetically</option>
                        <option value="Price">Average cost per person High-Low</option>
                        <option value="Review">Review High-Low</option>
                        <option value="Location">Location</option>

                        {/* <option value="GBP">United Kingdom Pounds</option> */}
                    </select>
                </span>
            </div>
        </div>
    )


}





export default SearchBar;







