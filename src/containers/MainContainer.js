import React, { Component } from 'react';
import RestaurantContainer from './RestaurantContainer';


import SearchBar from '../components/SearchBar';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import DealForm from '../components/DealForm';
import DealContainter from './DealContainer';

const mapStyles = {
    width: '100%',
    height: '50%',
};

class MainContainer extends Component {
    constructor() {
        super()
        this.state = {
            restaurants: [],
            filterType: "All",
            sortBy: "Alphabetically",
            searchTerm: "",
            clicked: false,
            selectedRestaurant: null,
            deals: []

        }
    }



    // --------------------------------------------------------------------------- searching 
    // selectRestaurant = (restaurant) => {
    //     this.setState({ selectedRestaurant: restaurant })
    // }
    selectRestaurant = (event) => {
        event.preventDefault()
        // this.state.restaurants
        //     .filter(restaurant => restaurant.name.includes(this.state.searchTerm))     // search function 
        //     .map((restaurant, index) => < Restaurant key={index} restaurant={restaurant} />)
    }

    deselectRestaurant = () => {
        this.setState({ selectedRestaurant: null })
    }

    updateSearchTerm = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    // ----------------------------------------------------------------------------- searching 

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
            "Review": (a, b) => b.review - a.review,
            "Price": (a, b) => b.average_cost_per_person - a.average_cost_per_person,


        }
        return this.props.restaurants.sort(sortFunctions[this.state.sortBy])
    }



    finalRestaurantsList = () => {
        return this.filterBySearchTerm(this.getFilteredRestaurants(this.sortRestaurants()))
    }

    filterBySearchTerm = collection => {
        return collection.filter(restaurant => restaurant.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }



    render() {
        console.log(this.props.getDeals())
        return (
            <div className="searchAndFilter">
                <SearchBar
                    setFilter={this.setFilter} setSortBy={this.setSortBy}
                    updateSearchTerm={this.updateSearchTerm}
                    selectRestaurant={this.selectRestaurant}
                ></SearchBar>
                <RestaurantContainer restaurants={this.finalRestaurantsList()} searchTerm={this.state.searchTerm}
                    deselectRestaurant={this.deselectRestaurant} selectRestaurant={this.selectRestaurant} />
                <DealContainter deals={this.props.getDeals} />



                {/* <Map
                    google={this.props.google}
                    zoom={18}
                    style={mapStyles}
                    initialCenter={{ lat: 51.509865, lng: -0.118092 }}
                ></Map> */}

            </div >
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD31RrQSrrMtkjGxt6w4l48M8Nll3ljRgY'
})(MainContainer);