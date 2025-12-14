import React from 'react'

export const Mapdemo2 = () => {

    var users = [
        { id: "1", name: "dhaval", age: "22", gender: "male" },
        { id: "2", name: "Sapan", age: "25", gender: "male" },
        { id: "3", name: "harsh", age: "20", gender: "male" },
        { id: "4", name: "raj", age: "19", gender: "male" },
    ]
    return (
        <div style={{textAlign:"center"}}>
             <h1>Mapdemo2</h1>
        {
            users.map((user) =>{
                return <h1>{user.id} - {user.name} {user.age} {user.gender}</h1>
            })
        }
        </div>

    )
}

