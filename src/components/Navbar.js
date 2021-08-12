import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../App'

const Navbar=(props)=>{
  const context = useContext(dataContext)
  return(
    <div>
      <h1>Navbar</h1>
      {context.map((e)=>{
        return(
          <div>
          <h1>Id:{e.id}</h1>
          <h1>Qty: {props.qty}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Navbar;