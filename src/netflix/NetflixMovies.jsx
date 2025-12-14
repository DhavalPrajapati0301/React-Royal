import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../common/MyButton'

export const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1> NetflixMovies
        </h1>
        <MyButton name="btn 3"></MyButton>
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
