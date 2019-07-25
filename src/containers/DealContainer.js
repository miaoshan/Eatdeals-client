import React, { Component } from "react";
import DealCard from '../components/DealCard';

class DealContainer extends Component {

    render() {
        const deals = this.props.deals()
        return (
            <div className="dealContainer">
                <ul>
                    {
                        // deals.map((deal, index) => <li key={index}>{deal.description}img{deal.image}</li>)
                        deals.map((deal, index) => <DealCard key={index} deal={deal} />)
                    }
                </ul>
            </div>
        );
    }

}

export default DealContainer;
