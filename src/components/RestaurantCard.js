import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RestaurantCard = (props) => (
    <Card>
        <Image src={props.restaurant.image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>
                <Link to={`/restaurants/${props.restaurant.id}`} >
                    {props.restaurant.name} <br />
                    View Deal</Link>
            </Card.Header>


        </Card.Content>
    </Card>
)

export default RestaurantCard

