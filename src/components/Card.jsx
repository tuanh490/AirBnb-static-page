import React from "react";
import star from "/star.png"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="card">
            <div className="card-thumbnail">
                {badgeText && <div className="card-status">{badgeText}</div>}
                <img src={props.coverImg} alt="" className="card-img" />
            </div>
            <div className="card-info">
                <p className="card-rating">
                    <img src={star} alt="" className="star" />
                    <small>{props.rating} <span className="">({props.stats.reviewCount}) &#x2022; {props.location}</span></small>
                </p>
                <p className="card-title">
                    {props.title}
                </p>
                <p className="card-price">
                    <b>From ${props.stats.price}</b> / person
                </p>
            </div>
        </section>
    )
}