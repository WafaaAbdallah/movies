import WatchedList from "./WatchedList";
import UnWatchedList from "./UnwatchedList";
const MovieList = (props) => {
  return (
    <div>
      <WatchedList />
      <UnWatchedList />
    </div>
  );
};
export default MovieList;
