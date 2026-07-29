import React, { useState } from 'react'
import { useEffect } from 'react'
import UserCard from '../components/UserCard'
import { axiosInstance } from '../config/axiosInstance'

const UsersPage = () => {


   const [usersData, setUsersData] = useState([])

  let getUsersData = async() =>{
    try{

      let res = await axiosInstance.get("/users");
      console.log(res)
      setUsersData(res.data)

    }catch (error) {
      console.log("error in users api", error)
    }
  };

  useEffect(()=> {getUsersData()},[])


  return (
    <div className='grid grid-cols-4 gap-5'>
     {
      usersData.map((val)=>
      <UserCard key={val.id} user={val}/>
    )
     }
    </div>
  )
}

export default UsersPage;
