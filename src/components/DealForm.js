import React from 'react'
// import axios from 'axios'

import { Link } from 'react-router-dom'
import api from '../util/api';

class DealForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            description: '',
            restaurant_id: '',
            image: '',

        };

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }



    addPostToServer = (e) => {
        let post = {
            deal: {
                user_id: this.props.id,
                description: this.state.description,
                restaurant_id: this.state.restaurant_id,
                image: this.state.image,
            }
        }
        e.preventDefault()
        return fetch('http://localhost:3000/deals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(post)
        }).then(resp => resp.json())

            .then((json) => {
                console.log(json)
                this.props.history.push("home")
            })   // submit post then redirect to "/home"
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.addPostToServer()
    }

    render() {
        return (
            <>
                <div className="dealform">
                    <form onSubmit={this.addPostToServer} className="searchBar" >

                        <span className="post">
                            <select name="restaurant_id" onChange={this.handleChange} >
                                {this.props.restaurants.map(rest => <option value={rest.id}>{rest.name}</option>)}


                            </select>
                        </span>



                        <input
                            name="image" onChange={this.handleChange}
                            className="inputBox"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="image"
                            label='image' />

                        <input
                            name="description"
                            className="inputBox"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="description"
                            label='description' />
                        <input className="submitButton" type="submit" />
                        <div className="post">

                        </div>
                    </form >

                </div >


            </ >
        )
    }
}
export default DealForm