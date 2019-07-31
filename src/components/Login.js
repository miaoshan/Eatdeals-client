import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import api from "../util/api";
import { Link } from "react-router-dom";
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';


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
                this.setState({ logged_in: true, username: data.username })
                this.props.setLoginToTrue()
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
            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Please Signup or Login</Header>
                    <Segment>
                        <Form size="large">
                            <Form.Input
                                onChange={this.handleChange}
                                id="username"
                                type="text"
                                name="username"
                                value={this.state.username}
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="username"

                            />
                            <Form.Input
                                onChange={this.handleChange}
                                id="password"
                                type="password"
                                name="password"
                                value={this.setState.password}

                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"

                            />
                            <Button color="gray" fluid size="large" onClick={this.onLoginClicked}>Login</Button><br />
                            <Button color="gray" fluid size="large" onClick={this.onSignupClicked}>Signup</Button>

                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}


export default Login;



