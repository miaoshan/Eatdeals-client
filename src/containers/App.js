import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom"; // get access to match,location and history.
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import DealForm from "../components/DealForm";
import Header from "../pages/Header";
import api from "../util/api";
import Login from "../components/Login";
import "../App.css";
import MainContainer from "./MainContainer";
import _ from 'lodash'

class App extends React.Component {
  state = {
    logged_in: false,
    username: "",
    id: "",
    password: "",
    sortBy: "All",
    restaurants: []
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {

    }

    api.getCurrentUser(token).then(user => {
      console.log("!!!");
      this.setState(
        { logged_in: true, username: user.username, id: user.id }
      );
      console.info(this.state);
    });



    this.fetchRestaurants()
      .then(restaurants => {
        this.setState({ restaurants: restaurants })
      })

  }

  saveUser(user) {
    console.log(user)
    this.setState({
      id: user.id,
      username: user.username
    })
  };




  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  handleLogOut = () => {
    localStorage.clear("token");
    this.setState({
      logged_in: false,
      username: "",
      password: "",

    });
  };



  fetchRestaurants = () => {
    return fetch("http://localhost:3000/restaurants")
      .then(resp => resp.json())
  }



  addPostToServer = (e, state) => {
    let post = {
      post: {
        user_id: this.props.id,
        description: this.state.description,
        restaurant_id: this.state.restaurant_id,
        image: this.state.image

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
      .then(data => this.setState({
        posts: [...this.state.posts, data]
      }))

      .then(() => this.props.history.push("home"))   // submit post then redirect to "/home"
  }
  // ---------------------------------------------------------------------------------  authentication

  getDeals = () => {
    const deals = _.flatten(this.state.restaurants.map(restaurant => restaurant.deals))
    return deals
  }

  render() {
    this.getDeals()
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" render={(routerProps) => <MainContainer getDeals={this.getDeals.bind(this)} restaurants={this.state.restaurants} posts={this.state.posts} />} />
          <Route path="/restaurants/:id" render={(routerProps) => <MainContainer restaurants={this.state.restaurants} posts={this.state.posts} />} />
          <Route path="/postadeal" render={(routerProps) => <DealForm a id={this.state.id} restaurants={this.state.restaurants}{...routerProps} />} />
          <Route path="/login" component={(routerProps) => <Login {...routerProps} saveUser={this.saveUser.bind(this)} />} />
          <Route component={() => <h1>Page not found.</h1>} />



        </Switch>
      </div>



    );
  }
}

export default withRouter(App);

