import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Navigator = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Anime">Anime</Link>
          </li>
          <li>
            <Link to="/Manga">Manga</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigator;
