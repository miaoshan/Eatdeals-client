import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom"; // get access to match,location and history.

import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import myProfile from "./pages/myProfile";
import Post from "./components/Post";
import Header from "./pages/Header";
import SignInForm from "./pages/SignInForm";
import Inventory from "./pages/Inventory";
import { validate } from "./services/api";
import Map from "./components/Map";
// import Buttons from "./components/Buttons";

import "./App.css";

class App extends Component {



  state = {
    // this is the initial state, when someone signin this will be updated by the setState
    username: "",
    user: {}
  };
  // only one user can be signed in at once so when they are the username will be replaced eachtime
  signin = user => {
    // debugger;
    this.setState({ username: user.username, user: user });
    localStorage.setItem("token", user.token); // add token and set token before push it to the inventory.
    this.props.history.push("/inventory");
  };
  // if we are signin we will also be want to be able to signout- here will again set the state of username
  signout = () => {
    this.setState({ username: "" });
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  componentDidMount() {
    if (localStorage.token) {
      validate().then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.signin(data);
        }
      });
    }
  }
  render() {
    const { signin, signout } = this;
    const { username } = this.state; //so we can pass the username down to the header to welcome the user
    return (

      <div className="App" >
        <Navbar />
        <Header username={username} signout={signout} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/myprofile" component={myProfile} />
          <Route path="/signin" component={props => <SignInForm signin={signin} {...props} />} />
          <Route path="/inventory" component={props => <Inventory username={username} {...props} />} />
          <Route path="/postadeal" component={Post} />

          {/* <Route path="/burger" component={burger} /> */}
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>

      </div >
    )
  }
}



export default withRouter(App); // get access to match, location and histroy.
