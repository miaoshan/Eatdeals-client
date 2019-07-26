import React from 'react';
import RestaurantDealSpecCard from './RestaurantDealSpecCard'

class RestaurantDealSpec extends React.Component {

    state = {
        restaurant: {}
    }

    getSingleRestaurantAndDeal = (id) => {
        fetch(`http://localhost:3000/restaurants/${id}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ restaurant: data })
            })
    }

    componentDidMount() {
        this.getSingleRestaurantAndDeal(this.props.match.params.id)
    }

    render() {
        const { restaurant } = this.state;
        return (
            <div>
                <div className="" >
                    <RestaurantDealSpecCard restaurant={restaurant} />
                </div>
            </div >

        );
    }
}

export default RestaurantDealSpec;

