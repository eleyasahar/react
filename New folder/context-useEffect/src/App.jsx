import React, { useContext, useState} from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { MyStore } from './context/MyContext'

const App = () => {
  let {count, setCount } = useContext(MyStore)

  console.log("app rendering...")

  return (
    <div>
      <h1>Hello </h1>
      <button >Increment </button>
      < Home/>
      < About />
      < Contact />
    </div>
  )
}

export default App
