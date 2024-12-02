import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dog from './Components/DogGame/Dog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dog />
    </>
  )
}

export default App
