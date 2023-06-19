import { Box, Button,  Grid, Paper, Typography } from '@mui/material'
import img1 from '../../images/img1.svg'
import divide from '../../images/divide.svg'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Recharge.css'
import Footer from '../Home/Footer'
import { useState } from 'react';
import InnerRecharge from './InnerRecharge';
import RechargeOne from '../Utils/RechargeOne';
import RechargeTwo from '../Utils/RechargeTwo';

const Recharge = () => {
  const [change, setChange]= useState('Recharge');
  const changeHandler=(ele)=>{
  console.log(ele);
  setChange(ele)
  }
  return (
 <>
 <Grid container mb="20px" sx={{backgroundColor:'rgb(237, 240, 249)', padding:'0px 20px 0px 20px'}}>
<Grid item id='upperHeader' xs={12} sx={{ width:'100%', overflowX:'scroll' ,display:'flex', justifyContent:'left', padding:'20px 0px 10px 30px', backgroundColor:'rgb(237, 240, 249)' }} >
    <Typography sx={{ borderBottom:change == 'Recharge'?'2px solid crimson':'',fontSize:'15px', marginRight:'15px', color:'#0d47a1', fontWeight:'700', whiteSpace:'nowrap'}} onClick={()=>{changeHandler('Recharge')}}>RECHARGE</Typography>
     <Typography sx={{ borderBottom:change == 'Deduction History'?'2px solid crimson':'',fontSize:'15px' , marginRight:'15px', color:'#0d47a1', fontWeight:'700',whiteSpace:'nowrap'}}onClick={()=>{changeHandler('Deduction History')}} >DEDUCTION HISTORY</Typography>
      <Typography sx={{ borderBottom:change == 'Transaction History'?'2px solid crimson':'',fontSize:'15px', color:'#0d47a1', fontWeight:'700',whiteSpace:'nowrap'}} onClick={()=>{changeHandler('Transaction History')}}>TRANSACTION HISTORY</Typography>

</Grid>
  
  {
    change == 'Recharge'?<InnerRecharge/>:''
  }
  

  {
    change == 'Deduction History'?<RechargeOne/>:''
  }
  
 {
  change == 'Transaction History'?<RechargeTwo/>:''
 }
  


    





 </Grid>
 <Footer/>
 </>
  )
}

export default Recharge