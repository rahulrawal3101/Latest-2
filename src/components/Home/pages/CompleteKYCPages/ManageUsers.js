import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import '../../Home.css'
import { Add } from '@mui/icons-material'

const ManageUsers = ({selected}) => {


if(selected){
  return(  
          <Grid item lg={9} md={9} sm={12} xs={12} sx={{height:"100%"}}>
        <Paper sx={{height:"520px",mr:"10px"}} >
          <Box id="managePickUpLocationsBox" sx={{mb:"70px"}}>
            <Typography flexGrow={1} variant='h1' sx={{color: 'rgb(38, 63, 151)',p: '30px 20px',fontSize:"23px",fontWeight:'bold'}}>Manage Pickup Locations</Typography>
            <Button variant='contained' startIcon={<Add/>} size='small' sx={{bgcolor:"rgb(254, 117, 107)",textTransform:"unset",borderRadius:"10px",height:"fit-content"}}>Add New User</Button>
            </Box>
            <Box sx={{pl:"20px"}}>
              <form>
             <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
                    <Typography fontWeight={500} sx={{color: 'rgb(38, 63, 151)'}}>Add multiple users to manage operations</Typography>
                  <img src='	https://d10srchmli830n.cloudfront.net/1622457930638_Add-User-rafiki-1.svg' alt="pickup"/>
                  <Typography fontSize="12px" sx={{color: 'rgb(38, 63, 151)'}}>Click on <strong>Add New User</strong> button to add new user</Typography>
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

export default ManageUsers