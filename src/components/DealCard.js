import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DealCard = (props) => (
    <Card>
        <Image src={props.deal.image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>
                <Link to={`/deals/${props.deal.id}`} >
                    {props.deal.description}<br />
                    View Deal
                </Link>
            </Card.Header>
        </Card.Content>
    </Card>
)

export default DealCard 