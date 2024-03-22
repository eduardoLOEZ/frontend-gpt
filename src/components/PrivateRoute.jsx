import { Outlet, Navigate } from "react-router-dom"

const PrivateRoute = () => {

  const user = localStorage.getItem('token')

  return (

    user ? <Outlet/> : <Navigate to="/login" replace={true} />

  )
}

export default PrivateRoute