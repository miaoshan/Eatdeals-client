import React, { Component } from 'react';
import RestaurantContainer from './RestaurantContainer';
import PostContainer from './PostContainer';

import SearchBar from '../components/SearchBar';
import InputUI from '../components/InputUI';
import { Map, GoogleApiWrapper } from 'google-maps-react';

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
            posts: []
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
            "Price": (a, b) => b.average_cost_per_person - a.average_cost_per_person
        }
        return this.state.restaurants.sort(sortFunctions[this.state.sortBy])
    }

    fetchRestaurants = () => {
        return fetch("http://localhost:3000/restaurants")
            .then(resp => resp.json())
    }

    fetchPosts = () => {
        return fetch("http://localhost:3000/posts")
            .then(resp => resp.json())
    }

    componentDidMount() {
        this.fetchRestaurants()
            .then(restaurants => {
                this.fetchPosts()
                    .then(posts => {
                        this.setState({ restaurants: restaurants, posts: posts })
                    })
            })
    }

    finalRestaurantsList = () => {
        return this.filterBySearchTerm(this.getFilteredRestaurants(this.sortRestaurants()))
    }

    filterBySearchTerm = collection => {
        return collection.filter(restaurant => restaurant.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }



    // getUserPosts = () => {
    //     const token = localStorage.getItem("token");
    //     api
    //         .getPosts(token)
    //         .then(posts => {
    //             this.setState({ posts }, () => console.log(this.state.posts))
    //         })
    // }

    render() {
        return (
            <div>
                <SearchBar
                    setFilter={this.setFilter} setSortBy={this.setSortBy}
                    updateSearchTerm={this.updateSearchTerm}
                    selectRestaurant={this.selectRestaurant}
                ></SearchBar><InputUI />
                <RestaurantContainer restaurants={this.finalRestaurantsList()} searchTerm={this.state.searchTerm}
                    deselectRestaurant={this.deselectRestaurant} selectRestaurant={this.selectRestaurant} /><br />
                <PostContainer posts={this.state.posts} />

                <Map
                    google={this.props.google}
                    zoom={18}
                    style={mapStyles}
                    initialCenter={{ lat: 51.509865, lng: -0.118092 }}
                ></Map>

            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD31RrQSrrMtkjGxt6w4l48M8Nll3ljRgY'
})(MainContainer);