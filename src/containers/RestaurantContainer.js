import React, { Component } from "react";
import RestaurantDetails from "../components/RestaurantDetails";

class RestaurantContainer extends Component {

    render() {
        return (

            <div>
                {
                    this.props.restaurants
                        .map((restaurant, index) => <RestaurantDetails key={index} restaurant={restaurant} />)
                }
            </div>
        );
    }

}

export default RestaurantContainer;
