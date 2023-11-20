
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [pos, setPos] = useState('') 
  useEffect(()=>{
    window.addEventListener('mousemove',e=>{
      setPos(e.clientX+","+e.clientY)
    })
  })
  return (
    <div>
        {/* Do not remove the main div */}
        <p>The mouse position is {pos}</p>
    </div>
  )
}

export default App
