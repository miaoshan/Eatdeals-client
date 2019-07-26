import React from 'react';
import MyDealCard from './MyDealCard';
import { Link } from 'react-router-dom';


class MyDeal extends React.Component {

    state = {
        deals: []
    }

    getSingleRestaurant = (id) => {
        fetch(`http://localhost:3000/deals/${id}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ deals: data })
            })
    }

    componentDidMount() {
        this.getSingleRestaurant(this.props.match.params.id)
    }

    render() {
        const { restaurant } = this.state;
        return (
            <div>
                <div className="" >
                    <MyDealCard />
                </div>
            </div >

        );
    }
}


export default MyDeal;