import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const CardExampleCard = (props) => (
    <Card>
        {/* <Image src={props.deal.image} wrapped ui={false} /> */}
        <Card.Content>
            <Card.Header>

                {/* <Card.Description>Location  {props.deal.restaurant.location}</Card.Description><br /> */}
                <Card.Description>Deal: {props.deal.description}</Card.Description><br />
                {/* <Card.Description>Review {props.restaurant.review}</Card.Description><br /> */}
                {/* <Card.Description>Cost Per Person {props.restaurant.average_cost_per_person}</Card.Description> */}
            </Card.Header>
        </Card.Content>
    </Card>
)





export default CardExampleCard;