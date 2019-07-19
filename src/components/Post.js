import React from 'react'
// import axios from 'axios'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.state = {
            description: '',
            restaurant: ''
        };

    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value })
    }

    // handleRestaurantChange(e) {

    //     this.setState({ restaurant: e.target.value })
    // }

    addPostToServer = () => {
        // debugger
        return fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: this.state.description })
        }).then(resp => resp.json).then(console.log)
    }
    render() {
        return (
            <div>
                <h1>This will be the user post page</h1>
                <Form onSubmit={this.addPostToServer}>
                    <Form.Group widths='equal'>

                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input} onChange={this.handleRestaurantChange}
                            label='restaurant'
                            placeholder='restaurant'
                            name='restaurant'

                        />
                        <Form.Button>Submit</Form.Button>
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input} onChange={this.handleDescriptionChange}
                            label='deal'
                            placeholder='description'
                            name='description'

                        />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}
export default Post