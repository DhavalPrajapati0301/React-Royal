import React from 'react'

export const MyTable = (props) => {
  return (
    <div>MyTable
        <table>
               <thead>
          <tr>
            {
              props.header.map((h)=>{
                return<th>{h}</th>
              })
            }
          </tr>
      </thead>
      <tbody>

      </tbody>
        </table>
    </div>
     )
}
