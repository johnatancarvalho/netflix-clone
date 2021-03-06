import { useEffect, useState } from "react";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ item }) => {
  const [rating, setRating] = useState(null);

  const genres = item.genres.map((e) => e.name);

  const match = Math.floor(Math.random() * (97 - 82)) + 82;

  const overview = item.overview.split(". ").slice(0, 2).join(". ");

  const ratings = Object.freeze({
    12: "#f7c727",
    14: "#e6792a",
    16: "#d7262e",
  });
  // Content rating is genrated randomly.
  useEffect(() => {
    const sample = [14, 14, 16];
    setRating(sample[Math.floor(Math.random() * sample.length)]);
  }, [item]);

  return (
    <section
      className="featured"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.name}</div>
          <div className="featured--info">
            <div className="featured--score">{match}% match</div>
            <div className="featured--year">
              {new Date(item.first_air_date).getFullYear()}
            </div>
            <div
              className="featured--rating"
              style={{
                backgroundColor: ratings[rating],
              }}
            >
              {rating}
            </div>
            <div className="featured--seasons">
              {item.number_of_seasons} season{item.number_of_seasons > 1 && "s"}
            </div>
          </div>
          <div className="featured--overview">
            {overview}
            {overview.slice(-1) !== "." && "."}
          </div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--buttons-watch">
              ► Play
            </a>
            <a
              href={`/list/add/${item.id}`}
              className="featured--buttons-mylist"
            >
              + My list
            </a>
          </div>
          <div className="featured--genres">
            <strong>Genres: </strong>
            {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
