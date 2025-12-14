import React from 'react'
import { MyButton } from '../common/MyButton'

export const NetflixHome = () => {

  const netflixhometest =()=>{
    alert("I am netflix Home")
  }

  return (
    <div style={{textAlign:"center"}}>
      <MyButton fun={netflixhometest} name="btn1" class="btn btn-danger"></MyButton>
       <h1> NetflixHome
        </h1>
       </div>
  )
}
