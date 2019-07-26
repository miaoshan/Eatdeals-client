import React from 'react';
import RestaurantSpecCard from './RestaurantSpecCard'

class RestaurantDealSpec extends React.Component {

    state = {
        restaurant: {}
    }

    getSingleRestaurant = (id) => {
        fetch(`http://localhost:3000/restaurants/${id}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ restaurant: data })
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
                    <RestaurantSpecCard restaurant={restaurant} />
                </div>
            </div >

        );
    }
}

export default RestaurantDealSpec;

