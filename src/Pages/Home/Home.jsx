import React from "react";
import { Link } from  "react-router-dom";
import "./Home.style.scss";

const Home = () => {
  return (
    <div>
      <ul className="Home_List">
        <li>
          <Link to="/Manga">
            <button>Manga</button>
          </Link>
        </li>
        <li>
            <img src="https://logodix.com/logo/2036986.png" alt="logo"></img>
        </li>
        <li>
          <Link to="/Anime">
            <button>Anime</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
