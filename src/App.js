import {useState, useEffect, createContext} from 'react'
import Body from './components/Body'

export const dataContext = createContext()

function App(){
  const [data, setData]=useState([])

  useEffect(()=>{
    setData([{
      id: 3,
      picture: "https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/cappucinos.png",
      product_name: "Cappucino",
      price: 5000,
      qty: 1,
    }],)
  },[])

  useEffect(()=>{
    alert('data ditambahkan')
  },[data])

  // const changeName = ()=>{
  //   setData({
  //   ...data,
  //   name: "Rick Astley"
  //   })
  // }
  // const changeAlmt = ()=>{
  //   setData({
  //   ...data,
  //   alamat: "Astleystreet"
  //   })
  // }
  // const changePhone = ()=>{
  //   setData({
  //   ...data,
  //   phone: "893842"
  //   })
  // }
  // const changeHobby = ()=>{
  //   setData({
  //     ...data,
  //     hobby: [...data.hobby, "mandi"]
  //   })
  // }
    return (
      <div className="App">
        Latihan
        <br/>
        {/* <h1>{data.name}</h1>
        <button onClick={changeName}>ChangeName</button>
        <br/>
        <h1>{data.alamat}</h1>
        <button onClick={changeAlmt}>ChangeAlamat</button>
        <br/>
        <h1>{data.phone}</h1>
        <button onClick={changePhone}>ChangePhone</button>
        <br/>
        <h1>Hobby:{data.hobby.map((e)=>e)}</h1>
        <button onClick={changeHobby}>changeHobby</button>
        <br/> */}
        <dataContext.Provider value={data}>
          <Body nama="Budi"/>
        </dataContext.Provider>
      </div>
    );
}

export default App;
