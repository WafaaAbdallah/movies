import MovieItem from "./MovieItem";
import movies from "../data";
import { useState } from "react";
import { useSelector } from "react-redux";
const UnWatchedList = (props) => {
  const unWatchedMovie = useSelector((state) => state.movies);

  const [query, setQuery] = useState("");
  const uList = unWatchedMovie
    .filter(
      (movie) =>
        movie.watched === false &&
        movie.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);

  console.log(uList);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search movie"
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>

      {uList}
    </div>
  );
};
export default UnWatchedList;
