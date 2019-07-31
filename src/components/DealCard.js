import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const DealCard = (props) => {

    // const { image, name, location, review, average_cost_per_person } = restaurant

    return (

        < Grid container column={2} >
            <Grid.Row>
                <Grid.Column>
                    <Image src={props.deal.restaurant.image} wrapped ui={false} />
                    {props.deal.description}

                    {/* <Link to={`/deals/${props.deal.id}`} >
                        {props.deal.description}<br />
                    </Link> */}
                </Grid.Column>
            </Grid.Row>
        </Grid >
    )
}

export default DealCard 