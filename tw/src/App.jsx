import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from "./components/card1"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500'>
        HELLO ALL!
      </h1>
      <Card1 username="Divyanshu"/>  //we can pass anything even js
      <Card1 username="Ashish"/>

      


    </>
  )
}

export default App
