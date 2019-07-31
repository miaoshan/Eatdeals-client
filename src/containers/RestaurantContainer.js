import React, { Component } from "react";
import RestaurantCard from '../components/RestaurantCard'
import { Card, Grid } from "semantic-ui-react";


class RestaurantContainer extends Component {

    render() {
        return (

            <div className="restaurantContainer">
                {
                    this.props.restaurants
                        .map((restaurant, index) => <RestaurantCard key={index} restaurant={restaurant} />)
                }
            </div>
        );
    }

}

export default RestaurantContainer;
