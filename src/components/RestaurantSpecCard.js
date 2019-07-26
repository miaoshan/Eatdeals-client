import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const CardExampleCard = (props) => {
    return (
        <Card>
            <Image src={props.restaurant.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    <Card.Description> {props.restaurant.name}</Card.Description><br />
                    <Card.Description>{props.restaurant.location}</Card.Description><br />
                    <Card.Description>Deal: {props.restaurant.description}</Card.Description><br />
                    <Card.Description>Review: {props.restaurant.review}</Card.Description><br />
                    <Card.Description>Cost Per Person: {props.restaurant.average_cost_per_person}</Card.Description>
                </Card.Header>
            </Card.Content>
        </Card>
    )
}

export default CardExampleCard

