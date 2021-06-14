import MovieItem from "./MovieItem";

import { useState } from "react";
import { useSelector } from "react-redux";
const WatchedList = (props) => {
  const watchedMovie = useSelector((state) => state.movies);
  console.log(watchedMovie);
  const [query, setQuery] = useState("");
  const mList = watchedMovie
    .filter(
      (movie) =>
        movie.watched === true &&
        movie.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);

  console.log(mList);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search movie"
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>

      {mList}
    </div>
  );
};
export default WatchedList;
