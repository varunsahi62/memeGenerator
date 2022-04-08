import React from "react";

export default function Navbar(){

    return(
        <nav className="navbar-style">
            <div className="nav-part1">
                <img src="./images/logo.png" alt="logo" />
                <h3> meme Generator </h3>
            </div>
            <div className="nav-part2">
                <h3> React Study </h3>
            </div>
        </nav>
    )

}