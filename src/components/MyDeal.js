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
                // debugger
                return deals.filter(deal => deal.user_id == id)
            })

            .then(data => {
                // debugger
                this.setState({ deals: data })
            })
    }



    componentDidMount() {
        this.getUsersDeal(this.props.user_id)
    }

    // componentDidUpdate() {
    //     this.getUsersDeal(this.props.user_id)
    // }

    render() {
        const { deals } = this.state;

        return (
            <div className="MyDeal" >
                <h2> {`Hi,${this.props.username}! Your deals!`}</h2>


                {/* <button onClick={() => this.getUsersDeal(this.props.user_id)}>refresh</button> */}
                {
                    this.state.deals
                        .map((deal, index) => <MyDealCard key={index} deal={deal} />)
                }

            </div>

        );
    }
}


export default MyDeal;