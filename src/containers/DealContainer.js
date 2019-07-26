import React, { Component } from "react";
import DealCard from '../components/DealCard';

class DealContainer extends Component {

    render() {
        const deals = this.props.deals()
        return (
            <div className="dealContainer">

                {
                    deals.map((deal, index) => <DealCard key={index} deal={deal} />)
                }

            </div>
        );
    }

}

export default DealContainer;
