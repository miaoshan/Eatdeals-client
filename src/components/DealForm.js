import React from 'react'
import { Link } from 'react-router-dom'
import api from '../util/api';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';

class DealForm extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            description: '',

        };

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    addDealToServer = (e) => {
        let deal = {
            deal: {
                user_id: this.props.id,
                description: this.state.description,
                restaurant_id: this.props.restaurant.id,
            }
        }
        e.preventDefault()

        fetch('http://localhost:3000/deals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(deal)
        })
        this.props.setDealsInState().then(() => this.props.history.push("/mydeal"))

        // submit post then redirect to "/home"
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.addDealToServer(e)
    }

    render() {
        return (
            <Grid centered columns={2} calssName="dealForm">
                <Grid.Column>
                    <Header as="h2" textAlign="center">{`Hi ${this.props.username}, post a new deal!`}</Header>
                    <Segment>
                        <Form size="large" className="dealform">

                            < form onSubmit={this.addDealToServer} className="searchBar" >
                                {this.props.restaurant.name
                                }
                                <Form.Input
                                    name="description"
                                    className="inputBox"
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="description"
                                    label='description' />
                                <Button color="gray" fluid size="large" className="submitButton" type="submit" >Submit</Button>

                            </form>




                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid >
        )
    }
}
export default DealForm