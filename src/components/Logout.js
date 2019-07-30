import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import api from "../util/api";
import { Link } from "react-router-dom";


class Logout extends React.Component {

    render() {
        return (
            <div className="nav">
                <form>
                    <label htmlFor="username">Username:</label>
                    <input
                        onChange={this.handleChange}
                        id="username"
                        type="text"
                        name="username"
                        value={this.state.username}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        onChange={this.handleChange}
                        id="password"
                        type="password"
                        name="password"
                        value={this.setState.password}
                    />
                    <button onClick={this.onLoginClicked}>Log in</button>
                    <button onClick={this.onSignupClicked}>Sign up</button>

                </form>

            </div>

        );
    }
}


export default Logout;


