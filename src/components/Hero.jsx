import React from "react"
import photoGrid from "/photo-grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={photoGrid} alt="" className="photo-grid" />
            <section className="description">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities
                    led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </div>
    )
}