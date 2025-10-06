import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1> NetflixMovies
        </h1>
      <ul>
        <li> 
         <Link to="/watch/vikram">Vikram</Link> 
         </li>
                 <li> 
         <Link to="/watch/war2">War2</Link> 
         </li>
                 <li> 
         <Link to="/watch/coolie">Coolie</Link> 
         </li>
      </ul>

      </div>
  )
}
