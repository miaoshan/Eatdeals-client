import React, { Component } from "react";
import RestaurantCard from '../components/RestaurantCard'
import { Card, Grid } from "semantic-ui-react";


class RestaurantContainer extends Component {

    render() {
        return (
            <Grid doubling columns={3}>
                {
                    this.props.restaurants
                        .map((restaurant, index) => <RestaurantCard key={index} restaurant={restaurant} />)
                }
            </Grid>
        );
    }

}

export default RestaurantContainer;
