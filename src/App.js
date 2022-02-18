import React, { useEffect, useState } from "react";
import "./App.css";

import { dataProvider } from "./services";
import { FeaturedMovie, MovieRow } from "./components";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await dataProvider.getHomeList();
      console.log(data);
      setMovieList(data);

      const originals = data.filter((e) => e.slug === "originals");
      const randomMovieIdx = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const randomMovie = originals[0].items.results[randomMovieIdx];

      console.log(randomMovie);
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
