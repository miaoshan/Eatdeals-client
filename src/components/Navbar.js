
import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
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
                        alt="Home Image" />
                    <div>Eatdeal</div>
                </h3>
            </Link>

            <ul className="nav-links">
                {/* <Link style={navStyle} to="/login">
                    <li className="navButtons">login</li>
                </Link> */}
                <Link style={navStyle} to="/home">
                    <li className="navButtons">
                        <img
                            className="navImage"
                            src="https://media-public.canva.com/MACF3-J8ZPM/1/thumbnail_large.png"
                            alt="Home page"
                        />
                    </li>
                </Link>

                {props.loggedin ? < Link style={navStyle} to="/postadeal">
                    <li className="navButtons">
                        <img
                            className="navImage"
                            src="https://media-public.canva.com/MABokBeUXA8/1/thumbnail.png"
                            alt="Home page"
                        />
                    </li>
                </Link> : ""}

                <Link style={navStyle} to="/login">
                    <li>
                        <img
                            className="navImage"
                            src="https://media-public.canva.com/MABWubh33d0/1/thumbnail.png"
                            alt="Login Key"
                        />
                    </li>
                </Link>
            </ul>
        </nav >
    );
}

export default NavBar;