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
    <Grid container columns={1} >

        <Grid.Column>
            <Link to={`/restaurants/${props.restaurant.id}`} >
                <Image className="image-display" src={props.restaurant.image} wrapped ui={false} />
                {props.restaurant.name}

            </Link><br />
            Lastest Deal:
                {
                props.restaurant.deals.length > 0 ?
                    props.restaurant.deals[props.restaurant.deals.length - 1].description
                    : ""
            }
        </Grid.Column>



    </Grid>

)

export default RestaurantCard

