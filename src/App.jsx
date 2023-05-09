import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import data from "./data"

export default function App() {
    const cards = data.map(el => {
        return (
            <Card
                key={el.id}
                openSpots={el.openSpots}
                img={"/" + "AirBnb-static-page/" + el.coverImg}
                rating={el.stats.rating}
                reviewCount={el.stats.reviewCount}
                location={el.location}
                title={el.title}
                price={el.price}
            />
        )
    })

    return (
        <>
            <Navbar />
            <Hero />
            <section className="card-container">
                {cards}
            </section>
        </>
    )
}