import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import api from "../util/api";
import { Link } from "react-router-dom";


class Login extends React.Component {

    state = {
        username: "",
        password: "",
        logged_in: false,
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
                this.setState({ logged_in: true }, () => this.props.saveUser(data));

                // debugger
                this.props.history.push('/home')
            }
        });
    };

    onSignupClicked = e => {
        // debugger;
        e.preventDefault();
        api.signup(this.state.username, this.state.password).then(data => {
            if (data.error) {

                alert("please enter your details to signup");
                this.setState({ username: "", password: "" });
            } else {

                localStorage.setItem("token", data.jwt);
                this.setState({ logged_in: true, username: data.username });
                this.props.saveUser(data)
                this.props.history.push('/home')
            }
        });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };



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


export default Login;

