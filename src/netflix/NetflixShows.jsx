import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {

  
const shows = [
    {
        id:1,
        name:"Squid Game"
    },
    {
        id:2,
        name:"Alic in Borderland"
    },
    {
        id:3,
        name:"Money Heist"
    },
    {
        id:4,
        name:"Mirzapur"
    },
    {
      id:5,
      name:"Wednesday"
    },
    {
      id:6,
      name:"11:11"
    }

]
  return (
    <div style={{textAlign:"center"}}>
        
       <h1> NetflixShows
        </h1>

               <ul>
                    {
                        shows.map((show)=>{
                            return <li>
                                <Link to={`/watch/${show.name}`}>{show.name}</Link>
                            </li>
                        })
                    }
                </ul>
       </div>
  )
}
