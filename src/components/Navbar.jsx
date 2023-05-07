import React from "react"
import airBnbLogo from "../assets/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={airBnbLogo} alt="" className="airBnb-logo" />
        </nav>
    )
}