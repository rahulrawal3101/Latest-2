import { Box, Button, Grid, Paper, Typography,Backdrop,Modal,Fade, Divider, IconButton, TextField } from '@mui/material'
import '../../Home.css'
import { useState } from 'react'
import { Add, Close } from '@mui/icons-material'

const ManagePickUpLocations = ({selected}) => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

// modal component
function TransitionsModal({open,setOpen}) {
    const handleClose = () => setOpen(false);
    const style = {position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: 400,bgcolor: 'background.paper',p: "5px 20px 30px 20px",borderRadius:2};
  return (
      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{backdrop: {timeout: 500,},}}>
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{display:"flex",alignItems:"center"}}>
            <Typography fontSize="13px" fontWeight={700} sx={{color:" rgb(38, 63, 151)"}}  flexGrow={1} id="transition-modal-title" variant="h6" component="h2">
              Add Warehouse / Pickup Location
            </Typography>
            <IconButton onClick={handleClose}><Close sx={{color:"gray"}}/></IconButton>
            </Box>
            <Divider/>
            <form>
              <Grid container spacing={2}>
  <Grid item lg={6} md={6} sm={12} xs={12}><Typography mt="10px" mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}} id="modalFormStar">Store Name</Typography><TextField sx={{"& input::placeholder": { fontSize: "13px"},}} inputProps={{style: {height: "10px",},}}  fullWidth placeholder ="Enter store name" size="small"/></Grid>
  <Grid item  lg={6} md={6} sm={12} xs={12}><Typography mt="10px" mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}}  id="modalFormStar">Email ID</Typography><TextField sx={{"& input::placeholder": { fontSize: "13px"},}}  inputProps={{style: {height: "10px",},}} fullWidth placeholder ="Enter the email ID" size="small"/></Grid>
  <Grid item  lg={6} md={6} sm={12} xs={12}><Typography mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}}  id="modalFormStar">Mobile Number</Typography><TextField sx={{"& input::placeholder": { fontSize: "13px"},}}  inputProps={{style: {height: "10px",},}} fullWidth placeholder ="Enter mobile number" size="small"/></Grid>
  <Grid item  lg={6} md={6} sm={12} xs={12}><Typography mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}}  id="modalFormStar">Pickup Pincode</Typography><TextField sx={{"& input::placeholder": { fontSize: "13px"},}}  inputProps={{style: {height: "10px",},}} fullWidth placeholder ="Enter the pickup pincode" size="small"/></Grid>
  <Grid item  lg={12} md={12} sm={12} xs={12}><Typography mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}}  id="modalFormStar">Store Address</Typography><TextField sx={{"& input::placeholder": { fontSize: "13px"},}}  inputProps={{style: {height: "10px",},}} fullWidth placeholder ="Entercomplete address" size="small"/></Grid>
  <Grid item  lg={6} md={6} sm={12} xs={12}><Typography mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}}  id="modalFormStar">Pickup GSTIN</Typography><TextField sx={{"& input::placeholder": { fontSize: "13px"},}}  inputProps={{style: {height: "10px",},}} fullWidth placeholder ="Enter GSTIN" size="small"/></Grid>
  <Grid item  lg={6} md={6} sm={12} xs={12}><Typography mb="10px" fontSize="10px" fontWeight="bold" sx={{color:" rgb(38, 63, 151)"}}  id="modalFormStar">Alternamte Mobile Number</Typography><TextField sx={{"& input::placeholder": { fontSize: "13px"},}}  inputProps={{style: {height: "10px",},}} fullWidth placeholder ="Enter mobile number" size="small"/></Grid>
<Grid item lg={12} md={12} sm={12} xs={12}>
    <Box   sx={{display:"flex",color:" rgb(38, 63, 151)",justifyContent:"center"}}>
                  <Button  variant='outlined' size="small"  style={{width:"10px",height:"27px"}} sx={{width:"80px",mr:"20px"}}>Cancel</Button>
                  <Button variant='contained' size="small" style={{width:"10px",height:"27px"}} sx={{width:"80px",backgroundColor:" rgb(38, 63, 151)"}}>Save</Button>
                </Box>
  </Grid>
</Grid>
            </form>
          </Box>
        </Fade>
      </Modal>)}

// main component

if(selected){
  return(     
      <Grid item lg={9} md={9} sm={12} xs={12} sx={{height:"100%"}}>
        <Paper sx={{height:"520px",mr:"10px"}} >
          <Box id="managePickUpLocationsBox">
            <Typography flexGrow={1} variant='h1' sx={{color: 'rgb(38, 63, 151)',p: '30px 20px',fontSize:"23px",fontWeight:'bold'}}>Manage Pickup Locations</Typography>
            <Button onClick={handleOpen} variant='contained' startIcon={<Add/>} size='small' sx={{bgcolor:"rgb(254, 117, 107)",textTransform:"unset",borderRadius:"10px",height:"fit-content"}}>Add Pickup Locations</Button>
            </Box>
            <Box sx={{pl:"20px"}}>
                              <Box  sx={{mb:"50px",mt:"20px",display:"flex",flexDirection:"column",color:" rgb(38, 63, 151)"}}>
                  <Typography variant='h2' fontWeight={600} fontSize="18px">Added Locations</Typography>
                </Box>
              <form>
             <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
                    <Typography fontWeight={500} sx={{color: 'rgb(38, 63, 151)'}}>Add Warehouse / Pickup location</Typography>
                  <img src='https://d10srchmli830n.cloudfront.net/1621579820589_w_h.svg' alt="pickup"/>
                  <Typography fontSize="12px" sx={{color: 'rgb(38, 63, 151)'}}>Download sample, Enter warehouse details and upload</Typography>
                  </Box>
                </Grid>
              </Grid>
              </form>
            </Box>
        </Paper>
        <TransitionsModal open={open} setOpen={setOpen}/>
    </Grid>
    )
}
}

export default ManagePickUpLocations