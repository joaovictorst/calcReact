import { useState } from 'react'
import './App.css'
import Calculator from './assets/components/calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Calculator/>
      <h1>oi</h1>
    </div>
  )
}

export default App
