import React from 'react'

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

    addDealToServer = (e) => {
        let deal = {
            deal: {
                user_id: this.props.id,
                description: this.state.description,
                restaurant_id: this.state.restaurant_id,
                image: this.state.image,
            }
        }
        e.preventDefault()
        var that = this;
        return fetch('http://localhost:3000/deals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(deal)
        }).then(resp => resp.json())
            .then((json) => {

                that.props.history.push("mydeal")
            })   // submit post then redirect to "/home"
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.addDealToServer(e)
    }

    render() {
        return (
            <>
                <div className="dealform">
                    <h2> {`Welcome to Eatdeals,${this.props.username}!`}</h2>
                    < form onSubmit={this.addDealToServer} className="searchBar" >

                        <span className="deal">
                            <select name="restaurant_id" onChange={this.handleChange} >
                                <option value="">--Please choose a restaurant--</option>

                                {this.props.restaurants.map(rest => <option key={rest.id} value={rest.id}>{rest.name}</option>)}
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
                        <input className="submitButton" type="submit" /><br></br>
                        <button onClick={this.handleLogOut}>Log out</button>
                        <div className="deal">
                        </div>
                    </form >
                </div >
            </ >
        )
    }
}
export default DealForm