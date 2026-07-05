import React from 'react'
import Contact from './assets/component/Contact'
import About from './assets/component/About'
import Card from './assets/component/Card'

const Web = () => {
  return (
    <div className='flex flex-col items-center justify-center'>

      <Card />  
      <Contact />
      <About />
    </div>
  )
}

export default Web
