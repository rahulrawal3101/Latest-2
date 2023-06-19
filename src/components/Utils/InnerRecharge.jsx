// import { Box } from '@mui/material'
import React from 'react'
import { Box, Button,  Grid, Paper, Typography } from '@mui/material'
import img1 from '../../images/img1.svg'
import divide from '../../images/divide.svg'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Recharge.css'

const InnerRecharge = () => {
  return (
   <>
  
    <Grid item id='mainBox' xs={12}  md={8} lg={8} sx={{ ml:'35px',mt:'20px' ,backgroundColor:'white', padding:'18px 0px 15px 0px', borderRadius:'10px',boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.20)'}}>
     <Grid container>
      <Grid item  id='leftBox' xs={12} sm={12} md={3.6} sx={{ display:'flex', flexDirection:'column', alignItems:'left' , padding:'0px 20px 10px 32px', borderRight:'1px solid gray'}}>
          <Box id='innerLeftBox' >
        
       <Box >
            <Typography sx={{color:'#0d47a1', fontSize:'20px', fontWeight:'600'}}>Balance Details</Typography>
       </Box>

        
         <Box  sx={{mt:'22px'}}>
        <Typography sx={{fontSize:'22px', color:'#0d47a1', textAlign:'left', fontWeight:'600'}}>₹ 0.00</Typography>
        <Typography sx={{fontSize:'18px', color:'#2196f3', textAlign:'left', fontWeight:'600'}}>Available Balance</Typography>
        </Box>

      <Box sx={{mt:'22px',}}>
        <Typography sx={{fontSize:'22px', color:'#d50000', textAlign:'left', fontWeight:'600'}}>₹ 0.00</Typography>
        <Typography sx={{fontSize:'18px', color:'#d50000', textAlign:'left', fontWeight:'600'}}>Hold Balance</Typography>

        </Box>

         <Box sx={{mt:'22px'}}>
        <Typography sx={{fontSize:'22px', color:'#0d47a1', textAlign:'left', fontWeight:'600'}}>₹ 0.00</Typography>
        <Typography sx={{fontSize:'18px', color:'#2196f3', textAlign:'left', fontWeight:'600'}}>Usable Balance</Typography>
        </Box>

        <Box id='imgbox' sx={{mt:'22px' , padding:'0px 5px 3px 0px ', height:'130px', width:'149px', }}>
            <img src={img1} width='100%'  height='100%' style={{marginTop:'2px'}}/>
            <Typography sx={{fontSize:'12px', textAlign:'center', fontWeight:'600'}}><a href='#'>TERMS & CONDITIONS</a></Typography>
        </Box>


    </Box>

      </Grid>

      <Grid item id='secondgridBox'  xs={12} sm={12} md={8}  sx={{display:'flex', flexDirection:'column', padding:'0px 18px 0px 40px', width:'100%'}}> 
      <Box >

      <Box >
      <Typography id='secondGrid' sx={{color:'#0d47a1',fontSize:'20px', fontWeight:'600'}}>Recharge your pickrr Wallet</Typography>
    </Box>

    <Box   sx={{  borderRadius:'10px ', mt:2,backgroundColor:'rgb(237, 240, 249)', display:'flex', alignItems:'center', flexDirection:'column', padding:'0px 0px 10px 0px',}}>
       <Box sx={{width:'80%', mt:2}}>

       <Typography sx={{fontSize:'15px', color:'#0d47a1' , fontWeight:'600'}}>Select amount for quick recharge</Typography>
       </Box>
    <Box  sx={{display:'flex', width:'80%', justifyContent:'space-between', alignItems:'center' , mt:'5px'}}>
      <Box id='amount' sx={{ height:'100%', textAlign:'center', bgcolor:'white', color:'#0d47a1',padding:'4px'}}>200</Box>
      <Box id='amount' sx={{ height:'100%', textAlign:'center', bgcolor:'white', color:'#0d47a1',padding:'4px'}}>500</Box>
      <Box  id='amount'sx={{height:'100%',  textAlign:'center', bgcolor:'white', color:'#0d47a1',padding:'4px'}}>1000</Box>
      <Box  id='amount'sx={{ height:'100%', textAlign:'center', bgcolor:'white', color:'#0d47a1',padding:'4px'}}>2000</Box>
      <Box  id='amount'sx={{ height:'100%', textAlign:'center', bgcolor:'white', color:'#0d47a1',padding:'4px'}}>5000</Box>

    </Box>
    <Box sx={{width:'80%', mt:0}}>
      <Typography sx={{width:'80%', mt:2,fontSize:'15px', color:'#0d47a1' , fontWeight:'600'}}>Or enter your amount to recharge</Typography>
    </Box>
    <Box sx={{width:'80%', mt:'5px'}}>
      <input type='text' placeholder='Minimum Recharge ₹ 200' style={{width:'100%', height:'28px',borderRadius:'4px', boxSizing:'border-box', border:'none'}} />
    </Box>

     <Box sx={{width:'80%', mt:0}}>
      <Typography sx={{ mt:2 , fontSize:'15px', color:'#0d47a1' , fontWeight:'600'}}>Have a coupon? Enter code to validate</Typography>
    </Box>
    <Box sx={{width:'80%', display:'flex', mt:'5px'}}>
      <input type='text' placeholder='Minimum Recharge ₹ 200' style={{width:'100%', borderRadius:'4px', height:'28px', border:'none'}} />
      <Box sx={{bgcolor:'#c5cae9',  display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Typography sx={{  fontSize:'14px', textAlign:'center', padding:'5px'}}>Validate</Typography>
      </Box>
    </Box>

    <Box sx={{width:'80%', height:'6%', display:'flex', mt:2,  justifyContent:'space-between', alignItems:'center'}} >
      <Typography sx={{color:'#0d47a1',fontSize:'15px', fontWeight:'600'}}>Recharge Amount</Typography>
      <Typography sx={{color:'#0d47a1',fontSize:'15px' , fontWeight:'600'}}>₹ 0</Typography>
    </Box>

    <Box sx={{width:'80%', height:'7%', display:'flex', mt:3,  justifyContent:'space-between', alignItems:'center',color:'#0d47a1'}}>
      <Box sx={{display:'flex', flexDirection:'column'}}>
        <Typography sx={{fontSize:'15px' , fontWeight:'600'}}>Bonus Amount (0%)</Typography>
        <Typography sx={{fontSize:'10px' ,color:'#2196f3' , fontWeight:'600'}}> Added to the wallet after successful recharge</Typography>
      </Box>
      <Typography fontWeight='600'>₹ 0</Typography>
    </Box>

    <Box sx={{width:'80%', height:'6%', display:'flex', mt:3, justifyContent:'space-between', alignItems:'center'}} >
      <Typography sx={{color:'#0d47a1',fontSize:'15px' , fontWeight:'600'}}>Amount to be paid</Typography>
      <Typography sx={{color:'#0d47a1',fontSize:'15px' , fontWeight:'600'}}>₹ 0</Typography>
    </Box>

    <Box sx={{width:'80%', display:'flex', justifyContent:'center', alignItems:'center',mt:'5%'}}>
    <Button variant='contained' sx={{width:'100%'}}>RECHARGE NOW</Button>
    </Box>

    </Box>
     </Box>
      
      </Grid>
      </Grid>    
    </Grid>

    <Grid item id='paperBox' xs={12} sm={12} md={3} sx={{ml:'30px',mt:'20px',backgroundColor:'rgb(237, 240, 249)', borderRadius:'10px', boxSizing:'border-box'}}>
        <Paper sx={{padding:'10px 2px 0px 10px',height:'48%'}} elevation={4}>
          <Box sx={{display:'flex' }}>
            <img src={divide} alt="divide"/>
            <Typography sx={{color:'#ef5350', ml:'4px'}}>Available Offers</Typography>
          </Box >
          <Box sx={{display:'flex', mt:'15px'}}>
          < AddCircleIcon  fontSize='small' sx={{color:'#0d47a1', ml:'0px'}}/>
          <Typography ml="9px" sx={{fontSize:'15px', color:'#0d47a1'}}>First Recharge Offer! Pay ₹500/- & get ₹600/- in your PICKRR wallet. 20% cashback offer. *T&C Apply With code:'PICKRR100'</Typography>
          </Box>
        </Paper>

          <Paper id='secondPaper' sx={{mt:'17px', height:'48%',padding:'10px 0px 2px 15px' }}elevation={4} >
            <Typography  id='neft'color='primary' sx={{fontWeight:'600'}}>NEFT Payment - Bank details</Typography>
            <Box sx={{display:'flex', justifyContent:'space-between', height:'100%'}}>
              <Box sx={{height:'90%',display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                <Typography sx={{fontSize:'12px',color:'#0d47a1'}}>Beneficiary Name :</Typography>
                 <Typography sx={{fontSize:'12px',color:'#0d47a1'}}>Bank Name :</Typography>
                  <Typography sx={{fontSize:'12px',color:'#0d47a1'}}>Bank Branch :</Typography>
                   <Typography sx={{fontSize:'12px',color:'#0d47a1'}}>Account Number :</Typography>
                    <Typography sx={{fontSize:'12px',color:'#0d47a1'}}>Account Type :</Typography>
                     <Typography sx={{fontSize:'12px',color:'#0d47a1'}}>IFSC Code :</Typography>
              </Box>
              <Box sx={{height:'90%',display:'flex', flexDirection:'column', justifyContent:'space-evenly',}}>
                 <Typography id='secondPaperText' sx={{fontSize:'14px',color:'#0d47a1',fontWeight:'600'}}>Pickrr Technologies Pvt. Ltd</Typography>
                 <Typography  id='secondPaperText' sx={{fontSize:'14px',color:'#0d47a1',fontWeight:'600'}}>Kotak Mahindra Bank</Typography>
                  <Typography  id='secondPaperText' sx={{fontSize:'14px',color:'#0d47a1',fontWeight:'600'}}>East Of Kailash</Typography>
                   <Typography  id='secondPaperText' sx={{fontSize:'14px',color:'#0d47a1',fontWeight:'600'}}>626011025544</Typography>
                    <Typography  id='secondPaperText' sx={{fontSize:'14px',color:'#0d47a1',fontWeight:'600'}}>Current Account</Typography>
                     <Typography  id='secondPaperText' sx={{fontSize:'14px',color:'#0d47a1',fontWeight:'600'}}>KKBK0004621</Typography>
              </Box>
            </Box>
           
        </Paper>
    </Grid>

  
   </>
  )
}

export default InnerRecharge