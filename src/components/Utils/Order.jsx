import { Box, Button, Grid, Typography } from '@mui/material'
import order from '../../images/orderimg.png'
import  '../Home/Home.css';
import Footer from '../Home/Footer';

const Order = () => {
  return (
    <>
    <Grid container>
   <Grid  item xs={12} >
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src={order} height='100%' width='50%'/>
    </Box>
    <Box xs={12}  sx={{display:'flex', flexDirection:'column', justifyContent:'space-between',alignItems:'center' }}>
        <Typography id='text' sx={{fontSize:'32px'}} align='center'>Please complete your KYC to start placing orders</Typography>
        <Button id='btn' variant='contained' color='primary' size='small'>GO TO KYC PAGE</Button>
    </Box>
   </Grid>
   </Grid>
   <Footer/>
    </>
  )
}

export default Order;