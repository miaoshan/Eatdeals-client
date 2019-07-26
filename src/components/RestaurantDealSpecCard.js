import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const CardExampleCard = (props) => (
    <Card>
        <Image src={props.restaurant.image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>
                <Link to={`/restaurants/${props.restaurant.id}`} >
                    {props.restaurant.name}
                </Link>
                <Card.Description>location {props.restaurant.location}</Card.Description>
                <Card.Description>deal {props.restaurant.description}</Card.Description>
                <Card.Description>review {props.restaurant.review}</Card.Description>
                <Card.Description>cost per person {props.restaurant.average_cost_per_person}</Card.Description>


            </Card.Header>


        </Card.Content>
    </Card>
)

export default CardExampleCard

