
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [pos, setPos] = useState('') 
  const getMousePosition = (e)=>{
    setPos(e.clientX+","+e.clientY)
  }
  useEffect(()=>{
    window.addEventListener('mousemove',getMousePosition)
    return ()=>{
      window.removeEventListener('mousemove', getMousePosition)
    }
  })
  return (
    <div>
        {/* Do not remove the main div */}
        <p>The mouse position is: {pos}</p>
    </div>
  )
}

export default App
