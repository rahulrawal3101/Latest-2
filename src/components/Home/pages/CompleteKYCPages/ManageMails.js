import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import '../../Home.css'
import { Add, Save } from '@mui/icons-material'
// https://d10srchmli830n.cloudfront.net/1625649458176_ManageMail.svg
const ManageMails = ({selected}) => {
if(selected){
  return( 
        <Grid item lg={9} md={9} sm={12} xs={12} sx={{height:"100%"}}>
        <Paper id="paperHeightManageMails" sx={{height:"520px",mr:"10px"}} >
          <Box id="generalManageMails">
            <Typography variant='h1' sx={{color: 'rgb(38, 63, 151)',p: '30px 20px',fontSize:"23px",fontWeight:'bold'}}>Manage Mails</Typography>
            </Box>
            <Box sx={{pl:"20px"}}>
              <form>
        <Grid container spacing={4}>
  <Grid item lg={6} md={6} sm={6} xs={12}><Typography mt="10px" mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}} id="modalFormStar">Finance mails</Typography><TextField autoFocus sx={{"& input::placeholder": { fontSize: "13px"},}} inputProps={{style: {height: "10px",},}}  fullWidth placeholder ="Enter store name" size="small"/></Grid>
  <Grid item  lg={6} md={6} sm={6} xs={12}><Typography mt="10px" mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}}  id="modalFormStar">NDR mails</Typography><TextField sx={{"& input::placeholder": { fontSize: "13px"},}}  inputProps={{style: {height: "10px",},}} fullWidth placeholder ="Enter the email ID" size="small"/></Grid>
  <Grid item  lg={6} md={6} sm={6} xs={12}><Typography mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}}  id="modalFormStar">Wallet alerts</Typography><TextField sx={{"& input::placeholder": { fontSize: "13px"},}}  inputProps={{style: {height: "10px",},}} fullWidth placeholder ="Enter mobile number" size="small"/></Grid>
  <Grid item  lg={6} md={6} sm={6} xs={12}><Typography mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}}  id="modalFormStar">Weight mails</Typography><TextField sx={{"& input::placeholder": { fontSize: "13px"},}}  inputProps={{style: {height: "10px",},}} fullWidth placeholder ="Enter the pickup pincode" size="small"/></Grid>
  <Grid item  lg={6} md={6} sm={12} xs={12}><Typography mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}}  id="modalFormStar">Feedback mails</Typography><TextField sx={{"& input::placeholder": { fontSize: "13px"},}}  inputProps={{style: {height: "10px",},}} fullWidth placeholder ="Entercomplete address" size="small"/></Grid>
<Grid item lg={12} md={12} sm={12} xs={12}>
    <Box   sx={{display:"flex",color:" rgb(38, 63, 151)",justifyContent:"right",mr:"20px"}}>
                  <Button startIcon={<Save/>} variant='contained' size="small" sx={{width:"80px",backgroundColor:" rgb(38, 63, 151)"}}>Save</Button>
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

export default ManageMails