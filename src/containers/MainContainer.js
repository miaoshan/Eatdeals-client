import React, { Component } from 'react';
import RestaurantContainer from './RestaurantContainer';
import SearchBar from '../components/SearchBar'


class MainContainer extends Component {
    constructor() {
        super()
        this.state = {
            restaurants: [],
            filterType: "All",
            sortBy: "Alphabetically"
        }
    }


    //sets the value of search in state 
    setFilter = (e) => {
        this.setState({ filterType: e.target.value })
    }

    // sets the value of sort By in state 

    setSortBy = (event) => {
        this.setState({ sortBy: event.target.value })
    }

    // 
    getFilteredRestaurants = (restaurants) => {
        return restaurants.filter(restaurant => restaurant.type === this.state.filterType || this.state.filterType === "All")
    }

    //

    sortRestaurants = () => {
        let sortFunctions = {
            "Alphabetically": (a, b) => a.name.localeCompare(b.name),
            "Review": (a, b) => a.review - b.review
        }
        return this.state.restaurants.sort(sortFunctions[this.state.sortBy])
    }

    componentDidMount() {
        fetch("http://localhost:3000/restaurants")
            .then(resp => resp.json())
            .then(data => this.setState({ restaurants: data }))

    }


    render() {
        return (
           <div>
                               
            <SearchBar></SearchBar>
            <RestaurantContainer restaurants={this.getFilteredRestaurants(this.sortRestaurants())} />
            </div>
        )
    }
}
export default MainContainer;