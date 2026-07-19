import React from 'react'
import { NavLink } from 'react-router-dom' 


const Navbar = () => {
  return (
    <div className='bg-black text-white rounded p-4 flex items-center justify-between'>
      <div> Logo </div>
      <div className='flex gap-10 text-xl'>
       <NavLink to={"/"}>Home</NavLink>
       <NavLink to={"/about"}>About</NavLink>
       <NavLink to={"/products"}>Products</NavLink>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar;

