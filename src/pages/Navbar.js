import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = props =>
    <div>
        <Link to='/'>Home</Link> | <Link to='/signin'>Signup</Link> | <Link to='/signin'>Login</Link> | <Link to='/myprofile'>my profile</Link> |  <Link to='/postadeal'>post a deal</Link>

    </div>

export default Navbar