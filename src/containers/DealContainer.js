import React, { Component } from "react";
import DealCard from '../components/DealCard';
import { Card } from "semantic-ui-react";

class DealContainer extends Component {

    state = {
        deals: []
    }


    findRestaurant = (deal) => {
        return this.props.restaurants.find(rest => {

            return deal.restaurant_id === rest.id
        })
    }

    componentDidMount() {
        fetch("http://localhost:3000/deals")
            .then(resp => resp.json())
            .then(data => {

                this.setState({ deals: data });
            })
    }
    render() {
        return (
            <Card.Group className="dealContainer">

                {
                    this.state.deals.map((deal, index) => <DealCard key={index} deal={deal} restaurant={this.findRestaurant(deal)} />)
                }
            </Card.Group>

        );
    }

}

export default DealContainer;
