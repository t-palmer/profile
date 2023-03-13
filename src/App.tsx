import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Todd Palmer</h1>
      <div className="card">
        <p>
          Todd is a Distinguished Engineer at Fujitsu.
        </p>
      </div>
    </div>
  )
}

export default App
