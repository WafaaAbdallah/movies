import {useSelector} from "react-redux"
import MovieItem from "./MovieItem"
import {useState} from "react"
import Search from "./Search"
const MovieList = (props) => {
  const [query, setQuery] = useState("");
const movies = useSelector((state) => state.movies);
  
  const list = movies
    .filter((movie) => movie.name.includes(query))
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);
    return(
        <div>
        <Search setQuery={setQuery}/>
        {list}
        </div>
    )
}
export default MovieList;