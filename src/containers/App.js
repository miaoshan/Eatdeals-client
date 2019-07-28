import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom"; // get access to match,location and history.
import Navbar from "../components/Navbar";
import DealForm from "../components/DealForm";
import Header from "../pages/Header";
import api from "../util/api";
import Login from "../components/Login";
import "../App.css";
import MainContainer from "./MainContainer";
import _ from 'lodash';
import RestaurantSpec from '../components/RestaurantSpec';
import DealSpec from '../components/DealSpec';
import MyDeal from '../components/MyDeal';
import EditMyDeal from '../components/EditMyDeal';
import DealContainer from "./DealContainer";
import RestaurantContainer from "./RestaurantContainer";

class App extends React.Component {
  state = {
    logged_in: false,
    username: "",
    id: "",
    password: "",
    sortBy: "All",
    restaurants: [],

    // restaurant: null
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

    this.fetchDeals()
      .then(deals => {
        this.setState({ deals: deals })
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








  fetchRestaurants = () => {
    return fetch("http://localhost:3000/restaurants")
      .then(resp => resp.json())
  }

  fetchDeals = () => {
    return fetch("http://localhost:3000/deals")
      .then(resp => resp.json())
  }


  render() {
    return (
      <div className="App">
        <Navbar loggedin={this.state.logged_in} />
        <Switch>
          <Route path="/home" render={() => <RestaurantContainer restaurants={this.state.restaurants} />} />
          <Route path="/restaurants/:id" render={(routerProps) => <RestaurantSpec {...routerProps} />} />
          <Route path="/deals/:id/edit" component={(routerProps) => <EditMyDeal {...routerProps} user_id={this.state.id} username={this.state.username} />} />
          <Route path="/deals/:id" component={(routerProps) => <DealSpec {...routerProps} />} />
          <Route path="/deals" component={(routerProps) => <DealContainer {...routerProps} user_id={this.state.id} username={this.state.username} />} />
          <Route path="/postadeal" render={(routerProps) => <DealForm a id={this.state.id} username={this.state.username} restaurants={this.state.restaurants}{...routerProps} />} />
          <Route path="/login" component={(routerProps) => <Login {...routerProps} saveUser={this.saveUser.bind(this)} />} />
          <Route path="/mydeal" component={(routerProps) => <MyDeal {...routerProps} deals={this.state.deals} user_id={this.state.id} username={this.state.username} />} />

          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>



    );
  }
}

export default withRouter(App);

