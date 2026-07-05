import React, {useState} from 'react'
import Login from './Components/login'
import Register from './Components/register'
import Usercard from './Components/Usercard'

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);


  return (
    <div className='bg-gray-300 h-screen '>
   <Register setToggle={setToggle} setUsers={setUsers} />
   <div className='flex gap-4'>
      {users.map((elem) =>
      ( <Usercard user={elem} />

      ))}
   </div>
     
       
    </div>
  )
}
     

export default App
