import React from 'react'
// import axios from 'axios'

import { Link } from 'react-router-dom'
import api from '../util/api';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            description: '',
            restaurant_id: '',
            image: '',
            posts: []
        };

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }



    addPostToServer = (e) => {
        e.preventDefault()
        return fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(
                this.state
            )
        }).then(resp => resp.json())
            .then(() => this.props.history.push("home"))   // submit post then redirect to "/home"
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.addPostToServer()
    }

    render() {
        return (
            <div>

                <div className="post">
                    <form onSubmit={this.addPostToServer} className="searchBar" >

                        <span className="post">
                            <select name="restaurant_id" onChange={this.handleChange} >
                                <option value="3"> Cinnamon Kitchen Oxford</option>
                                <option value="4">Palm Court Brasserie</option>
                                <option selected value="1">Afternoon Tea @ Holt Hotel</option>
                                <option selected value="5">Boulevard Brasserie</option>
                                <option selected value="6">Joe Allen - Covent Garden</option>
                                <option selected value="7">Frankie & Benny's - Oxford</option>
                                <option selected value="8">The Rattle Owl</option>
                                <option selected value="9">Elnecot</option>
                                <option selected value="10">Oblix West at The Shard</option>
                                <option selected value="11">Aqua shard</option>
                            </select>
                        </span>


                        <input
                            name="image"
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


            </div >
        )
    }
}
export default PostForm