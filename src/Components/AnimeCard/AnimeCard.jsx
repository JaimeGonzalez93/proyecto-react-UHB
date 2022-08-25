import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AnimeCard.scss";

const AnimeCard = () => {
  const BASEURL = "https://api.jikan.moe/v4";

  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    axios.get(`${BASEURL}/anime`).then((res) => {
      const anime = res.data;
      setAnimes(anime.data);
    });
  }, []);

  return (
    <div className="grid">
      {animes.map((anime) => (
        <div className="AnimeList">
          <div className="box">
            
              <img 
              src={anime.images.jpg.image_url} 
              alt={anime.title}
              key={anime.mal_id}
              ></img>
              <h3>
              {anime.title}{" "}
              </h3>
              <Link to={`/Anime/${anime.mal_id}`}>
              <button data={anime.mal_id}>details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimeCard;
