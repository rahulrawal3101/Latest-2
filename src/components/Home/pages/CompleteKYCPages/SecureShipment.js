import { Alert, Box,  Grid, Link, Paper, Typography } from '@mui/material'
import Switch from '@mui/material/Switch';
import Snackbar from '@mui/material/Snackbar';
import '../../Home.css'
import { useState } from 'react';

const SecureShipment = ({selected}) => {
const [isSecure,setIsSecure] = useState(false);
const position = {vertical: 'top',horizontal: 'right'}
const { vertical, horizontal } = position;
const [open,setOpen] = useState(false)
const handleSnackbarClose = () => {setOpen(false)};
const handleCheck = (e)=>{
  setOpen(e.target.checked);
  setIsSecure(e.target.checked)
  }
  
if(selected){
  return(
    <>
 <Snackbar anchorOrigin={{ vertical, horizontal }}  open={open} autoHideDuration={900} onClose={handleSnackbarClose} >
  <Alert onClose={handleSnackbarClose}  sx={{ width: '100%',bgcolor:"white",border:"1px solid #E8E8E8" }}>
 Auto Secure has been enabled
  </Alert>
</Snackbar> 

            <Grid item lg={9} md={9} sm={12} xs={12} sx={{height:"100%"}}>
        <Paper sx={{height:"520px",mr:"10px"}} >
          <Box id="generalDetailsKycBox" sx={{mb:"50px"}}>
            <Typography variant='h1' sx={{color: 'rgb(38, 63, 151)',p: '30px 20px',fontSize:"23px",fontWeight:'bold'}}>Secured Shipment</Typography>
            </Box>
 <Grid container spacing={10}>
  <Grid item lg={7} md={7} sm={12} xs={12}>
    <Box sx={{bgcolor:isSecure ? "rgb(223, 235, 251)":"rgb(245, 249, 255)",p:"20px",display:"flex",alignItems:"center",flexDirection:"column"}}>
      <Box sx={{display:"flex",alignItems:"center",width:"100%"}}>
      <img src='https://d10srchmli830n.cloudfront.net/1663240730946_04e00494-05db-4731-999b-e0b10fd0335c_Group-1116600426.svg' alt='box'/>
     <Typography flexGrow={1} ml="10px" fontSize="12px"><b>Automatically secure all eligible shipments</b></Typography>
<Switch value={isSecure}  onChange={handleCheck}  inputProps={{ 'aria-label': 'ant design' }} />
      </Box>
<Box sx={{mt:"20px"}}>
  <Typography fontSize="10px">Turn on to automatically secure all shipments with invoice value greater than Rs.5000</Typography>
  <Link  fontSize="11px">Terms & Condition applied* </Link>
</Box>
    </Box>
  </Grid>
   <Grid item lg={4} md={5} sm={12} xs={!2}>
    <Box sx={{display:"flex",flexDirection:"column"}}>
      <Typography fontWeight="bold" fontSize="13px" sx={{color:" rgb(0, 38, 89);"}}>What is Secure Shipment ?</Typography>
      <Typography  fontSize="10px" >You can secure forward shipment via Pickrr’s dashboard in case of order with invoice value greater than Rs. 5000</Typography>
      <img style={{marginBottom:"10px",marginTop:"10px"}} width="100px" src="https://d10srchmli830n.cloudfront.net/1663247055788_194ea231-2a1f-4eba-aacc-1b6d30f5d11c_Group-1116600986.svg" alt="secure" />
         <img width="160px" src="https://d10srchmli830n.cloudfront.net/1663247167914_1c5d3644-355f-461b-bfcc-8ee6a48258c0_Group-1116600985.svg" alt="secure" />
    </Box>
   </Grid>
 </Grid>
        </Paper>
    </Grid>
    </>
  
  )
}
}

export default SecureShipment