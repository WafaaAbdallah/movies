import data from "./data"
const movieItem = ({ data }) => {
  return (
    
     <div>
          <ul>
            <li>
               <img src={data.img} alt='movie image' />
            </li>
            <li>
             {data.name}
            </li>
         </div>   
       
  )
}

export default movieItem
