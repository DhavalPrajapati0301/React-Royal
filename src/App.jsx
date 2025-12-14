import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import { Route, Routes } from 'react-router-dom'
import { NetflixMovies } from './netflix/NetflixMovies'
import { NetflixShows } from './netflix/NetflixShows'
import { NetflixHome } from './netflix/NetflixHome'

import { Error404 } from './components/Error404';
import { Navbar } from './components/Navbar';
import { Watch } from './netflix/Watch'
import { Users } from './Props/Users'
import { Employee } from './Props/Employee'
import { Books } from './Props/Books'
import { FormValidation } from './form/FormValidation'
import { FormValidation1 } from './form/FormValidation1'
import { FormValidation2 } from './form/FormValidation2'
import { FormValidation3 } from './form/FormValidation3'
import { PatternValidate } from './form/PatternValidate'
import { CheckBox } from './form/CheckBox'
import { FormValidation5 } from './form/FormValidation5'
import { JobApplicationForm } from './form/JobApplicationForm'
import { PasswordMatch } from './form/PasswordMatch'
import { ApiDemo1 } from './api/ApiDemo1'
import { ApiDemo2 } from './api/ApiDemo2'
import { OmdbApi } from './api/OmdbApi'
import { MovieDetail } from './api/MovieDetail'
import { ApiPostDemo } from './api/ApiPostDemo'
import { ApiPostForm } from './api/ApiPostForm'
import { APIProductPost } from './api/APIProductPost'
import { UpdateUser } from './api/UpdateUser'
import { Login } from './api/Login'
import { Flip, ToastContainer, Zoom } from 'react-toastify'
import { ApiDemoTokenSet } from './api/ApiDemoTokenSet'
import { UseRefDemo } from './components/UseRefDemo'
import { UseRefDemo2 } from './components/UseRefDemo2'
import { UseMemoDemo } from './components/UseMemoDemo'

// import { UseState } from './components/UseState'

function App() {
  // var title = "React" 
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
      <Navbar></Navbar>
      <Routes>
        <Route path='/watch/:name' element={<Watch />}></Route>
        <Route path='/netflixhome' element={<NetflixHome />}> </Route>
        <Route path='/netflixmovie' element={<NetflixMovies />}> </Route>
        <Route path='/netflixshows' element={<NetflixShows />}> </Route>
        <Route path='/user' element={<Users />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
        <Route path='/*' element={<Error404 />}></Route>
        <Route path='/book' element={<Books />}></Route>
        <Route path='/formvalidation' element={<FormValidation />}></Route>
        <Route path='/formvalidation1' element={<FormValidation1 />}></Route>
        <Route path='/formvalidation2' element={<FormValidation2 />}></Route>
        <Route path='/formvalidation3' element={<FormValidation3 />}></Route>
        <Route path='/patternvalidate' element={<PatternValidate />}></Route>
        <Route path='/checkbox' element={<CheckBox />}></Route>
        <Route path='/formvalidation5' element={<FormValidation5 />}></Route>
        <Route path='/jobapplication' element={<JobApplicationForm />}></Route>
        <Route path='/passwordmatch' element={<PasswordMatch />}></Route>
        <Route path='/apifetch' element={<ApiDemo1 />}></Route>
        <Route path='/apifetch1' element={<ApiDemo2 />}></Route>
        <Route path='/omdbapi' element={<OmdbApi />}></Route>
        <Route path='/moviedetail/:id' element={<MovieDetail />}></Route>
        <Route path='/postapi/' element={<ApiPostDemo />}></Route>
        <Route path='/postapiform/' element={<ApiPostForm />}></Route>
        <Route path='/postproductapi/' element={<APIProductPost />}></Route>
        <Route path='/postproductapi/:id' element={<APIProductPost />}></Route>
        <Route path='/updateuser/:id' element={<UpdateUser />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/tokenset' element={<ApiDemoTokenSet/>}></Route>
        <Route path='/useref' element={<UseRefDemo/>}></Route>
        <Route path='/userefcolor' element={<UseRefDemo2/>}></Route>
        <Route path='/usememo' element={<UseMemoDemo/>}></Route>

      </Routes>
    </div>
  )
}
export default App
