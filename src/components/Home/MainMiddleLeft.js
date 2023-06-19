import {Box, Button, Divider, Grid,Paper, Typography} from '@mui/material'
import './Home.css'


const MainMiddle = () => {
  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} spacing={2}>
        <Grid  height="fit-content" item xs={12} sm={12} md={6} lg={6}>
<Paper sx={{height:"100%",pt:"10px",pl:"30px",pb:"60px"}} elevation={0}>
  <Typography align='center'  fontSize="13px"   fontWeight='800' sx={{color:"#007bff "}}>Parsal Advantage</Typography>
  <Grid container spacing={4} justifyContent="center" alignItems="center">
    <Grid item xs={12} sm={6} md={6} lg={6}  >
<Typography fontWeight="700" fontSize="12px" flexWrap="wrap" variant='p' align='center'>
  We are offering hassle free auto courier selection for all your orders.
</Typography>
<ul style={{fontWeight:"900" ,fontSize:"12px" }}>
  <li>Auto courier allocation</li>
  <li>Improved delivery performance</li>
  <li>Flat shipping rate</li>
</ul>
<Typography fontWeight="700" fontSize="12px"  variant='center' align='center'>Raise a ticket on chat support to activate</Typography>
    </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} >
          <Box sx={{display:"flex",align:"center",alignItems:"center",justifyContent:"center"}}>
   <img style={{alignSelf:"center"}} width="190px" height="160px" src="https://dashboard.parsal.in/img/pic.png" alt="parsal" />
          </Box>
    </Grid>
  </Grid>
</Paper>
  </Grid>



        <Grid  height="100%" item xs={12} sm={12} md={6} lg={6}>
<Paper sx={{height:"100%",pt:"10px",pl:"30px",pr:"25px"}} elevation={0}>
  <Typography align='center'  fontSize="13px"   fontWeight='800' sx={{color:"#007bff "}}>Know Your Dashboard</Typography>

  <Grid container spacing={4} justifyContent="center" alignItems="center">
    <Grid item xs={12} sm={6} md={6} lg={6} >
<Typography  fontWeight="700" fontSize="12px" flexWrap="wrap" variant='p' align='center'>
  See step by step guide of how dashboard works
</Typography>
<Typography mt="5px" mb="5px" align='center'>
<Button variant='outlined' size="small" sx={{textTransform:"capitalize"}}>Take Our Product Tour</Button>
</Typography>
<Typography  fontWeight="700" fontSize="12px" align='center'>Or</Typography>
<Typography sx={{  textDecoration: 'underline',cursor:"pointer"}}align='center' mt="5px" fontWeight="700" fontSize="12px" >View Dashboard Guide</Typography>
    </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box sx={{display:"flex",align:"center",alignItems:"center",justifyContent:"center"}}>
      <img width="190px" height="160px" src="https://dashboard.parsal.in/img/dashboard.png" alt="parsal" />
                    </Box>
    </Grid>
  </Grid>
          <Divider/>
          <Box sx={{height:"50px",display:'flex',alignItems:"center",justifyContent:"center"}}>
    <Typography id="middleRightText" flexGrow={1}  fontSize="12px" fontWeight="800" variant='p'>Book your slot, take Dashboard Training</Typography>
          <Button  id="middleRightButton" size="small" variant="contained"  sx={{bgcolor:"#0B2755",textTransform:"capitalize",width:"9rem"}}>Book Your slot</Button>
          </Box>
</Paper>
  </Grid>

    </Grid>
  )
}

export default MainMiddle