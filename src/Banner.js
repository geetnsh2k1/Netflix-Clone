import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from "axios"
import requests from "./request"

export default function Banner() {

    const truncate = (string, length) => {
        return (string.length<length)?string:string.substring(0, length-3)+'...'  
    }

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        async function fetch() {
            const request = await axios.get(requests.netflixOriginals)
            const select = Math.floor(Math.random() * (request.data.results.length-1))
            setMovie(
                request.data.results[
                    select
                ]
            )
            return request
        }
        fetch()
    }, [])

    return (
        <>
            {movie ? 
            <header className="banner" style={{
                backgroundImage: `url("${requests.image}${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "top"
            }}>
                
                <div className="banner__content">
                    
                    <div className="banner__moviename">
                        {
                            movie.title ? movie.title 
                            : 
                            movie.original_title ? movie.original_title :
                            movie.name ? movie.name : "Movie Name" 
                        }
                    </div>

                    <div>
                        <button className="banner__buttons">Play</button>
                        <button className="banner__buttons">My List</button>
                    </div>

                    <div className="banner__description">
                        {
                            truncate(`${movie?.overview}`, 175)
                        }
                    </div>

                </div>

                <div className="fadeBottom"></div>
            </header>
             : <i style={{fontWeight: "lighter"}}>"please refresh the page."</i>} 
        </>
    )
}
