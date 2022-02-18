import React, { useEffect, useState } from "react";
import "./App.css";

import { dataProvider } from "./services";
import { FeaturedMovie, MovieRow } from "./components";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

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
      // todo: remove console logs
      console.log(data);
      console.log(featured);
      console.log(featuredInfo);
    };

    loadData();
  }, []);

  return (
    <div className="page">
      {featuredMovie && <FeaturedMovie item={featuredMovie} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
