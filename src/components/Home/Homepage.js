import './Home.css'
import axios from 'axios'
import Sidebar from './Sidebar'
import MainActivity from './MainActivity'
import {BASE_URL} from '../../Constant'
import { Box} from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../Global/Loader'
const Homepage = () => {
  const naviagte = useNavigate()
    const [pageHandler,setStateHandler] = useState('initial')
    const handle = (e)=>{setStateHandler(e)}
    const [runLoader,setRunLoader] = useState(false)

const callApi =()=>{
  axios.get(BASE_URL+'/validate').then((res)=>{
    if(res.data.message === 'unauthorized'){
          naviagte('/login')
          setRunLoader(false)
    }
    else{
      setRunLoader(false)
    }
  }).catch((err)=>{
    setRunLoader(true)
  })
}
// useEffect(callApi,[])
if(runLoader===true){
  return(
    <>
    <Loader/>
    </>
  )
}
if(runLoader=== false){
    return (
    <Box id="homepageBox" sx={{ display:"flex",bgcolor:" #0B2755"}}>
<Sidebar changeHandler={handle}/>
<MainActivity  pageHandler={pageHandler} setStateHandler={setStateHandler}/>
</Box>
  )
}
}

export default Homepage