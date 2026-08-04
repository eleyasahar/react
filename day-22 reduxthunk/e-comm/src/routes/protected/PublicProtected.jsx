import React from 'react'
import {Navigate,  Outlet } from 'react-router'
import { useSelector } from 'react-redux';

const PublicProtected = () => {
      let { isAuthenticated, user, isloading} = useSelector ((store)=> store.auth);
  
      if(isloading) return <h1>loding page</h1>

  if (!user) {
    return <Navigate to={"/main"}/>
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PublicProtected
