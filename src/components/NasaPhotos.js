import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";


export default function NasaPhotos() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=Un1jlMLB9a2w7EodSSUnmxr1kPVSqQZ0GNNaLCvs')
        .then(response => {
            console.log(response);
            setPhotos(response.data);
        })
        .catch(error => {
            console.log("Sorry, no photos.", error)
        })
    }, [])
    console.log(photos);

    return (
        <div className="container">
                <NasaCard 
                photos={photos}
                title={photos.title}
                date={photos.date} 
                explanation={photos.explanation}
                image={photos.hdurl}
                />
        </div>
    );   
}
