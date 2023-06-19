import { Box, Grid, Link, Paper, Typography} from '@mui/material'
import {cardData} from './MainCardData/MainCardData'
import './Home.css'
const MainCard = ({pageStateHandler}) => {
  return (
  <Grid  height="fit-content" item xs={12} sm={12} md={12} lg={12}>
<Paper  sx={{height:"100%",pl:"10px", pr:"10px",pb:"10px"}} elevation={0}>
  <Typography align='center' sx={{color:" #0B2755;"}} fontSize="15px" fontWeight="800">ONBOARDING STEPS</Typography>
  <Grid height="fit-content" mt="5px"  container spacing={2}  alignItems="center" justifyContent="center" >
    {/* first kyc */}
    {cardData.map((item)=>{
        return (
    <Grid item key={item.id} >
<Box id="mainCards">
<Typography fontSize="13px"   fontWeight='800' sx={{color:"#007bff "}}><span style={{color:"black"}}>{item.id}. </span>{item.title}</Typography>
<Box sx={{bgcolor:"#E8E8E8",borderRadius:"10px",p:"15px"}}>
  <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
<img width="90px" height="60px" src={item.logo1} alt="P"/>
<img width="43px" height="40px" src={item.logo2} alt="P"/>
  </Box>
<Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
<Typography mb="15px" mt="15px" fontSize="12px" flexWrap="wrap"  fontWeight={700} fontFamily="Roboto', sans-serif" variant='caption'>{item.text}</Typography>
<Box sx={{display:"flex"}}>
<Link onClick={()=>pageStateHandler(item.linkText1)} sx={{color:"#007bff",cursor:"pointer",fontSize:"11px",fontWeight:"700"}}>{item.linkText1}</Link>
<Link onClick={()=>pageStateHandler(item.linkText1)} sx={{color:"#007bff ",ml:"10px",cursor:"pointer",fontSize:"11px",fontWeight:"700"}}>{item.linkText2}</Link>
</Box>
</Box>
</Box>
</Box>
    </Grid>
        )
    })}

    {/* first kyc  end*/}
  </Grid>
</Paper>
  </Grid>
  )
}

export default MainCard