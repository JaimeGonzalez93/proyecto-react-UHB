import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom"
import "./MangaDetail.scss"
const MangaDetail = () => {
    const {id} = useParams();

    const BASEURL = "https://api.jikan.moe/v4";

    const [mangasID, setMangaID] = useState([]);

    useEffect(() => {
        fetch(`${BASEURL}/manga/${id}`)
          .then(response => response.json())
          .then(data => setMangaID(data))
         }, [id]);

         console.log(mangasID);
    return(
        <div>
        <img src={mangasID.data?.images.webp.large_image_url} alt={mangasID.data?.title}></img>
        <h2>{mangasID.data?.title}</h2>
        
        <p>RANK:{mangasID.data?.rank}</p>
        <p>Score:{mangasID.data?.score}</p>
        <p>Episodes: {mangasID.data?.episodes}</p>
        <p>Duration: {mangasID.data?.duration}</p>
        <h3>Synopsis</h3>
        <p>{mangasID.data?.synopsis}</p>
        <p>Aired</p>
        <p>From: </p>
        </div>
    )
}

export default MangaDetail