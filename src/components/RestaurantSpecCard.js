
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '260%',
    height: '80%',
};

const RestaurantSpecCard = (props) => {
    return (
        <Card>
            <Image src={props.restaurant.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    <Card.Description> {props.restaurant.name}</Card.Description><br />
                    <Card.Description>{props.restaurant.location}</Card.Description><br />
                    <Card.Description>Deal: {props.restaurant.description}
                        <ul>
                            {props.restaurant.deals.map(deal => <li key={deal.id} value={deal.description}></li>)}

                        </ul>
                    </Card.Description><br />
                    <Card.Description>Review: {props.restaurant.review}</Card.Description><br />
                    <Card.Description>Cost Per Person: £{props.restaurant.average_cost_per_person}</Card.Description>

                </Card.Header>

                <Map
                    google={props.google}
                    zoom={18}
                    style={mapStyles}
                    initialCenter={{ lat: props.restaurant.latitude, lng: props.restaurant.longitude }}
                ></Map>
            </Card.Content>
            <Card.Content>
                {/* <Link to={"https://www.google.com/maps?f=d&daddr=Steeple+Aston+Bicester+Oxfordshire+OX25+5QQ+GB"}>Direction</Link> */}
            </Card.Content>
        </Card>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD31RrQSrrMtkjGxt6w4l48M8Nll3ljRgY'
})(RestaurantSpecCard)


