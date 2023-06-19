import { ExpandLess, ExpandMore } from '@mui/icons-material'
import useKYCModal from '../../Global/hooks/useKYCModal'
import {FileOpen,DriveEta,Group,Email,Bookmark,Shield,Score} from '@mui/icons-material'
import {  Collapse,Grid,List, ListItemButton, Paper,  Typography } from '@mui/material'
import CustomButton from '../../Global/UI/CustomButton'
import KYCSection from './CompleteKYCPages/KYCSection'
import GeneralDetails from './CompleteKYCPages/GeneralDetails'
import LabelSettings from './CompleteKYCPages/LabelSettings'
import ManagePickUpLocations from './CompleteKYCPages/ManagePickUpLocations'
import ManageUsers from './CompleteKYCPages/ManageUsers'
import ManageMails from './CompleteKYCPages/ManageMails'
import SecureShipment from './CompleteKYCPages/SecureShipment'
import TrackingWidget from './CompleteKYCPages/TrackingWidget'


const CompleteKYC = ({kyc,setting}) => {
  const {open,selected,handleClick,handleSelect} =  useKYCModal(kyc,setting)

  return (
<Grid item container spacing={1} ml="0px" height="fit-content">
    {/* left side content */}

    <Grid item lg={3} md={3} sm={12} xs={12}>
        <Paper sx={{height:"100%",mr:"10px"}}>
               <List>
                {/* account setup */}
             <ListItemButton sx={{mb:"10px"}} onClick ={()=>handleClick("accountSetup")}>
                                   <Typography fontFamily="sans-serif" fontWeight={800} fontSize="12px" flexGrow={1} sx={{color:'rgb(38, 63, 151);'}}>Account Setup</Typography>
                { open.accountSetup ? <ExpandLess sx={{color:"orange",fontSize:"18px"}} /> : <ExpandMore sx={{color:"orange",fontSize:"18px"}} />}
             </ListItemButton>
    
                                  <Collapse in={open.accountSetup} timeout="auto" unmountOnExit>
                                          <List  component="div" disablePadding >                                                   
                                              <CustomButton onClick={()=>handleSelect("general")} option="general" icon={<FileOpen/>} opt={selected.general}>General Details</CustomButton>
                                              <CustomButton onClick={()=>handleSelect("manage")} option="manage" icon={<DriveEta/>} opt={selected.manage}>Manage Pickup Locations</CustomButton>
                                              <CustomButton onClick={()=>handleSelect("users")} option="users" icon={<Group/>} opt={selected.users}>Manage Users</CustomButton>
                                              <CustomButton onClick={()=>handleSelect("mails")} option="mails" icon={<Email/>} opt={selected.mails}>Manage Mails</CustomButton>
                                              <CustomButton onClick={()=>handleSelect("settings")} option="settings" icon={<Bookmark/>} opt={selected.settings}>Label Settings</CustomButton>
                                              <CustomButton onClick={()=>handleSelect("secure")} option="secure" icon={<Shield/>} opt={selected.secure}>Secure Shipment</CustomButton>                
                                          </List>
                                  </Collapse>

                {/* kyc details */}

                <ListItemButton  onClick={()=>handleSelect("kyc")} dense  disableGutters  id={`${selected.kyc ?'active' : ''}`}   sx={{backgroundColor:selected.kyc ?  ' #0B2755': "",height:"35px"}}>
                                   <Typography  ml="15px" fontWeight={800} fontFamily="sans-serif" fontSize="12px" flexGrow={1} sx={{color:`${selected.kyc ? "white" : "rgb(38, 63, 151)"}`}}>Kyc Details</Typography>
             </ListItemButton>
                {/* manage brand */}

               <ListItemButton sx={{mb:"10px",mt:"10px"}} onClick ={()=>handleClick("managebrand")}>
                                   <Typography fontFamily="sans-serif" fontWeight={800} fontSize="12px" flexGrow={1} sx={{color:'rgb(38, 63, 151);'}}>Manage Brand</Typography>{ open.managebrand ? <ExpandLess sx={{color:"orange",fontSize:"18px"}} /> : <ExpandMore sx={{color:"orange",fontSize:"18px"}} />}
              </ListItemButton>
                                  <Collapse  in={open.managebrand}  timeout="auto" unmountOnExit>
                                         <List  component="div" disablePadding>
                                                   <CustomButton onClick={()=>handleSelect("tracking")} option="tracking" icon={<Score/>} opt={selected.tracking}>Tracking Widget</CustomButton>
                                         </List>
                                  </Collapse>
                {/* manage reverse QC */}
                <ListItemButton  dense  disableGutters  sx={{height:"35px",mb:"10px"}}>
                                   <Typography ml="15px"  fontFamily="sans-serif" fontWeight={800} fontSize="12px" flexGrow={1} sx={{color:'rgb(38, 63, 151);'}}>Manage Reverse QC</Typography>
             </ListItemButton>
    </List>
        </Paper>
    </Grid>
    {/* right side content */}

    <GeneralDetails selected={selected.general}/>
    <LabelSettings selected={selected.settings}/>
    <ManagePickUpLocations selected={selected.manage}/>
    <ManageUsers selected={selected.users}/>
    <ManageMails selected={selected.mails}/>
    <SecureShipment selected={selected.secure}/>
    <KYCSection selected={selected.kyc}/>
    <TrackingWidget selected={selected.tracking}/>
</Grid>
  )
}

export default CompleteKYC