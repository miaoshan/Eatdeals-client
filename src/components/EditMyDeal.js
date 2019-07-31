import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';


class EditMyDeal extends React.Component {

    state = {
        image: "",
        description: ""

    }

    handleChange = e => {
        this.setState({

            [e.target.name]: e.target.value

        });
    }

    editMyDealOnServer(id) {
        const options = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deal: {
                    image: this.state.image,
                    description: this.state.description
                }
            })
        };
        return fetch(`http://localhost:3000/deals/${id}`, options)
            .then(resp => resp.json())
            .then((json) => {

                this.props.history.push(`/mydeal`)
            })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.editMyDealOnServer(this.props.match.params.id)
    }

    render() {
        const { restaurant } = this.state;
        return (

            <Grid centered columns={2} calssName="editDealForm">
                <Grid.Column>
                    <Header as="h2" textAlign="center">{`Hi ${this.props.username}, edit your deal!`}</Header>
                    <Segment>
                        <Form size="large" className="editdealform">

                            < form onSubmit={this.handleSubmit} className="searchBar" >


                                <input
                                    name="description"
                                    className="inputBox"
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="description"
                                    label='description' />
                                <input className="submitButton" type="submit" />

                            </form >
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>

        );
    }
}








export default EditMyDeal;
