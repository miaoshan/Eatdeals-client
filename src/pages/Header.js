import React from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";


import CustomizedInputBase from "../components/InputUI"

import logo from "../logo.svg";

const Header = props => (
  <header className="App-header">
    <CustomizedInputBase />
    <Link to="/">
    </Link>
    {/* <img
      className="backgroundImage"
      src=""
      alt="background image"
    /> */}
  </header >
);

export default Header;



