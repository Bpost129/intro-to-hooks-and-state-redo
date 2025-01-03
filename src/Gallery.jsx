import { useState } from "react"
import { sculptureList } from "./data"

const Gallery = () => {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  let sculpture = sculptureList[index]

  function handleClick() {
    setIndex(index + 1)
  }

  function handleMoreClick() {
    setShowMore(!showMore)
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
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </div>
  )
}

export default Gallery