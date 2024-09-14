import React,{useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected ({children , authentication}){
    const navigate = useNavigate();
    const [loader , setLoader] = useState(true);
    const authStatus = useSelector(state => state.status)

    useEffect(()=>{
     if(authentication && authStatus !== authentication){
        navigate('/login')
     }else if(!authentication && authStatus !== authentication){
        navigate('/')
     }
     setLoader(false)
    },[navigate,authentication,authStatus])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}


