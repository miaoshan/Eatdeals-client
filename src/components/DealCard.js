import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const DealCard = (props) => {
    return (
        <Grid.Column>
            {props.restaurant && <Image className="deal-image" src={props.restaurant.image} wrapped ui={false} />}
            Restaurant: {props.restaurant.name}<br></br>
            Deal: {props.deal.description}
        </Grid.Column >


    )
}

export default DealCard 