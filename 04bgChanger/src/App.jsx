 
import { useState } from 'react'
import './App.css'
function App() {
  const [color,setColor]=useState("olive");
  return (
    <div className='w-full h-screen ' style={{backgroundColor:color}}>
      <h2>choose backgroundColor</h2>
      <div className='fixed flex flex-wrap justify-center pt-15 px-45'>
        <div className='flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl '>
          <button onClick={()=>setColor("red")}
          className='px-4 py-2 outline-none rounded-full text-white' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("yellow")} className='px-4 py-2 outline-none rounded-full text-white' style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>setColor("blue")} className='px-4 py-2 outline-none rounded-full text-white' style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColor("green")} className='px-4 py-2 outline-none rounded-full text-white' style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("pink")} className='px-4 py-2 outline-none rounded-full text-white' style={{backgroundColor:"pink"}}>pink</button>
        </div>

      </div>
    </div>
  )
}

export default App
