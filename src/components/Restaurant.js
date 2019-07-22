import React from "react";

const Restaurant = (props) => (
    <div key={props.index}>
        <div className="card">
            <div className="card-body">
                <img
                    className="restaurant-img"
                    src={props.restaurant.image}
                    alt={props.restaurant.title}
                />

                <h3 className="card-title">
                    {props.restaurant.name}
                </h3>

                <p className="card-text">
                    Location: {props.restaurant.location}
                </p>

                <p className="card-text">
                    Deal: {props.restaurant.description}
                </p>

                <p className="card-text">
                    Review: {props.restaurant.review}
                </p>

                <p className="card-text">
                    Average cost per person: £{props.restaurant.average_cost_per_person}
                </p>

                <p>
                    {
                        // new google.maps.Map(document.getElementById('map'), {
                        //     center: { lat: -34.397, lng: 150.644 },
                        //     zoom: 8
                        // })
                    }
                    Tong {props.restaurant.location}
                </p>
            </div>
        </div>


    </div>
);

export default Restaurant;
