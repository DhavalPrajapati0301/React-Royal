import React from 'react'
// import React from 'props'
export const BooksList = (props) => {
  return (
    <div>
        <h1>BooksList</h1>
        <table className='table table-striped table-bordered table-hover text-center align-middle'>
            <thead className='table-dark'>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>RATINGS</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.books.map((book)=>{
                        return <tr>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.price}</td>
                            <td>{book.ratings}</td>
                            <td>
                                <button onClick={()=>{props.deleteBook(book.id)}} className='btn btn-danger'>DELETE</button>

                            </td>
                        </tr>

                    })
                }
            </tbody>

        </table>

    </div>
  )
}
