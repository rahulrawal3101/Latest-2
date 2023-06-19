import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import loadingImage from './loader.gif';
import axios from 'axios';

const Loader = () => {
    useEffect(()=>{
        axios.get('/validate').then((res)=>{console.log(res)}).catch((res)=>{console.log(res)});
    },[])
  return (
    <>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'10vh'}}>
            <img src={loadingImage} width='200px' alt="unable to load loader" />
            <br />
            <Typography variant='h6'>
                Please Wait...
            </Typography>
            
        </Box>
    </>
  )
}

export default Loader