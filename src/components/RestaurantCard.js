import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RestaurantContainer from '../containers/RestaurantContainer';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Card
} from 'semantic-ui-react';

const RestaurantCard = (props) => (
    <Grid.Column>
        <div>
            <Link to={`/restaurants/${props.restaurant.id}`} >
                <Image className="image-display" src={props.restaurant.image} wrapped ui={false} />
                {props.restaurant.name}
            </Link>
        </div>
        <div>

            Lastest Deal: {
                props.restaurant.deals.length > 0 ?
                    props.restaurant.deals[props.restaurant.deals.length - 1].description
                    : ""
            }
        </div>
    </Grid.Column>
)

export default RestaurantCard

