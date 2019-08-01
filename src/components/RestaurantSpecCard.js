
import React from 'react'
import { Card, Icon, Image, Container, Grid, Button, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import DealForm from './DealForm';
const mapStyles = {
    width: '50%',
    height: '50%',
    marginLeft: '25%'
};

const RestaurantSpecCard = (props) => {

    return (
        <Grid columns={1} divided>
            <Grid.Row>

                <Grid.Column>
                    <Image src={props.restaurant.image} wrapped ui={false} />
                    <DealForm id={props.id} restaurant={props.restaurant} username={props.username} restaurants={props.restaurants} history={props.history} />
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
                    {/* <Button as='div' labelPosition='right'>
                        <Button color='red'>
                            <Icon name='heart' />
                            Like
                            </Button>
                        <Label as='a' basic color='blue' pointing='left'>
                            2,002
                        </Label>
                    </Button> */}

                    <Map
                        className="map"
                        google={props.google}
                        zoom={17}
                        style={mapStyles}
                        initialCenter={{ lat: props.restaurant.latitude, lng: props.restaurant.longitude }}

                    >{<Marker key={props.restaurant.id} position={{ lat: props.restaurant.latitude, lng: props.restaurant.longitude }} />}
                    </Map>
                </Grid.Column>
            </Grid.Row>


        </Grid>

    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD31RrQSrrMtkjGxt6w4l48M8Nll3ljRgY'
})(RestaurantSpecCard)


