import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const CardExampleCard = (props) => (
    <Card>
        <Image src={props.deal.image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>
                <Link to={`/restaurants/${props.deal.id}`} >
                    {props.deal.description}
                </Link>

                {/* <Card.Description>{props.deal.description}</Card.Description> */}
            </Card.Header>


        </Card.Content>
    </Card>
)

export default CardExampleCard 