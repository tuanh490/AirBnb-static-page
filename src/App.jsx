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
                img={"/" + el.coverImg}
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
                <Card
                    key={1}
                    openSpots={0}
                    img="/katie-zaferes.png"
                    rating="5.0"
                    reviewCount={2}
                    location="Online"
                    title="cool"
                    price={12}
                />
            </section>
        </>
    )
}