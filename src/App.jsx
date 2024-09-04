import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Schoollogin from './components/Schoollogin'
import Schoolregister from './components/Schoolregister'
import Home from './components/Home'
import Govhome from './components/govhome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Govhome/> */}
      <Home/>
      {/* <Schoolregister/> */}
    </>
  )
}

export default App
