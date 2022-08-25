import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MangaCard.scss";

const MangaCard = () => {
  const BASEURL = "https://api.jikan.moe/v4";

  const [mangas, setMangas] = useState([]);
  useEffect(() => {
    axios.get(`${BASEURL}/manga`).then((res) => {
      const manga = res.data;
      setMangas(manga.data);
    });
  }, []);

  return (
    <div className="manga-list">
      {mangas.map((manga) => (
        <div className="MangaList">
          <div className="box">
           
                <img
                  src={manga.images.jpg.image_url}
                  alt={manga.title}
                  key={manga.mal_id}
                ></img>
                <h3>
                {manga.title}
                </h3>
                <Link to={`/Manga/${manga.mal_id}`}>
                <button data={manga.mal_id}>details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MangaCard;
