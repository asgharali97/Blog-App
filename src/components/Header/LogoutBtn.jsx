import React from 'react'
import { useDispatch } from 'react-redux';
import  authService from '../../appWrite/auth'
import {logout} from '../../store/AuthSlice'

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = ()=>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <button  className='font-Manrope mx-2 tracking-wide'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn
