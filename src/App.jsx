import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import { Route, Routes } from 'react-router-dom'
import { NetflixMovies } from './netflix/NetflixMovies'
import { NetflixShows } from './netflix/NetflixShows'
import { NetflixHome } from './netflix/NetflixHome'

import {Error404}  from './components/Error404';
import {Navbar}  from './components/Navbar';
import { Watch } from './netflix/Watch'
import { Users } from './components/Users'

// import { UseState } from './components/UseState'

function App() {  
var title = "React" 
  return (
    <div>
      <Navbar title = {title}/>
      <Routes>
        <Route path='/watch/:name' element={<Watch/>}></Route>
        <Route  path='/netflixhome' element={<NetflixHome/>}> </Route>
        <Route  path='/netflixmovie' element={<NetflixMovies/>}> </Route>
        <Route  path='/netflixshows' element={<NetflixShows/>}> </Route>
        <Route path='/user' element={<Users/>}></Route>
        <Route path='/*'  element={<Error404/>}></Route>
      </Routes>
    </div>
  )
}
export default App
