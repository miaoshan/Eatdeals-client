import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'




import { Link } from 'react-router-dom'

const Post = props =>
    <div>

        <h1>This will be the user post page</h1>


        <Form>
            <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='location'
                    placeholder='location'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='deal'
                    placeholder='description'
                />

            </Form.Group>

            <Form.Field
                id='form-button-control-public'
                control={Button}
                content='submit'
                label=''
            />
        </Form>
    </div>

export default Post