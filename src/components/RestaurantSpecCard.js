
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import DealForm from './DealForm';
const mapStyles = {
    width: '33%',
    height: '33%',
};

const RestaurantSpecCard = (props) => {
    return (
        <div className="restaurantSpecContainer">
            <div className="restaurantSpecCard">
                <Card className="restDetails">
                    <Image src={props.restaurant.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>
                            <Card.Description> {props.restaurant.name}</Card.Description><br />
                            <Card.Description>{props.restaurant.location}</Card.Description><br />
                            <Card.Description>{props.restaurant.description}</Card.Description><br />
                            <Card.Description>
                                <div>
                                    Deals: {props.restaurant.deals.map(deal => <li key={deal.id}>{deal.description}</li>)}
                                </div>
                            </Card.Description><br />
                            <Card.Description>Review: {props.restaurant.review}</Card.Description><br />
                            <Card.Description>Cost Per Person: £{props.restaurant.average_cost_per_person}</Card.Description>

                        </Card.Header>
                    </Card.Content>
                </Card>
            </div>
            <div className="dealinput">
                <DealForm id={props.id} username={props.username} restaurants={props.restaurants} />
            </div>
            <div className="mapContainer" >
                <Map
                    className="map"
                    google={props.google}
                    zoom={17}
                    style={mapStyles}
                    initialCenter={{ lat: props.restaurant.latitude, lng: props.restaurant.longitude }}

                >{<Marker key={props.restaurant.id} position={{ lat: props.restaurant.latitude, lng: props.restaurant.longitude }} />}
                </Map>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD31RrQSrrMtkjGxt6w4l48M8Nll3ljRgY'
})(RestaurantSpecCard)


