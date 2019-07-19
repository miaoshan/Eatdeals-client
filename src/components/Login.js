import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import api from "../util/api";
import { Link } from "react-router-dom";



class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }


    onLoginClicked = e => {
        // debugger;
        e.preventDefault();
        api.login(this.state.username, this.state.password).then(data => {
            if (data.error) {
                alert("wrong username or password");
                this.setState({ username: "", password: "" });
            } else {
                localStorage.setItem("token", data.jwt);
                this.setState({ logged_in: true, username: data.username });
            }
        });
    };

    onSignupClicked = e => {
        // debugger;
        e.preventDefault();
        api.signup(this.state.username, this.state.password).then(data => {
            if (data.error) {
                debugger
                alert("plese enter your details to signup");
                this.setState({ username: "", password: "" });
            } else {
                debugger
                localStorage.setItem("token", data.jwt);
                this.setState({ logged_in: true, username: data.username });
            }
        });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleLogOut = () => {
        console.log("mmmm")
        localStorage.clear("token");
        this.setState({
            logged_in: false,
            username: "",
            password: ""

        });
    };

    render() {
        return (
            <div className="nav">
                {this.state.logged_in ? (
                    <div>
                        <h2> {`Welcome to Eatdeals,${this.state.username}!`}</h2>
                        <button onClick={this.handleLogOut}>Log out</button>
                        <p className="nav-links"><Link to="/postadeal"> Post an awesome Deal!</Link></p>

                    </div>
                ) : (
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
                    )}
            </div>
        );
    }
}

export default Login;

