import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
            <button onClick={() => setcolor("red")} className="ouline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setcolor("Yellow")} className="ouline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "Yellow" }}>Yellow</button>
            <button onClick={() => setcolor("Green")} className="ouline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "Green" }}>Green</button>
            <button onClick={() => setcolor("Pink")} className="ouline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "Pink" }}>Pink</button>
            <button onClick={() => setcolor("Blue")} className="ouline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "Blue" }}>Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
