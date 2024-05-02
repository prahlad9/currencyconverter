import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Currency from './component/Currency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Currency/>
      
    </div>
  )
}

export default App
