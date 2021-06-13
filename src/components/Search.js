import  { useState } from 'react'

const Search = ({  }) => {
  const [text, setText] = useState('')

  }

  return (
    
      <form>
        <input
          type='text'
          placeholder='Search movie'
          onChange={(event) => onChange(event.target.value)}
       
        />
      </form>
   
  )
}

export default Search