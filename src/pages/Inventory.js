import React from 'react'

import Item from '../components/Item'

import { getInventory } from '../services/api'

class Inventory extends React.Component {
  state = {
    inventory: []

  }

  style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap'
  }


  setInventory = () => {
    getInventory()
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          this.setState({ inventory: data })
        }
      })
  }

  componentDidMount() {   //update the componentDidMount function - we added in an else statement - so if the user does exist we call setInventory for the current user.

    if (!this.props.username) {
      this.props.history.push('/signin')
    } else {
      this.setInventory()
    }
  }

  render() {   //update some things in render: since we changed the name of the initial state to inventory we have to update that in the render function also:
    const { inventory } = this.state

    return (
     
      <div style={this.style} className='user-list'>
        <h3>Here's your inventory:</h3>
        {inventory.length === 0 && <p>Sorry, you don't have any items.</p>}
        {
          inventory.map(item =>
            <Item key={item.id} item={item} />
          )
        }
      </div>

    )
  }
}

export default Inventory
