import React, { useCallback, useState } from 'react'
import C1 from './C1'

export default function App() {
  var [x,updateX]=useState(10);
  let funx=useCallback(()=>{
        console.log("function called")
  },[])
  
  return (
    <div>
      App -{x}
            <input type='button' value='Click' onClick={()=>updateX(++x)} />
      <C1 funRef={funx} />
    </div>
  )
}
