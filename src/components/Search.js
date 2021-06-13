import  { useState } from 'react'

const Search =(props) => {
return (
      <form>
        <input
          type='text'
          placeholder='Search movie'
          onChange={(event) => props.setQuery(event.target.value)}
        />
      </form>
   
  )
}

export default Search