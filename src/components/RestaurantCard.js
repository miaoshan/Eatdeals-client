import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RestaurantContainer from '../containers/RestaurantContainer';

const RestaurantCard = (props) => (
    <Card>
        <Image src={props.restaurant.image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>
                <Link to={`/restaurants/${props.restaurant.id}`} >
                    {props.restaurant.name} <br />
                    View Deal</Link>
            </Card.Header>

            {
                props.restaurant.deals.length > 0 ?
                    props.restaurant.deals[props.restaurant.deals.length - 1].description
                    : ""
            }

        </Card.Content>
    </Card>
)

export default RestaurantCard

