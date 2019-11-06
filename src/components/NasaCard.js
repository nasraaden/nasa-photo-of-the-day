import React from "react";

const NasaCard = props => {
    return (
        <div className="photo-card">
            <h2>{props.title}</h2>
            <img src={props.image} />
            <p>{props.date}</p>
            <p>{props.explanation}</p>
        </div>
    )
} 

export default NasaCard;