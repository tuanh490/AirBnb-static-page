import React from "react";
import katieZaferes from "../assets/katie-zaferes.png"
import star from "../assets/star.png"

export default function Card() {
    return (
        <section className="card">
            <div className="card-thumbnail">
                <div className="card-status">Sold out</div>
                <img src={katieZaferes} alt="" className="card-img" />
            </div>
            <div className="card-info">
                <p className="card-rating">
                    <img src={star} alt="" className="star" />
                    <small>5.0 <span className="">(6) &#x2022; USA</span></small>
                </p>
                <p className="card-description">
                    Life lessons with Katie Zaferes
                </p>
                <p className="card-price">
                    <b>From $136</b> / person
                </p>
            </div>
        </section>
    )
}