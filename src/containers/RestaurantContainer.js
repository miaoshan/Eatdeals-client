import React, { Component } from "react";
import Restaurant from "../components/Restaurant";

class RestaurantContainer extends Component {

    render() {
        return (

            <div>
                {
                    this.props.restaurants
                        .map((restaurant, index) => <Restaurant key={index} restaurant={restaurant} />)
                }
            </div>
        );
    }

}

export default RestaurantContainer;
