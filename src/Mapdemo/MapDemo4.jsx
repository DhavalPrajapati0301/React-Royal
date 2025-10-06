import React from 'react'

function MapDemo4() {

var employees = [
    {
      id: 1,
      name: "ram",
      age: 26,
      salary: 34000,
      city: "ahmedabad",
      gender: "male",
    },
    {
      id: 2,
      name: "seeta",
      age: 24,
      salary: 32000,
      city: "ahmedabad",
      gender: "female",
    },
    {
      id: 1,
      name: "sukanya",
      age: 26,
      salary: 38000,
      city: "mumbai",
      gender: "female",
    },
    {
      id: 1,
      name: "arjun",
      age: 23,
      salary: 30000,
      city: "pune",
      gender: "male",
    },
  ];

  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo4</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>SALARY</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp)=>{

                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td style={{color:emp.salary>35000 && "red"}}>{emp.salary}</td>
                            <td>{emp.city}</td>
                            <td style={{backgroundColor:emp.gender =="female" && "pink"}}>{emp.gender}</td>
                        </tr>

                
                    })
                }
            </tbody>
        </table>

        </div>
  )
}

export default  MapDemo4