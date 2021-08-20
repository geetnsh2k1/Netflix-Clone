import React, { useEffect, useState } from 'react';

import "./Card.css"

import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {modalActionCreators} from "./state/actions/index"

import axios from "axios"
import requests from "./request"

export default function MediaControlCard() {

  const state = useSelector((state) => state)

  const dispatch = useDispatch()
  const { CLOSE, SET } = bindActionCreators(modalActionCreators, dispatch)

  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)

  useEffect(() => {
    const fetch = async() => {
      try{
        const request = await axios.get(`https://api.themoviedb.org/3/movie/${state.ModalReducer.movie_id}?api_key=1917e188a4cdfb611baa44823f59ab2b&language=en-US`)
        setMovie(request.data)
        return request 
      }
      catch(err) {
        alert('sorry for inconvenience, data of this movie not available.')
        SET({movie_id:null})
        CLOSE({})
      }
    }
    const fetchTrailer = async() => {
      try{
        const request = await axios.get(`https://api.themoviedb.org/3/movie/${state.ModalReducer.movie_id}/videos?api_key=1917e188a4cdfb611baa44823f59ab2b&language=en-US/`)
        const select = Math.floor(Math.random() * (request.data.results.length-1))
        setTrailer(request.data.results[select]['key'])
        return request 
      }
      catch(err) {
        console.log("Trailer not found!")
      }
    }
    fetch()
    fetchTrailer()
  }, [])

  return (
    <>
    {
      movie ? 

      <div className="card" style={{maxWidth: '540px', maxHeight: '540px', overflowY: 'scroll', minWidth: '270px', }}>
      <div className="row g-0" style={{margin: 0}}>
        <div className="col-md-7">

          {
            trailer
            ?
              <iframe style={{width: "100%", height: "100%"}}
              src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1`} title="POLA">
              </iframe>
            : 
            movie.poster_path ? 
            <img src={`${requests.image}${movie.poster_path}`} className="img-fluid rounded-start" alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            : 
            movie.backdrop_path ?
            <img src={`${requests.image}${movie.backdrop_path}`} className="img-fluid rounded-start" alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            :
            <img src="https://th.bing.com/th/id/OIP.6KCexmP7teZW90lRi_jEWAHaHa?pid=ImgDet&rs=1" className="img-fluid rounded-start" alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
          }

        </div>
        <div className="col-md-5" style={{color: "black"}} >
          <div className="card-body">
            <h3 className="card-title">
            {
              movie.title ? movie.title 
              : 
              movie.original_title ? movie.original_title :
              movie.name ? movie.name : "Movie Name" 
            }
            </h3>
            <p className="card-text" align="left">
            {
              movie.overview ? movie.overview : "Overview"
            }
            </p>
            <p className="card-text"><small className="text-muted">
              {
                movie.release_date ? "Released " + movie.release_date : ""
              }
              </small></p>
          </div>
        </div>
      </div>
    </div>
    
      :
      ""
    }
    </>
  );
}