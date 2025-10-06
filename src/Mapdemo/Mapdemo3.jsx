import React from 'react'

function  Mapdemo3() {

var users = [
        { id: "1", name: "dhaval", age: "22", gender: "male" },
        { id: "2", name: "Sapan", age: "25", gender: "male" },
        { id: "3", name: "harsh", age: "20", gender: "male" },
        { id: "4", name: "raj", age: "19", gender: "male" },
    ]


  return (
    <div style={{textAlign:"center"}}>
        <h1>Mapdemo3</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>                            
                            </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Mapdemo3