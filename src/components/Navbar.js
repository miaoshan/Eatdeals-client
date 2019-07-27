
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
                    <div>Eatdeals</div>
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
                            // src="https://media-public.canva.com/MADQ0damsO8/1/thumbnail_large.png"
                            src="https://media-public.canva.com/MADDqtu_8bU/1/thumbnail_large.png"
                            alt="Home page"
                        />
                    </li>
                </Link>

                {props.loggedin ? < Link style={navStyle} to="/postadeal">
                    <li className="navButtons">
                        <img
                            className="navImage"
                            // src="https://media-public.canva.com/MABIMab2NkQ/1/thumbnail.png"
                            // src="https://media-public.canva.com/MAC2kikNtvY/1/thumbnail_large.png"
                            src="https://media-public.canva.com/MAC2kj4UysQ/1/thumbnail_large.png"
                            alt="postdealpage"
                        />
                    </li>
                </Link> : ""}

                <Link style={navStyle} to="/deals">
                    <li>
                        <img
                            className="navImage"
                            src="https://media-public.canva.com/MABG-ySdtoA/1/thumbnail.png"
                            alt="alldealspage"
                        />
                    </li>
                </Link>


                {props.loggedin ? < Link style={navStyle} to="/mydeal">
                    <li className="navButtons">
                        <img
                            className="navImage"
                            src="https://media-public.canva.com/MAC2kmCWEM4/2/thumbnail_large.png"
                            alt="mydealpage"
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