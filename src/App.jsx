import { useState } from 'react'
import AppRouter from './router/AppRouter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="appWraper">
        <AppRouter/>
      </div>
    </>
  )
}

export default App
