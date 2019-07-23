import React, { Component } from 'react';


class RestaurantDetails extends Component {

    render() {
        return (

            <div key={this.props.index}>
                <div className="card">
                    <div className="card-body">
                        <img
                            className="restaurant-img"
                            src={this.props.restaurant.image}
                            alt={this.props.restaurant.title}
                        />

                        <h3 className="card-title">
                            {this.props.restaurant.name}
                        </h3>

                        <p className="card-text">
                            Location: {this.props.restaurant.location}
                        </p>

                        <p className="card-text">
                            Deal: {this.props.restaurant.description}
                        </p>

                        <p className="card-text">
                            Review: {this.props.restaurant.review}
                        </p>

                        <p className="card-text">
                            Average cost per person: £{this.props.restaurant.average_cost_per_person}
                        </p>
                    </div>
                </div>


            </div>
        )
    };
}

export default RestaurantDetails;
