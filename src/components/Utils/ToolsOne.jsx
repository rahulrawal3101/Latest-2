import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import React from 'react'

const ToolsOne = () => {
  return (
    <>
    <Grid container sx={{backgroundColor:'rgb(237, 240, 249)', padding:'15px', }}>
        <Grid item container xs={12} sx={{backgroundColor:'white',borderRadius:'15px'}}>
            <Grid item xs={12} sx={{ padding:'20px 20px 10px 20px',display:'flex',flexDirection:{lg:'row', md:'column', sm:'column' , xs:'column'}, alignItems:'center', justifyContent:{lg:'space-between', md:'center', sm:'center', xs:'center' }}}>
             <Typography sx={{color:'rgb(38, 63, 151)', fontSize:'18px', fontWeight:'600'}}>Enter your pincode to check Pickrr’s serviceability</Typography>
             <Button variant='outlined'sx={{fontSize:{lg:'13px',md:'13px', sm:'10px', xs:'9.8px' },mt:{lg:'0px', md:'10px', sm:'10px', xs:'10px' }}}><GetAppIcon/> Download all seviceable pincode list here</Button>
            </Grid>
              
              <Grid item container sx={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'15px'}}>
            <Grid item lg={3.8}  md={5.8} sm={12} xs={12}>
             <Box sx={{display:'flex', justifyContent:'left', alignItems:'center'}}>
                <span style={{color:'red', fontSize:'18px'}}>*</span>
                <Typography sx={{color:'rgb(38, 63, 151)', fontWeight:'600'}}>Pickup Pincode</Typography>
             </Box>
             <TextField placeholder='Enter your pickup pincode' size='small' fullWidth sx={{mt:'10px'}}/>
            </Grid>

             <Grid item lg={3.8}  md={5.8} sm={12} xs={12} sx={{mt:{lg:'0px', md:'0px', sm:'10px', xs:'10px'}}}>
               <Box sx={{display:'flex', justifyContent:'left', alignItems:'center'}}>
                <span style={{color:'red', fontSize:'18px'}}>*</span>
                <Typography sx={{color:'rgb(38, 63, 151)', fontWeight:'600'}}>Destintion Pincode</Typography>
             </Box>
             <TextField placeholder='Enter your destintion pincode' size='small' fullWidth sx={{mt:'10px'}}/>
            </Grid>

             <Grid item lg={3.8}  md={7} sm={12} xs={12} sx={{ mt:'32px'}}>
             <Button variant='contained'>Check pincode</Button>
            </Grid>

            </Grid>

        </Grid>
    </Grid>
    </>
  )
}

export default ToolsOne