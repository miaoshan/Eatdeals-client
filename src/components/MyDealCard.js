import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50 %',
};

class MyDealCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deals: []
        };
    }

    deleteMyDeal = id => {
        var that = this;
        return fetch(`http://localhost:3000/deals/${id}`, {
            method: "DELETE"
        })
            .then(respo => respo.json())
            .then((json) => {
                that.props.history.push("mydeal")
            })   // submit post then redirect to "/mydeal" page
    };

    render() {
        return (
            <Grid centered columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Link to={`/deals/${this.props.deal.id}`} ></Link>
                        <Image src={this.props.restaurant.image} wrapped ui={false} />
                    </Grid.Column>
                    <Grid.Column>
                        <Card.Header>
                            {console.log("?")}
                            <Card.Description>{this.props.restaurant.name}</Card.Description><br />
                            <Card.Description>Location: {this.props.restaurant.location}</Card.Description><br />
                            <Card.Description>{this.props.restaurant.description}</Card.Description><br />
                            <Card.Description>Review: {this.props.restaurant.review}</Card.Description><br />
                            <Card.Description>Cost Per Person: £{this.props.restaurant.average_cost_per_person}</Card.Description><br />

                            <Card.Description>Deals:  {this.props.deal.description}</Card.Description><br />
                            <Link to={`/deals/${this.props.deal.id}/edit`} ><br />Edit</Link><br />
                            <button onClick={() => this.deleteMyDeal(this.props.deal.id)}>Delete</button>

                        </Card.Header>

                    </Grid.Column>
                </Grid.Row>
            </Grid >

            /* < form onSubmit={this.addReviewToServer} className="searchBar" >review this deal:
                <input
                    name="description"
                    className="inputBox"
                    onChange={this.handleChange}
                    type="text"
                    placeholder="add review"
                    label='description' />
                <input className="submitButton" type="submit" /><br></br>

            </form> */



        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD31RrQSrrMtkjGxt6w4l48M8Nll3ljRgY'
})(MyDealCard);