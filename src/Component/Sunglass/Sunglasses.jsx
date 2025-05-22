import { useEffect, useState } from "react";
import Sunglass from "./Sunglass";
import './Sunglasses.css'
const Sunglasses = () => {
    const [sunglasses, setSunglasses] = useState([])

    useEffect(()=>{
        fetch('sunglass.json')
        .then(res=>res.json())
        .then(data=>setSunglasses(data))
    }, [])
    return (
        <div>
            <h2>Sunglasses</h2>
            <div className="sunglass-container">
              {
                sunglasses.map(sunglass=><Sunglass key={sunglass.id} sunglass={sunglass}></Sunglass>)
              }
            </div>
        </div>
    );
};

export default Sunglasses;