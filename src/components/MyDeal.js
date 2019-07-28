import React from 'react';
import MyDealCard from './MyDealCard';
import { Link } from 'react-router-dom';

class MyDeal extends React.Component {
    state = {
        deals: []
    }

    getUsersDeal = (id) => {
        fetch(`http://localhost:3000/deals`)
            .then(resp => resp.json())
            .then(deals => {
                return deals.filter(deal => deal.user_id == id)
            })
            .then(data => {
                this.setState({ deals: data })
            })
    }

    componentDidMount() {
        this.getUsersDeal(this.props.user_id)
    }

    render() {
        return (
            <div className="MyDeal" >
                <h2> {`Hi,${this.props.username}! Your deals!`}</h2>
                {
                    this.state.deals
                        .map((deal, index) =>
                            <MyDealCard {...this.props} key={index} deal={deal} restaurant={deal.restaurant} />
                        )
                }
            </div>
        );
    }
}

export default MyDeal;