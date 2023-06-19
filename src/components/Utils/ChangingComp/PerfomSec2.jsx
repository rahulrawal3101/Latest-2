import React from 'react';
import { Box, Button,Paper, Typography } from '@mui/material';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import dboard from '../../../images/dboard.png'
import BarChart from './BarChart';
import { useState } from 'react';
const PerfomSec2 = () => {
    const [select,setSelect] = useState({opt1:"3px solid black",opt2:"3px solid rgba(200 200 200)"})
    const changeContent=(btnClick)=>{
if(btnClick==="opt1"){setSelect(prev=>{return {...prev,opt1:"3px solid black",opt2:"3px solid rgba(200 200 200)"}})}
if(btnClick==="opt2"){setSelect(prev=>{return {...prev,opt1:"3px solid rgba(200 200 200)",opt2:"3px solid black"}})}
  }
  return (
    <>
       <Paper sx={{ p: " 7px 0px 0px 0px", borderRadius: '12px', height:"100%",lineHeight:"80px" }} >
          <Box width="100%" mt="8px" p="6px" >
                <Box sx={{ display:"flex",justifyContent:"space-evenly",textAlign:"center",p:"15px",color:"#3f51b5",bgcolor:"white" }} >
          <Typography width="50%" sx={{transition:"all 0.20s ease",fontWeight:'800',cursor:"pointer",borderBottom:select.opt1}} onClick={()=>{changeContent("opt1")}}> WISE DELIVERY PERFORMANCE</Typography>
          <Typography  width="50%" sx={{transition:"all 0.20s ease",fontWeight:'800',cursor:"pointer",borderBottom:select.opt2}} onClick={()=>{changeContent("opt2")}}>ZONE WISE TAT PERFORMANCE</Typography>
        </Box>
            
          {/* <BarChart/> */}
            <Box textAlign="center">
              <img src={dboard} alt='dbboard' height="180px" width="230px"/>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",textAlign:"center",alignItems:"center"}}>
              <Typography  sx={{fontSize:"25px",width:"75%"}} ><b>Check Delivery Performance Of Each Zone</b></Typography>
              <Typography width="75%" mt="8px" >Here you will be able tosee total number of orders which are Live, Delivered and Return across each zone</Typography>
            </Box>
            <Box textAlign="center" m="10px">
                  <Button variant='outlined' color="primary"><PlayCircleOutlinedIcon sx={{  marginRight: "3px" }} /> See How it works</Button>
            </Box>
          
          </Box>
        </Paper>
    </>
  );
}

export default PerfomSec2;
