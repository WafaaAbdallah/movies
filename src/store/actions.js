export const DELETE_MOVIE = "DELETE_MOVIE";
export const deleteMovie = (movieID) => {
  return {
    type: DELETE_MOVIE,
    payload: { movieID },
  };
};
export const ADD_MOVIE_TO_WATCHLIST = "ADD_MOVIE_TO_WATCHLIST";
export const addMovie = (movieID) => {
  return {
    type: ADD_MOVIE_TO_WATCHLIST,
    payload: { movieID },
  };
};
