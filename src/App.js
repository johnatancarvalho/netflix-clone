import React, { useEffect, useState } from "react";
import "./App.css";

import { dataProvider } from "./services";

import { MovieRow } from "./components/MovieRow";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await dataProvider.getHomeList();
      console.log(data);
      setMovieList(data);
    };

    loadData();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
