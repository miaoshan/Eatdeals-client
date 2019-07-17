import React from 'react'

import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    fetch("url/homepage")
      .then(resp => resp.json())
      .then(data => ({ restaurants: data }));
  }

  render() {
    return (
      <div id="HomePage_Id" >


        <h1> This will be the homepage</h1>
      </div>
    );
  }
}
export default HomePage
