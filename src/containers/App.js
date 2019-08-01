import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom"; // get access to match,location and history.
import Navbar from "../components/Navbar";
import DealForm from "../components/DealForm";
import Header from "../pages/Header";
import api from "../util/api";
import Login from "../components/Login";
import Logout from "../components/Login";
import "../App.css";
import RestaurantContainer from "./RestaurantContainer";
import _ from 'lodash';
import RestaurantSpec from '../components/RestaurantSpec';
import DealSpec from '../components/DealSpec';
import MyDeal from '../components/MyDeal';
import EditMyDeal from '../components/EditMyDeal';
import MainContainer from "./MainContainer";
import DealContainer from "./DealContainer";
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    logged_in: false,
    username: "",
    id: "",
    password: "",
    sortBy: "All",
    restaurants: [],
    deals: []
  };

  componentDidMount() {
    console.log('in componentDidMount in APP')

    const token = localStorage.getItem("token");
    if (token) {
      api.getCurrentUser(token).then(user => {
        if (user.error) return;
        console.log("!!!");
        this.setState(
          { logged_in: true, username: user.username, id: user.id }
        );
        console.info(this.state);
      });
    }



    this.fetchRestaurants()
      .then(restaurants => {
        this.setState({ restaurants: restaurants })

      })

    this.fetchDeals()
      .then(deals => {
        this.setState({ deals: deals })
      })
  }

  componentDidUpdate(prevProps) {
    console.log('in componentDidUpdate in APP')
    console.log(prevProps, this.props)
    if (prevProps.location.pathname !== this.props.location.pathname && this.props.location.pathname === '/home') {
      this.fetchRestaurants()
        .then(restaurants => {
          this.setState({ restaurants: restaurants })

        })

      this.fetchDeals()
        .then(deals => {
          this.setState({ deals: deals })
        })
    }
  }

  saveUser(user) {
    console.log(user)
    this.setState({
      id: user.id,
      username: user.username,
      logged_in: true
    })
  };


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogOut = (e) => {
    e.preventDefault()
    console.log("mmmm")
    localStorage.removeItem("token");
    this.setState({
      logged_in: false,
      username: "",
      id: ""

    });
    this.props.history.push("/login")
  };


  fetchRestaurants = () => {
    return fetch("http://localhost:3000/restaurants")
      .then(resp => resp.json())
  }

  fetchDeals = () => {
    return fetch("http://localhost:3000/deals")
      .then(resp => resp.json())
  }

  setLoginToTrue = () => {
    this.setState({ logged_in: true })
  }

  render() {
    return (
      <div className="App">
        <Navbar miao={this.handleLogOut} loggedin={this.state.logged_in} />
        <Switch>
          <Route path="/home" render={() => <MainContainer restaurants={this.state.restaurants} />} />
          <Route path="/restaurants/:id" render={(routerProps) => <RestaurantSpec {...routerProps} restaurants={this.state.restaurants} id={this.state.id} username={this.state.username} />} />
          <Route path="/deals/:id/edit" component={(routerProps) => <EditMyDeal {...routerProps} user_id={this.state.id} username={this.state.username} />} />
          <Route path="/deals/:id" component={(routerProps) => <DealSpec {...routerProps} />} />
          <Route path="/deals" component={(routerProps) => <DealContainer {...routerProps} user_id={this.state.id} username={this.state.username} restaurants={this.state.restaurants} />} />
          <Route path="/login" component={(routerProps) => <Login {...routerProps} saveUser={this.saveUser.bind(this)} setLoginToTrue={this.setLoginToTrue} />} />
          <Route path="/mydeal" component={(routerProps) => <MyDeal {...routerProps} deals={this.state.deals} user_id={this.state.id} username={this.state.username} />} />
          <Route path="/logout" component={(routerProps) => <Logout {...routerProps} saveUser={this.saveUser.bind(this)} />} />} />

        </Switch>
      </div>



    );
  }
}

export default withRouter(App);

