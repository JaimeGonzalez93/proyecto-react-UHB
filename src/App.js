import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Anime from "./Pages/Anime/Anime";
import Manga from "./Pages/Manga/Manga";
import AnimeDetail from "./Pages/anime-detail/AnimeDetail";
import MangaDetail from "./Pages/Manga-Detail/MangaDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Anime" element={<Anime />} />
        <Route path="/Manga" element={<Manga />} />
        <Route path="/Anime/:id" element={<AnimeDetail />} />
        <Route path="/Manga/:id" element={<MangaDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
