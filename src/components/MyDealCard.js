import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    width: '50%',
    height: '50 %',
};

const MyDealCard = (props) => {

    console.log(props)
    const { deal, google } = props
    const { image, restaurant, description } = deal
    const { name, location, review, average_cost_per_person } = restaurant


    // deleteMyDeal(id){
    //     const image = e.target.image;
    //     const description = e.target.description;
    //     const options = {
    //         method: "DELETE"
    //     }
    // }




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
                        <Link to={`/deals/${props.deal.id}/edit`} ><br />Edit</Link><br />
                        <button onClick={"deleteMyDeal"}>Delete</button>


                    </Card.Header>

                </Card.Content>
            </Card >
            {/* <Map
                google={google}
                zoom={18}
                style={mapStyles}
                initialCenter={{ lat: 51.509865, lng: -0.118092 }}
            ></Map> */}

        </div>

    )
}




export default GoogleApiWrapper({
    apiKey: 'AIzaSyD31RrQSrrMtkjGxt6w4l48M8Nll3ljRgY'
})(MyDealCard);