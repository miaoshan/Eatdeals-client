import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const MyDealCard = (props) => {

    console.log(props)
    const { deal } = props
    const { image, restaurant, description } = deal
    const { name, location, review, average_cost_per_person } = restaurant
    return (
        <div className="mydealcard">

            < Card >

                <Link to={`/deals/${props.deal.id}`} ></Link>
                <Image src={props.deal.image} wrapped ui={false} />

                <Card.Content>

                    <Card.Header>
                        {console.log("?")}
                        <Card.Description>{name}</Card.Description><br />
                        <Card.Description>Location:{location}</Card.Description><br />
                        <Card.Description>Deal: {description}</Card.Description><br />
                        <Card.Description>Review: {review}</Card.Description><br />
                        <Card.Description>Cost Per Person: £{average_cost_per_person}</Card.Description>
                        <Link to={`/deals/${props.deal.id}/edit`} >
                            <br />
                            Edit
                </Link>

                    </Card.Header>

                </Card.Content>
            </Card >

        </div>

    )
}




export default MyDealCard;