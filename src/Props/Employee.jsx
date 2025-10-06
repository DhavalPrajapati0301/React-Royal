import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employee = () => {

    const empl = [
        {
            id: 1,
            name: "Dhaval",
            salary: 40000
        },
        { 
            id: 2, 
            name: "Meet", 
            salary: 35000 
        },
        { 
            id: 3, 
            name: "Raj", 
            salary: 50000 
        }
    ]

    return (
        <div style={{ textAlign: "center", color: "black" }}>
            <h1>Employee</h1>
            <EmployeeList empl={empl} />
        </div>
    )
}
