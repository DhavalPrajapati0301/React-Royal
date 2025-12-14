import React, { useState } from 'react'
import { BooksList } from './BooksList'

export const Books = () => {
    const [books, setbooks] = useState([
        {id:101,name:"Java",price:600,ratings:8.0},
        {id:102,name:"Python",price:900,ratings:7.0},
        {id:103,name:"JS",price:1000,ratings:8.6}
    ]
    )

    const deleteBook =(id)=>{
        const afterdelarray = books.filter((book)=>book.id!=id)
        console.log(afterdelarray)
        setbooks(afterdelarray)
    }
  return (
    <div style={{textAlign:"center"}}><h1 >Books</h1>
        <BooksList books = {books} deleteBook={deleteBook}></BooksList>
    </div>
  )
}
