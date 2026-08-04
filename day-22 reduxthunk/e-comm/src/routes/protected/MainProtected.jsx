import React from 'react'
import {useSelector} from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => {

    let { isAuthenticated, user, isloading} = useSelector ((store)=> store.auth);

      if(isloading) return <h1>loding page</h1>;
  if (!user) {
    return <Navigate to={"/"}/>
  }
  return (
    <div>
      <Outlet/>
      
    </div>
  )
}

export default MainProtected
