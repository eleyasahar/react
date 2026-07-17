import React, {useState} from 'react'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  const [toggle, setToggle] =useState("home")
  return (
    <div className='h-screen bg-gray-600 text-white p-2'>
      <nav className='flex items-center justify-between mb-4'>
        <h1>Logo</h1>
        <div className='flex items-center gap-10 justify-between'>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <button>Login</button>
      </nav>
      




      < Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
