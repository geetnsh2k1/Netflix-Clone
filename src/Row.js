import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./Row.css"

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {modalActionCreators} from "./state/actions/index"

export default function Row(props) {

    const [movies, setMovies] = useState(null)

    const dispatch = useDispatch()
    const { SET, OPEN } = bindActionCreators(modalActionCreators, dispatch)


    const handle = (e) => {
        SET({movie_id:e.target['alt']})
        OPEN()
    }

    useEffect(() => {
        const fetch = async() => {
            const request = await axios.get(props.url)
            setMovies(request.data.results ? request.data.results : request.data.items)
            return request
        }
        fetch()
    }, [props.url])

    return (
        <div className="row">
            <div className="title">{props.title}</div>
                
            <div className="movie__images">
            {
                movies?
                movies.map((movie) => (
                    props.large ?
                    movie.poster_path ? 
                    
                    <img src={`https://image.tmdb.org/t/p/original/${props.large ? movie.poster_path : movie.backdrop_path}`} alt={movie.id}  className={`movie__image ${props.large && "large"}`} onClick={handle}/> 
                    
                    : "" :

                    movie.backdrop_path ? 
                    
                    <img src={`https://image.tmdb.org/t/p/original/${props.large ? movie.poster_path : movie.backdrop_path}`} alt={movie.id}  className={`movie__image ${props.large && "large"}`} onClick={handle}/>
                    
                    : "" 
                ))
                :""
            }
            </div>

        </div>
    )
}
