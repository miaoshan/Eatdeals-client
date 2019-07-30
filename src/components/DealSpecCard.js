import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '800',
    height: '800',
};

const DealSpecCard = (props) => {
    console.log(props)
    const { deal, google } = props
    const { image, restaurant, description } = deal
    const { name, location, review, average_cost_per_person } = restaurant

    return (
        <div className="DealSpecCard" >
            <Card>
                <Image src={image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        {console.log("?")}
                        <Card.Description>{name}</Card.Description><br />
                        <Card.Description>{location}</Card.Description><br />
                        <Card.Description>Deal: {description}</Card.Description><br />
                        <Card.Description>Review: {review}</Card.Description><br />
                        <Card.Description>Cost Per Person: £{average_cost_per_person}</Card.Description>
                    </Card.Header>
                </Card.Content>
            </Card>
            <Map
                google={google}
                zoom={18}
                style={mapStyles}
                initialCenter={{ lat: 51.509865, lng: -0.118092 }}
            ></Map>

            {/* <Link to="https://www.google.com/maps" >Direction</Link> */}

        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD31RrQSrrMtkjGxt6w4l48M8Nll3ljRgY'
})(DealSpecCard) 