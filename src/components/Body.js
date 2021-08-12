import Nav from '../components/Navbar'
import { useContext } from 'react'
import { dataContext } from '../App'
const Body=(props)=>{

  const context = useContext(dataContext)
  return(
    <div>
      <Nav qty="2"/>
      <h1>Pembeli: {props.nama}</h1>
      {context.map((e)=>{
        return(
          <div>
            <img src={e.picture}></img>
            <h1>{e.product_name}</h1>
            <h1>{e.price}</h1>
          </div>
        )
      })}
    </div>
  )

}

export default Body;