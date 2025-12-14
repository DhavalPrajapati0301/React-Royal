import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const OmdbApi = () => {

    const [movies, setmovies] = useState([])
    const [query, setquery] = useState("")

    const searchMovie = async()=>{
        const res = await axios.get(`http://www.omdbapi.com?apikey=34c2295a&s=${query}`)
        console.log("Omdb Api response", res.data)
        setmovies(res.data.Search)
    }

  return (
    <div style={{textAlign: "center"}}>
        <h1>OmdbApi
            </h1>
        <input type="text" placeholder='Search Movie' value={query} onChange={(e)=>setquery(e.target.value)} />
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      
        <button className='btn' onClick={searchMovie}>Search Movie</button>
        </div>
        {/* <table className='user-table' style={{margin: "20px auto"}}>
            <thead>
                <tr>
                    <th>IMDB ID</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Poster</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies?.map((movie) => (
                        <tr >
                            <td>{movie.imdbID}</td>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>{movie.Type}</td>
                            <td><img src={movie.Poster} alt={movie.Title} width="100"/></td>
                        </tr>
                    ))
                }
            </tbody>
        </table> */}

        {/* give me this in card format in one row 3 card will display  */}

        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "20px"}}>
            {
                movies?.map((movie) => (
                    <div key={movie.imdbID} style={{border: "1px solid #ccc", borderRadius: "8px", padding: "10px", margin: "10px", width: "200px", textAlign: "center"}}>
                        <Link to={ `/moviedetail/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
                        <img src={movie.Poster} alt={movie.Title} width="150" style={{borderRadius: "8px"}}/>
                        </Link>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                        <p>{movie.Type}</p>
                    </div>
                ))
            }
                </div>


        </div>


  )
}
