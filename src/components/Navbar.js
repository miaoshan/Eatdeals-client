
import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
    const navStyle = {
        color: "white"
    };

    console.log(props)
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

                <Link style={navStyle} to="/home">
                    <li className="navButtons">
                        <div className="tooltip-on-hover">
                            <img
                                className="navImage"
                                src="https://media-public.canva.com/MADDqtu_8bU/1/thumbnail_large.png"
                                alt="Home page"
                            />
                        </div>
                        <div className="tooltip">Home</div>
                    </li>
                </Link>

                {/* {props.loggedin ? < Link style={navStyle} to="/postadeal">
                    <li className="navButtons">
                        <div className="tooltip-on-hover">
                            <img
                                className="navImage"
                                src="https://media-public.canva.com/MAC2kj4UysQ/1/thumbnail_large.png"
                                alt="postdealpage"
                            />
                        </div>
                        <div className="tooltip">Post New Deal</div>
                    </li>
                </Link> : ""} */}

                <Link style={navStyle} to="/deals">
                    <li>
                        <div className="tooltip-on-hover">
                            <img
                                className="navImage"
                                src="https://media-public.canva.com/MABG-ySdtoA/1/thumbnail.png"
                                alt="alldealspage"
                            />
                        </div>
                        <div className="tooltip">All Deals</div>
                    </li>
                </Link>
                {props.loggedin ? < Link style={navStyle} to="/mydeal">
                    <li className="navButtons">
                        <div className="tooltip-on-hover">
                            <img
                                className="navImage"
                                src="https://media-public.canva.com/MAC2kmCWEM4/2/thumbnail_large.png"
                                alt="mydealpage"
                            />
                        </div>
                        <div className="tooltip">My Deals</div>
                    </li>
                </Link> : ""}

                {!props.loggedin ? <Link style={navStyle} to="/login">
                    <li>
                        <div className="tooltip-on-hover">
                            <img
                                className="navImage"
                                src="https://media-public.canva.com/MABWubh33d0/1/thumbnail.png"
                                alt="Login Key"
                            />
                        </div>
                        <div className="tooltip">Signup/Login</div>
                    </li>
                </Link>
                    :
                    <Link style={navStyle} to="/login">
                        <li>
                            <div className="tooltip-on-hover">
                                <img
                                    className="navImage"
                                    src="https://www.trzcacak.rs/myfile/detail/37-379821_icon-free-download-png-and-vector-consider-logout.png"
                                    alt="Logout"
                                    onClick={props.miao}
                                />
                            </div>
                            <div className="tooltip">Logout</div>
                        </li>
                    </Link>
                }
            </ul>
        </nav >
    );
}

export default NavBar;