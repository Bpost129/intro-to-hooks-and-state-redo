import { useState } from "react"
import { sculptureList } from "./data"

const Gallery = () => {

  const [index, setIndex] = useState(0)
  let sculpture = sculptureList[index]

  function handleClick() {
    setIndex(index + 1)
  }

  return (
    <div className='card'>
      <button onClick={handleClick} >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>{sculpture.description}</p>
    </div>
  )
}

export default Gallery