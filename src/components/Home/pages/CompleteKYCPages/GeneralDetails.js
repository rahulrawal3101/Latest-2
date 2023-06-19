import { Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import '../../Home.css'
import { Add } from '@mui/icons-material'

const GeneralDetails = ({selected}) => {
  if(selected){
  return (
        <Grid item lg={9} md={9} sm={12} xs={12} sx={{height:"100%"}}>
        <Paper sx={{height:"520px",mr:"10px"}} >
          <Box id="generalDetailsKycBox">
            <Typography variant='h1' sx={{color: 'rgb(38, 63, 151)',p: '30px 20px',fontSize:"23px",fontWeight:'bold'}}>General Details</Typography>
            </Box>
            <Box sx={{pl:"20px"}}>
              <form>
             <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box sx={{display:"flex",flexDirection:"column",color:" rgb(38, 63, 151)"}}>
                  <Typography fontWeight={700} fontSize="12px">Full Name</Typography>
                  <Typography  fontSize="12px">Adel Social</Typography>
                </Box>
                </Grid>
                     <Grid item lg={6} md={6} sm={6} xs={12}>
                  <Box  sx={{display:"flex",flexDirection:"column",color:" rgb(38, 63, 151)"}}>
                  <Typography fontWeight={700}  fontSize="12px">Email Address</Typography>
                  <Typography  fontSize="12px">tanishq@adelsocial.com</Typography>
                </Box>
                </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box  sx={{display:"flex",flexDirection:"column",color:" rgb(38, 63, 151)"}}>
                  <Typography fontWeight={700}  fontSize="12px">Mobile Number</Typography>
                  <Typography  fontSize="12px">9999999999</Typography>
                </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box  sx={{display:"flex",flexDirection:"column",color:" rgb(38, 63, 151)"}}>
                  <Typography fontWeight={700}  fontSize="12px">Add Company Logo</Typography>
                  <Typography mr="20px" mt="10px"  borderRadius="10px" align='center' fontSize="45px"  border="1px dotted black" sx={{color:"black"}}>
                  <IconButton color="primary" aria-label="upload picture" component="label"><input  name="logo" required hidden accept="image/jpg" type="file" /><Add /></IconButton>
                  </Typography>
                </Box>
                </Grid>
                     <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box id="btnsGeneral" mr="20px"  sx={{display:"flex",color:" rgb(38, 63, 151)",justifyContent:"right"}}>
                  <Button id="btnsGeneral" variant='outlined' size="small" sx={{width:"80px",mr:"20px"}}>Cancel</Button>
                  <Button id="btnsGeneral" variant='contained' size="small" sx={{width:"80px"}}>Save</Button>
                </Box>
                </Grid>
              </Grid>
              </form>
            </Box>
        </Paper>
    </Grid>
  )
  }
}

export default GeneralDetails