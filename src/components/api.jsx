import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import YouTube from 'react-youtube';

function CardsNavi(){
    let[trailer, settrailer]= useState()
  let Location = useLocation()
    let specificMovie = Location.state.cards
    async function getTrailer(id) {
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=4010f125677ceb848cba3ea144e40c8c`).then(x=>x.json()).then(x=>settrailer(x.results[0].key))
        
    }
    return(
        <>
        <div>
            <img src={`https://image.tmdb.org/t/p/original/${specificMovie.backdrop_path}`} style={{width:1000 , height: 500, paddingLeft:30, paddingTop:30,    }} />
            <h3 style={{paddingLeft:30}}>{specificMovie.title} </h3>
            <p style={{paddingLeft:30}}>{specificMovie.overview}</p>
            <button onClick={()=>getTrailer(specificMovie.id)} style={{backgroundColor:"blue", margin:30, width:145, height:38, borderRadius:5, color: "white", }}>play trailer</button>
        </div>
        <div style={{marginLeft:30, }}>
           { trailer && <YouTube videoId="{trailer}"  />}
        </div>
        </>
    )
}
export default CardsNavi