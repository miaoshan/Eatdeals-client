import React from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import ButtonBases from "../components/ButtonsUI"

import CustomizedInputBase from "../components/InputUI"

import logo from "../logo.svg";

const Header = props => (
  <header className="App-header">
    <ButtonBases />
    <CustomizedInputBase />
    <Link to="/">
    </Link>
    {/* <h1 className="App-title">
      {props.username
        ? `Welcome back, ${props.username}!`
        : "Welcome to Eatdeals!"}
      {props.username && (
        <Button onClick={props.signout} variant="contained" color="primary">
          SIGN OUT
        </Button>
      )}
    </h1> */}
  </header >
);

export default Header;
