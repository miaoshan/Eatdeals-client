
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const navStyle = {
        color: "white"
    };

    return (
        <nav className="NavBar">
            <Link style={navStyle} to="/">
                <h3>
                    <img
                        className="homeImage"
                        src="https://cdn1.iconfinder.com/data/icons/pet-me-vol-1/64/meong-24-512.png"
                        alt="Home Image"
                    />
                </h3>
            </Link>

            <ul className="nav-links">
                {/* <Link style={navStyle} to="/login">
                    <li className="navButtons">login</li>
                </Link> */}
                <Link style={navStyle} to="/postadeal">
                    <li className="navButtons">post deal</li>
                </Link>
                <Link style={navStyle} to="/my favourite">
                    <li className="navButtons">favourite</li>
                </Link>
                <Link style={navStyle} to="/cart">
                    <li>
                        <img
                            className="navImage"
                            src="https://i.imgur.com/gphuW4V.png"
                            alt="Cart"
                        />
                    </li>
                </Link>
                <Link style={navStyle} to="/login">
                    <li>
                        <img
                            className="navImage"
                            src="https://i.imgur.com/gkemPmm.png"
                            alt="Login Key"
                        />
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;