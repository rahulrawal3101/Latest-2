import { Box, Grid } from '@mui/material'
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TopicRoundedIcon from '@mui/icons-material/TopicRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import SaveIcon from '@mui/icons-material/Save';

const Setting = () => {
  return (
   <>
   <Grid container sx={{backgroundColor:'rgb(237, 240, 249)', border:'1px solid green', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
    
    <Grid item container xs={3} sx={{border:'1px solid red', backgroundColor:'rgb(255, 255, 255)'}}>
        <Grid item xs={12}>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'crimson'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:'rgb(38, 63, 151)', fontSize:'18px', fontWeight:'600'}}>Account Setup</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'flex-start'}}> 
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', m:'5px'}}>
                <TopicRoundedIcon sx={{color:'rgb(38, 63, 151)'}}/>
                <Typography sx={{ml:'10px', color:'rgb(38, 63, 151)'}}>General Details</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',m:'5px'}}>
                <LocalShippingRoundedIcon sx={{color:'rgb(38, 63, 151)'}}/>
                <Typography sx={{ml:'10px', color:'rgb(38, 63, 151)'}}>Manage Pickup Location</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',m:'5px'}}>
                <PeopleRoundedIcon sx={{color:'rgb(38, 63, 151)'}}/>
                <Typography sx={{ml:'10px', color:'rgb(38, 63, 151)'}}>Manage Users</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',m:'5px'}}>
                <MailOutlineRoundedIcon sx={{color:'rgb(38, 63, 151)'}}/>
                <Typography sx={{ml:'10px', color:'rgb(38, 63, 151)'}}>Manage Mails</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',m:'5px'}}>
                <SettingsOutlinedIcon sx={{color:'rgb(38, 63, 151)'}}/>
                <Typography sx={{ml:'10px', color:'rgb(38, 63, 151)'}}>Labek Setting</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', m:'5px'}}>
                <LockResetOutlinedIcon sx={{color:'rgb(38, 63, 151)'}}/>
                <Typography sx={{ml:'10px', color:'rgb(38, 63, 151)'}}>Secure Shipment</Typography>
            </Box>
        </AccordionDetails>
      </Accordion>

      <Box sx={{m:'12px 0px 12px 5px'}}>
        <Typography sx={{ml:'10px', color:'rgb(38, 63, 151)',fontSize:'18px', fontWeight:'600'}}>Kyc Details</Typography>
      </Box>
     
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'crimson'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:'rgb(38, 63, 151)', fontSize:'18px', fontWeight:'600'}}>Manage Brand</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'flex-start'}}> 
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', m:'5px'}}>
                <SaveIcon sx={{color:'rgb(38, 63, 151)'}}/>
                <Typography sx={{ml:'10px', color:'rgb(38, 63, 151)'}}>Trackking widget</Typography>
            </Box>

        
        </AccordionDetails>
      </Accordion>

       <Box sx={{m:'12px 0px 12px 5px'}}>
        <Typography sx={{ml:'10px', color:'rgb(38, 63, 151)',fontSize:'18px', fontWeight:'600'}}>Manage Reverse QC</Typography>
      </Box>


        </Grid>
    </Grid>

    <Grid item container xs={8.3} sx={{border:'1px solid green'}}>
        <Grid item >

        </Grid>

    </Grid>
   </Grid>
   </>
  )
}

export default Setting