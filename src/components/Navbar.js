
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
                {props.loggedin ? < Link style={navStyle} to="/postadeal">
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
                </Link> : ""}

                <Link style={navStyle} to="/deals">
                    <li>
                        <div className="tooltip-on-hover">
                            <img
                                className="navImage"
                                src="https://media-public.canva.com/MABG-ySdtoA/1/thumbnail.png"
                                alt="alldealspage"
                            />
                        </div>
                        <div className="tooltip">Deals</div>
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
                <Link style={navStyle} to="/login">
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

                {/* <Link style={navStyle} to="/login"> */}
                <li>
                    <div className="tooltip-on-hover">
                        <img
                            className="navImage"
                            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.iconbunny.com%2Ficons%2Fmedia%2Fcatalog%2Fproduct%2F6%2F1%2F619.7-logout-icon-iconbunny.jpg&imgrefurl=https%3A%2F%2Fwww.iconbunny.com%2Ficons%2Fadmin-dashboard-logout-flat-round-corner-icon&docid=5liPziaNn6zRtM&tbnid=L_mRgvY4p23uLM%3A&vet=12ahUKEwiqiIbT19zjAhWyuXEKHdRfCMU4ZBAzKD8wP3oECAEQQQ..i&w=1024&h=1024&bih=622&biw=1280&q=icon%20logout&ved=2ahUKEwiqiIbT19zjAhWyuXEKHdRfCMU4ZBAzKD8wP3oECAEQQQ&iact=mrc&uact=8"
                            alt="Login Key"
                        />
                    </div>
                    {/* <div className="tooltip"> */}
                    <button onClick={props.miao}>Logout </button>
                    {/* </div> */}
                </li>
                {/* </Link> */}
            </ul>
        </nav >
    );
}

export default NavBar;