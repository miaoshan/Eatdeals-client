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
            </Card.Header>


        </Card.Content>
    </Card>
)

export default CardExampleCard

