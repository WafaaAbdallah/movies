import data from "../data";
import { DELETE_MOVIE } from "./actions";
const initialState = {
  movies: data,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      const newMovies = state.movies.filter(
        (movie) => movie.id !== action.payload.movieID
      );
      return { ...state, movies: newMovies };

    // case ADD_MOVIE_TO_WATCHLIST:
    //   const insertMovie= state.movies.
    //     case "ADD_MOVIE_TO_WATCHLIST":
    //       return {
    //         ...state,
    //         watchlist: [action.payload, ...state.watchlist],
    //       };
    //     case "REMOVE_MOVIE_FROM_WATCHLIST":
    //       return {
    //         ...state,
    //         watchlist: state.watchlist.filter(
    //           (movie) => movie.id !== action.payload
    //         ),
    //       };
    //     case "ADD_MOVIE_TO_WATCHED":
    //       return {
    //         ...state,
    //         watchlist: state.watchlist.filter(
    //           (movie) => movie.id !== action.payload.id
    //         ),
    //         watched: [action.payload, ...state.watched],
    //       };
    //     case "MOVE_TO_WATCHLIST":
    //       return {
    //         ...state,
    //         watched: state.watched.filter(
    //           (movie) => movie.id !== action.payload.id
    //         ),
    //         watchlist: [action.payload, ...state.watchlist],
    //       };
    //     case "REMOVE_FROM_WATCHED":
    //       return {
    //         ...state,
    //         watched: state.watched.filter((movie) => movie.id !== action.payload),
    //       };
    default:
      return state;
  }
};
export default reducer;
