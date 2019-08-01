import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const DealCard = (props) => {

    return (

        < Grid container column={2} >
            <Grid.Row>
                <Grid.Column>
                    {/* <Image src={props.deal.restaurant.image} wrapped ui={false} /> */}
                    {props.deal.description}
                </Grid.Column>
            </Grid.Row>
        </Grid >
    )
}

export default DealCard 