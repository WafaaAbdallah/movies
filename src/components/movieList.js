import data from "./data"
import {useSelector} from "react"
import movieItem from "./movieItem"
const movieList = (props) => {
  const [query, setQuery] = useState("");
const data = useSelector((state) => state.data);
  const list = data
    .filter((data) => data.name.includes(query))
    .map((data) => <movieItem data={data} key={data.id} />);
}
export default movieList;