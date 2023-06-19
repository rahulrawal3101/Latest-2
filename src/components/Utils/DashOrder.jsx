import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import order from '../../images/order.png'
import rtoReport from '../../images/rto report.png'
import dboard from '../../images/dboard.png'
import indiaMap from '../../images/indiaMap.png'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import Footer from '../Home/Footer';

const DashOrder = ({selected}) => {
  if(selected){
 return (
    <>
    <Grid container ml="20px" spacing={2}>
      <Grid item xs={12} >
        <Box >
          <Paper sx={{ m: "auto", width: "240px", height: "130px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Typography mt="8px">Total Revenue</Typography>
            <Typography mt="10px" color="#1a237e" fontSize={20}><b>0</b></Typography>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ display: "flex", height: "150px", p: "10px" }}>
          <Grid container mt="15px">
            <Grid item xs={1.7} borderRight="1px solid #bdbdbd">
              <Typography mt="3px" align='center'>Not Picked</Typography>
              <Typography color="#3d5afe" fontSize={20} mt="20px" align='center'><b>0</b></Typography>
            </Grid>
            <Grid item xs={1.7} borderRight="1px solid #bdbdbd">
              <Typography mt="3px" align='center'>Live</Typography>
              <Typography color="#3d5afe" fontSize={20} mt="20px" align='center'><b>0</b></Typography>
            </Grid>
            <Grid item xs={1.7} borderRight="1px solid #bdbdbd">
              <Typography mt="3px" align='center'>Delivered</Typography>
              <Typography color="#3d5afe" fontSize={20} mt="20px" align='center'><b>0</b></Typography>
            </Grid>
            <Grid item xs={1.7} borderRight="1px solid #bdbdbd">
              <Typography mt="3px" align='center'>RTO</Typography>
              <Typography color="#3d5afe" fontSize={20} mt="20px" align='center'><b>0</b></Typography>
            </Grid>
            <Grid item xs={1.7} borderRight="1px solid #bdbdbd">
              <Typography mt="3px" align='center'>RTD</Typography>
              <Typography color="#3d5afe" fontSize={20} mt="20px" align='center'><b>0</b></Typography>
            </Grid>
            <Grid item xs={1.7} borderRight="1px solid #bdbdbd">
              <Typography mt="3px" align='center'>Cancelled</Typography>
              <Typography color="#3d5afe" fontSize={20} mt="20px" align='center'><b>0</b></Typography>
            </Grid>
            <Grid item xs={1.7} borderRight="1px solid #bdbdbd">
              <Typography mt="3px" align='center'>Lost</Typography>
              <Typography color="#3d5afe" fontSize={20} mt="20px" align='center'><b>0</b></Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={8} >
        <Paper sx={{ p: "10px", borderRadius: '12px', height: "100%" }} >
          <Box width="100%" p="6px" >
            <Box>
              <Typography color="#2962ff" fontSize="20px"><b> Revenue Report</b></Typography>
            </Box>
            <Box textAlign="center" >
              <img src={order} alt='dbboard' height="30%" width="30%" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
              <Typography sx={{ fontSize: "25px", width: "75%", color: "#1a237e" }} ><b>Product RTO Report</b></Typography>
              <Typography width="75%" mt="8px" >Here you can see the daily total vs pending orders</Typography>
            </Box>
            <Box textAlign="center" m="10px">
              <Button variant='outlined' color="primary"><PlayCircleOutlinedIcon /> See How it works</Button>
            </Box>
          </Box>

        </Paper>
      </Grid>

      <Grid item xs={12} lg={3.8}>
        <Paper sx={{ p: "10px", borderRadius: '12px', height: "100%" }} >
          <Box width="100%" mt="8px" p="6px" >
            <Box>
              <Typography color="#2962ff" fontSize="20px"><b>High RTO Products</b></Typography>
            </Box>
            <Box textAlign="center">
              <img src={rtoReport} alt='dbboard' height="50%" width="50%" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
              <Typography sx={{ fontSize: "25px", width: "75%", color: "#1a237e" }} ><b>Order Dispatch Pending</b></Typography>
              <Typography width="75%" mt="8px" >Here you can see the daily total vs pending orders</Typography>
            </Box>
            <Box textAlign="center" m="10px">
              <Button variant='outlined' color="primary"><PlayCircleOutlinedIcon /> See How it works</Button>
            </Box>
          </Box>

        </Paper>
      </Grid>

      <Grid item xs={12}>
        
        <Paper>
          <Grid container p="10px" >
            <Grid item xs={12} p="10px">
              <Typography color="#2962ff" fontSize="20px" ml="8px"><b>High RTO Cities & States</b></Typography>
            </Grid>
            <Grid item xs={12} sx={{ color:"#2962ff", border: "1px solid #e0e0e0", p: "10px" }}>
              <span style={{ margin: "10px 12px 10px 8px" }}>Area</span>
              <span style={{ margin: "10px 12px 10px 8px" }}>RTO Total orders</span>
              <span style={{ margin: "10px 8px 10px 8px" }}>RTO%</span>
            </Grid>
          </Grid>
       
      
     <Grid container spacing={1}>
      <Grid item lg={6} xs={12}   >
        <Paper sx={{ p: " 7px 0px 0px 0px", borderRadius: '12px', height: "100%", lineHeight: "80px" }} >
          <Box width="100%" mt="8px" p="6px" >
            <Box textAlign="center">
              <img src={dboard} alt='dbboard' height="180px" width="230px" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
              <Typography sx={{ fontSize: "25px", width: "90%" }}><b>High Order Volume Cities & States</b></Typography>
              <Typography width="75%" mt="8px" >Here you will be able to see top cities from where the maximum orders are coming.</Typography>
            </Box>
            <Box textAlign="center" m="10px">
              <Button variant='outlined' color="primary"><PlayCircleOutlinedIcon sx={{ marginRight: "3px" }} /> See How it works</Button>
            </Box>
          </Box>

        </Paper>
      </Grid>
      <Grid item lg={6} xs={12} >
        <Paper sx={{ m:"auto", height: "100%", width: "100%", borderRadius: '12px' }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={indiaMap} height="40%" width="50%" />
          </Box>
        </Paper>
      </Grid>
      </Grid>
      </Paper>
      </Grid>

        <Footer />
    
      </Grid>
    </>
  );
  }
 
}

export default DashOrder;
