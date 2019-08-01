import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '800',
    height: '800',
};

const DealSpecCard = (props) => {
    console.log(props)
    const { deal, google } = props
    const { image, restaurant, description } = deal
    const { name, location, review, average_cost_per_person } = restaurant

    const mapStyles = {
        width: '90%',
        height: '90%',
    };
    return (
        <Grid columns={3} divided>
            <Grid.Row>
                <Grid.Column>
                    {console.log("?")}
                    <Card.Description>{name}</Card.Description><br />
                    <Card.Description>{location}</Card.Description><br />
                    <Card.Description>Deal: {description}</Card.Description><br />
                    <Card.Description>Review: {review}</Card.Description><br />
                    <Card.Description>Cost Per Person: £{average_cost_per_person}</Card.Description>
                </Grid.Column>

                <Grid.Column>
                    <Map
                        google={google}
                        zoom={17}
                        style={mapStyles}
                        initialCenter={{ lat: 51.509865, lng: -0.118092 }}>
                    </Map>
                </Grid.Column>
            </Grid.Row>
        </Grid >

    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD31RrQSrrMtkjGxt6w4l48M8Nll3ljRgY'
})(DealSpecCard) 