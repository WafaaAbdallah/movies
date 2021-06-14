import { useDispatch } from "react-redux";
import { deleteMovie } from "../store/actions";
const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <li>
        {movie.name}
        <button onClick={() => dispatch(deleteMovie(movie.id))}> delete</button>
      </li>
    </div>
  );
};

export default MovieItem;
