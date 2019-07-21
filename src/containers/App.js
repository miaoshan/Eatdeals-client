import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom"; // get access to match,location and history.
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Header from "../pages/Header";
import api from "../util/api";
import Map from "../components/Map";
import Login from "../components/Login";
import "../App.css";
import MainContainer from "./MainContainer";

class App extends React.Component {
  state = {
    logged_in: false,
    username: "",
    password: "",
    posts: [],
    sortBy: "All",
    restaurants: []
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.getCurrentUser(token).then(user => {
        this.setState({ logged_in: true, username: user.username });
      });
    }
  }

  // getPosts = () => {
  //   const token = localStorage.getItem("token");
  //   api
  //     .getPosts(token)
  //     .then(posts =>
  //       this.setState({ posts }, () => console.log(this.state.posts))
  //     );
  // };

  // get posts from the user who logged in 

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onLoginClicked = e => {
    e.preventDefault();
    api.login(this.state.username, this.state.password).then(data => {
      if (data.error) {
        alert("something is wrong with your credentials");
        this.setState({ username: "", password: "" });
      } else {
        localStorage.setItem("token", data.jwt);
        this.setState({ logged_in: true, username: data.username });
      }
    });
  };

  handleLogOut = () => {
    localStorage.clear("token");
    this.setState({
      logged_in: false,
      username: "",
      password: "",
      posts: []
    });
  };
  // ---------------------------------------------------------------------------------  authentication

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restaurants" component={MainContainer} />
          <Route path="/postadeal" component={Post} />
          <Route path="/login" component={Login} />
          <Route component={() => <h1>Page not found.</h1>} />

        </Switch>
      </div>



    );
  }
}

export default App;

