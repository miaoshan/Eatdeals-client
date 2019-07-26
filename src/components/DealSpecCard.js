import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '260%',
    height: '80%',
};

const CardExampleCard = (props) => (
    <div className="DealSpecCard" >
        <Card>
            <Image src={props.deal.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>

                    {/* <Card.Description>Location  {props.deal.restaurant.location}</Card.Description><br /> */}
                    <Card.Description>Deal: {props.deal.description}</Card.Description><br />
                    {/* <Card.Description>Review {props.restaurant.review}</Card.Description><br /> */}
                    {/* <Card.Description>Cost Per Person {props.restaurant.average_cost_per_person}</Card.Description> */}
                </Card.Header>
                <Map
                    google={props.google}
                    zoom={18}
                    style={mapStyles}
                    initialCenter={{ lat: 51.509865, lng: -0.118092 }}
                ></Map>
            </Card.Content>
        </Card>
    </div>
)

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD31RrQSrrMtkjGxt6w4l48M8Nll3ljRgY'
})(CardExampleCard) 