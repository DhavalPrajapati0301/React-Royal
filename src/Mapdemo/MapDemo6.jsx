import React from 'react'

function MapDemo6() {

var shopping = [
       {
      "item": "Milk",
      "quantity": 2,
      "price": 1000
    },
    {
      "item": "Bread",
      "quantity": 1,
      "price": 2000
    },
    {
      "item": "Eggs",
      "quantity": 12,
      "price": 3000
    }
]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo6</h1>
        <table className='table table-dark'>
          <thead>
            <tr>
              
              <th>Item</th>
              <th >Quentity</th>
              <th>price</th>
            </tr>
          </thead>

          <tbody>
            {
              shopping.map((shop) =>{
                return (
                  <tr>
                    <td>{shop.item}</td>
                    <td style={{color:shop.quantity > 1 && "red"}}>{shop.quantity}</td>
                    <td style={{backgroundColor:shop.price>1000 && "lightcoral"
                    }}>{shop.price}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        </div>
  )
}

export default MapDemo6