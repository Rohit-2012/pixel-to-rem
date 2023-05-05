import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [pixel, setPixel] = useState(0)

  const handleChange = (e)=>{
    setPixel(e.target.value)
  }

  return (
    <div>
      <h1>PIXEL TO REM CONVERSION</h1>
      <label htmlFor="pixel">Px:</label>
     <input name='pixel' type="text" value={pixel} onChange = {handleChange}/>
     <br/>
     <br/>
     <label htmlFor="rem">rem:</label>
     <input name='rem' type="text" value={pixel/16} placeholder='REM'/>
    </div>
  );
}
