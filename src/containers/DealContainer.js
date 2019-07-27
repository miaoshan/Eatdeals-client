import React, { Component } from "react";
import DealCard from '../components/DealCard';

class DealContainer extends Component {

    state = {
        deals: []
    }


    componentDidMount() {
        fetch("http://localhost:3000/deals")
            .then(resp => resp.json())
            .then(data => {
                // debugger
                this.setState({ deals: data });
            })
    }
    render() {
        return (
            <div className="dealContainer">

                {
                    this.state.deals.map((deal, index) => <DealCard key={index} deal={deal} />)
                }

            </div>
        );
    }

}

export default DealContainer;
