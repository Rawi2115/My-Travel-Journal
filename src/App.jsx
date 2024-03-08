import { useState } from 'react'
import './App.css'
import Card from "./components/CardComponent"
import Navbar from "./components/navbar"
import data from "./Data/data"
function App() {
  const [count, setCount] = useState(0)
  const items = data.map(place =>{
    return <Card
          key={place.id}
          place={place}
    />
    
  })
  
  return (
    <>
      <Navbar />
      <div className="locations-container">
        {items}
      </div>
    </>
  )
}

export default App
