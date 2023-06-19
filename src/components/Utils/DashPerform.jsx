import React from 'react';
import { Box, Grid, Paper,Typography} from '@mui/material';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MainTruckArea from '../Home/MainTruckArea';
import Footer from '../Home/Footer'
import PerfomSec1 from './ChangingComp/PerfomSec1';
import BarMap from './ChangingComp/BarMap';
import PerfomSec2 from './ChangingComp/PerfomSec2';
const DashPerform = ({selected}) => {
  if(selected){
  return (
    <>
     
      {/* section2 */}
      <Grid container ml="0px"  spacing={2}>
      <Grid item  xs={12} lg={7.7}  >
       <PerfomSec2/>
      </Grid>

       {/* Section 3 */}
      <Grid item lg={4} xs={12} >
        <Box  height="100%" >
          <Paper sx={{p:"10px",height:"100%", borderRadius: '12px'}} >
            <Typography sx={{ display: "flex", alignItems: "center", color: "#2962ff",fontSize:"18px" }} align="left" ><b>Overall Order status</b> <PlayCircleOutlinedIcon  sx={{ color: "#2962ff", marginLeft: "8px", fontSize:"28px" }} /> </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Box height="330px" width="330px"  mt="20px" borderRadius="50%" sx={{ display: "flex", justifyContent: "center", alignItems: "center",bgcolor:"#f3e5f5" }} >
                <Box height="250px" width="250px"   mt="20px" borderRadius="50%" m="auto" bgcolor="white"  ></Box>
              </Box>
              <Paper sx={{ width: "60%",mt:"35px",p:"8px"}}>
                
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",color:"#1b5e20" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                    <ShoppingBagIcon />
                    </Box>
                    <Box>
                    <Typography ><b>Live</b> </Typography>
                    </Box>
                  </Box>
                  
                  <Typography><b>0 Order</b></Typography>
                  </Box>

                  
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",color:"#1a237e" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                    <ShoppingBagIcon />
                    </Box>
                    <Box>
                    <Typography ><b>Delivered</b> </Typography>
                    </Box>
                  </Box>
                  
                  <Typography><b>0 Order</b></Typography>
                  </Box>
                  
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",color:"#ff9800" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                    <ShoppingBagIcon />
                    </Box>
                    <Box>
                    <Typography ><b>Return</b> </Typography>
                    </Box>
                  </Box>
                  
                  <Typography><b>0 Order</b></Typography>
                  </Box>


              </Paper>
            </Box>
          </Paper>
        </Box>
      </Grid>
      

      {/* section4 */}
      <Grid item  lg={7.7} xs={12}  >
        <PerfomSec1/>
       {/* <BarMap/> */}

      </Grid>

      {/* Section 5 */}
      <Grid item lg={4} xs={12}>
        <Box  height="100%" >
          <Paper sx={{p:"10px",height:"100%", borderRadius: '12px'}} >
            <Typography sx={{ display: "flex", alignItems: "center", color: "#2962ff",fontSize:"18px" }} align="left" ><b>Delivery Attempts</b> <PlayCircleOutlinedIcon  sx={{ color: "#2962ff", marginLeft: "8px", fontSize:"28px" }} /> </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Box height="330px" width="330px"  mt="20px" borderRadius="50%" sx={{ display: "flex", justifyContent: "center", alignItems: "center",bgcolor:"#f3e5f5" }} >
                <Box height="250px" width="250px"   mt="20px" borderRadius="50%" m="auto" bgcolor="white"  ></Box>
              </Box>
              <Paper sx={{ width: "60%",mt:"35px",p:"8px"}}>
                
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",color:"#1b5e20" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                    <ShoppingBagIcon />
                    </Box>
                    <Box>
                    <Typography ><b> 1st Attempt</b> </Typography>
                    </Box>
                  </Box>
                  
                  <Typography><b>0 Order</b></Typography>
                  </Box>

                  
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",color:"#1a237e" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                    <ShoppingBagIcon />
                    </Box>
                    <Box>
                    <Typography ><b> 2nd Attempt</b> </Typography>
                    </Box>
                  </Box>
                  
                  <Typography><b>0 Order</b></Typography>
                  </Box>
                  
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",color:"#ff9800" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                    <ShoppingBagIcon />
                    </Box>
                    <Box>
                    <Typography ><b>3rd Attempt</b> </Typography>
                    </Box>
                  </Box>
                  
                  <Typography><b>0 Order</b></Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",color:"#dd2c00" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                    <ShoppingBagIcon />
                    </Box>
                    <Box>
                    <Typography ><b> 4rd Attempt</b> </Typography>
                    </Box>
                  </Box>
                  
                  <Typography><b>0 Order</b></Typography>
                  </Box>


              </Paper>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12} lg={11.7}>
           <MainTruckArea/>
      </Grid>
      <Grid item xs={12} >
        <Footer/>
      </Grid> 
      </Grid>
    </>
  );
  }

}

export default DashPerform;
