import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>decryptkb-app-1762751090510</h1>
        <p>Built with Mastra Agent Stack</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="description">
          This app was generated based on your requirements.
          Ready to be customized!
        </p>
      </header>
    </div>
  )
}

export default App
