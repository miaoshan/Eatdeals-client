import React from 'react';
import RestaurantSpecCard from './RestaurantSpecCard'

class RestaurantDealSpec extends React.Component {

    state = {
        restaurant: {}
    }

    getSingleRestaurant = (id) => {
        let that = this
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
        if (Object.keys(restaurant).length > 0) {
            return (
                <div>
                    <div className="" >
                        <RestaurantSpecCard setDealsInState={this.props.setDealsInState} restaurant={restaurant} id={this.props.id} username={this.props.username} restaurants={this.props.restaurants} history={this.props.history} />
                    </div>
                </div >
            );
        }
        else {
            return <div>
            </div >
        }

    }
}

export default RestaurantDealSpec;

