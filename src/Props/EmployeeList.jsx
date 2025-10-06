import React from 'react'

export const EmployeeList = (props) => {
  console.log("EmployeeList props:", props);

  return (
    <div style={{ textAlign: "center", color: "darkgoldenrod" }}>
      <h2>Employee List</h2>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
              props.empl.map((emp) => (
                <tr >
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.salary}</td>
                </tr>
              ))
           
            
          }
        </tbody>
      </table>
    </div>
  )
}
