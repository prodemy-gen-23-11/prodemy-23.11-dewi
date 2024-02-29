import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function GuestRoute() {
     const isLogin = useSelector (state => state.auth.token !== '')
          if (isLogin){
               return <Navigate to = "/" />
          }
     return <Outlet />
}

export default GuestRoute
