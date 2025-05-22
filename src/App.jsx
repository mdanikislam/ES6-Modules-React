
import { useState } from 'react'
import './App.css'
import Sunglasses from './Component/Sunglass/Sunglasses'
import Watches from './Component/Watch/watches'


function App() {


const [activeComponents, setActiveComponents] = useState([])
  return (
    <>
   <div>
    <button onClick={()=>setActiveComponents("watches")} >Watche</button>
    <button onClick={()=>setActiveComponents("sunglasses")}>Sunglass</button>
   </div>
   {activeComponents === "watches" && <Watches/>}
   {activeComponents === "sunglasses" && <Sunglasses/>}

    
    {/* <Watches></Watches> */}
   {/* <Sunglasses></Sunglasses> */}
    </>
  )
}

export default App
