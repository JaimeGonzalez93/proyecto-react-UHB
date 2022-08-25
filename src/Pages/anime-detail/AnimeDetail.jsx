import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AnimeDetail.scss";

const AnimeDetail = () => {
  const { id } = useParams();

  const BASEURL = "https://api.jikan.moe/v4";

  const [animesID, setAnimesID] = useState([]);

  useEffect(() => {
    fetch(`${BASEURL}/anime/${id}`)
      .then((response) => response.json())
      .then((data) => setAnimesID(data));
  }, [id]);

  console.log(animesID);
  return (
    <div className="AnimeDetail">
      <div className="AnimeDetail__item">
        <img
          src={animesID.data?.images.webp.large_image_url}
          alt={animesID.data?.title}
        ></img>
      </div>
      <div className="AnimeDetail__item">
        <h1>{animesID.data?.title}</h1>
        <p>RANK:{animesID.data?.rank}</p>
        <p>Score:{animesID.data?.score}</p>
        <p>Episodes: {animesID.data?.episodes}</p>
        <p>Duration: {animesID.data?.duration}</p>
        <p>Aired</p>
      </div>
      <div className="AnimeDetail__item">
      <h3>Synopsis</h3>
      <p>{animesID.data?.synopsis}</p>
      </div>
    </div>
  );
};

export default AnimeDetail;
