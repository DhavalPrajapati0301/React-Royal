import React from "react";

export const Content = () => {
      //javascript
      var name = "India"
      var age = 77
      var isSuperPower = true;
      var user ={
        name:"RAM",
        age:23
      }
  return (
    <div>
      <h1 style={{background:"darkblue", height:"100px"}}>CONTENT</h1>
      <h1>Rule 1: at a time we can return only 1 tag</h1>
      <h1>Rule 2: every tag must have closing tag</h1> 
      <h2>
        Rule / con : whatever has been written inside return() statement, only
        will display to browser
      </h2>
      <h1>Hello</h1>   
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      </div>
  );
};