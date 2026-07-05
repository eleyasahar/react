import React from 'react'

const Usercard = ( {user}) => {
  return (
    <div className='p-4 flex flex-col gap-4 border-grey-400 border rounded'>
      <div className='w-50 h-50 rounded overflow-hidden'>
      <img  className='w-full h-full' src={user.image} alt={user.name} />
      </div>
      <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
    <button className='bg-red-500 text-white p-2 rounded'>Delete</button>
    </div>
  )
}

export default Usercard
