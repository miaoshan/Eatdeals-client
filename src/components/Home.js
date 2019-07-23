import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      savedRestaurants: []
    };
  }

  changeCoordinatesState = event => {
    this.setState({
      coordinates: {
        long: event.coordinates.lng,
        lat: event.coordinates.lat
      }
    });
  };

  populateListWithData = data => {
    this.setState({ restaurantData: data.restaurants });
  };



  saveRestaurantToServer = restaurant => {
    fetch('http://localhost:3001/restaurants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(restaurant)
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ savedRestaurants: [...this.state.savedRestaurants], data })

      })
  }


  render() {
    const {
      signinAndSetToken,
      users_name,
      username,
      user,
      loggedIn
    } = this.props;

    const { coordinates, restaurantData, savedRestaurants } = this.state;

    return (
      <div id="HomePage_Id" >

      </div>
    )
  }
}
export default Home
