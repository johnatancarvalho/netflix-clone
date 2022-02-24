import React, { useEffect, useState } from "react";
import "./App.css";

import { dataProvider } from "./services";
import { FeaturedMovie, MovieRow, Header } from "./components";

import NetflixLoading from "../src/assets/img/netflix_loading.gif";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      // Fetching movie lists data
      const data = await dataProvider.getHomeList();
      setMovieList(data);

      // Fetching featured movie. Skips movies that do not contains backdrop image
      const originals = data.filter((e) => e.slug === "originals")[0];
      const filtered = originals.items.results.filter(
        (e) => e.backdrop_path && e.overview && e.overview !== ""
      );

      const randomIdx = Math.floor(Math.random() * (filtered.length - 1));
      const featured = filtered[randomIdx];
      const featuredInfo = await dataProvider.getMovieInfo(featured.id, "tv");

      setFeaturedMovie(featuredInfo);
    };

    loadData();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else setBlackHeader(false);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {movieList.length === 0 && !featuredMovie && (
        <div className="loader">
          <img src={NetflixLoading} alt="Loading..."></img>
        </div>
      )}

      {featuredMovie && <FeaturedMovie item={featuredMovie} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <span role="img" aria-label="-">
          ⛏️
        </span>
        Created by Johnatan C Souza <br />
        <span role="img" aria-label="-">
          ©️
        </span>
        All rights reserved to Netflix <br />
        <span role="img" aria-label="-">
          📀
        </span>
        Data fetched from themoviedb.org <br />
      </footer>
    </div>
  );
}

export default App;
