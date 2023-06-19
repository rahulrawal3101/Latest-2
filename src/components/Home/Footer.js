import { Box, Button, Grid,Paper, Typography,} from '@mui/material'
import './Home.css'

const Footer = () => {
  return (
       <Grid height="fit-content" item xs={12} sm={12} md={12} lg={12} >
   <Paper sx={{p:"8px"}} elevation={2}>
<Box>
  <Typography id="footerText" fontSize="85%"  fontWeight="900" sx={{display:"flex",alignItems:"center",justifyContent:"center",color:" #6c757d"}}>
    <strong>Copyright © 2022  </strong> <Button variant="text" sx={{textTransform:"capitalize",fontSize:"70%"}}>dashboard.adelsocial.in. </Button> <strong>All rights reserved.</strong>
  </Typography>
</Box>
</Paper>
  </Grid>
  )
}

export default Footer