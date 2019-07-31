import React, { Component } from "react";
import DealCard from '../components/DealCard';
import { Card } from "semantic-ui-react";

class DealContainer extends Component {

    state = {
        deals: []
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
                    this.state.deals.map((deal, index) => <DealCard key={index} deal={deal} restaurant={this.props.restaurant} />)
                }
            </Card.Group>

        );
    }

}

export default DealContainer;
