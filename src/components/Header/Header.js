import React, { useState } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
    const [isToggleOn, setIsToggleOn] = useState(false);

    function handleOpenMenu() {
        setIsToggleOn(!isToggleOn);
    }

    return (
        <header className={isToggleOn === true ? "header menu-open" : "header"}>
            <div className="container">
                <nav className="nav">
                    <Link to="/" className="logo">
                        <img
                            src={require("../../assets/images/logo.png")}
                            alt="Not found images"
                            className="logo-image"
                        />
                    </Link>
                    <div className="hamburger-menu" onClick={handleOpenMenu}>
                        <i className="fa fa-bars open-state"></i>
                        <i className="fa fa-times close-state"></i>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                exact
                                activeStyle={{
                                    color: "#fa9e2c",
                                }}
                                className="nav-link"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/rooms"
                                exact
                                activeStyle={{
                                    color: "#fa9e2c",
                                }}
                                className="nav-link"
                            >
                                Rooms
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/rooms/:slug"
                                activeStyle={{
                                    color: "#fa9e2c",
                                }}
                                className="nav-link"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                activeStyle={{
                                    color: "#fa9e2c",
                                }}
                                className="nav-link"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Offers
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
