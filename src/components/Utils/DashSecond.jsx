import { Box,Grid,OutlinedInput, Typography } from '@mui/material';
import React, { useState } from 'react';
import DashPerform from './DashPerform';
import DashRevenue from './DashRevenue';
import DashOrder from './DashOrder';
import './DashSecond.css'


const DashSecond = () => {
const [selected,setSelected] = useState({perf:true,revenue:false,order:false})
const [selector,setSelector] = useState({p:"3px solid black",r:"none",o:"none"})
    

    const dataChanger=(opt)=>{
if(opt==='Revenue') {setSelected(()=>{return{perf:false,revenue:true,order:false}});setSelector(prev=>{return {...prev,p:"none",o:"none",r:"3px solid black"}})}
if(opt==='Order Status'){setSelected(()=>{return{perf:false,revenue:false,order:true}});setSelector(prev=>{return {...prev,p:"none",o:"3px solid black",r:"none"}})}
if(opt==='Performance Overview'){setSelected(()=>{return{perf:true,revenue:false,order:false}});setSelector(prev=>{return {...prev,p:"3px solid black",o:"none",r:"none"}})}
  }
    
  return (
    <>
       {/* section1 */}
       <Grid container p="15px" wrap='wrap-reverse' >
        <Grid item xs={12}  lg={6}  >
          <Box id="headBtn" display="flex" >
                  <Typography  sx={{opacity:selected.perf?1:0.4,color:"#263f97", transition:"all 0.30s ease", pb:"15px", mr: "40px",cursor:"pointer",fontSize:"15px",whiteSpace:"nowrap",borderBottom:selector.p}} onClick={()=>{dataChanger('Performance Overview')}}>
                  <b>Performance Overview</b>
                   </Typography>
                   <Typography sx={{opacity:selected.revenue?1:0.4,color:"#263f97",transition:"all 0.30s ease", pb:"15px",  mr: "40px",cursor:"pointer",fontSize:"15px",borderBottom:selector.r}} onClick={()=>{dataChanger('Revenue')}}>
                  <b>Revenue</b>
                   </Typography>
                   <Typography sx={{opacity:selected.order?1:0.4,color:"#263f97",transition:"all 0.30s ease",pb:"15px",whiteSpace:"nowrap",  mr: "40px",cursor:"pointer",fontSize:"15px",borderBottom:selector.o}} onClick={()=>{dataChanger('Order Status')}}>
                  <b>Order Status</b>
                   </Typography>
          </Box>
          </Grid>
          < Grid item id="smallScreen" xs={12} lg={6} justifyContent="flex-end" display="flex" mb="10px">
            <Box>
              <Typography fontWeight={700} sx={{color:"rgb(38, 63, 151)"}}>Placed Date</Typography>
              <OutlinedInput id="dateInput" sx={{ height: "30px" }} type='date' />
            </Box>
          </Grid>
       </Grid>
<DashPerform selected={selected.perf}/>
<DashRevenue selected={selected.revenue}/>
<DashOrder selected={selected.order}/>
    </>
  );
}

export default DashSecond;
