import { Box,  Button,  Grid,Paper, Typography} from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import "./Home.css"
const MainTruckArea = () => {
  return (

    <Grid height="fit-content"  item xs={12} sm={12} md={12} lg={12}>
  <Paper sx={{height:"100%",pb:"10px"}} elevation={0}>
<Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
  <img width="25%" src="https://dashboard.parsal.in/img/1645772803551_rafiki.svg" alt="truck" />
</Box>
<Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
  <Typography align='center' fontSize="70%" mb="5px" variant='h5' fontWeight="700">
    Check Delivery Performance According To Each Courier
  </Typography>
    <Typography  fontSize="70%"  mb="10px" fontWeight="800" align='center' >
Here you will see the number of orders that are getting Delivered or Picked up on each day.
  </Typography>
  <Button  size='small' startIcon={<PlayCircleIcon/>} sx={{textTransform:"unset",fontSize:"70%"}} variant="outlined">
See How it works
  </Button>
</Box>
</Paper>
  </Grid>

  )
}

export default MainTruckArea