import React from 'react';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import Footer from '../Home/Footer';
import RevenueReport from '../../images/RevenueReport.png';
import revenue from '../../images/responsive.png';
import revenue_cities from '../../images/revenue_cities.jpg'

const DashRevenue = ({selected}) => {
    if(selected){
  return (
        <>
            <Grid item lg={8} xs={12}   >
                <Paper sx={{ borderRadius: '12px',mb:"20px",p:"10px" }} >
                    <Box >
                        <Typography color="#2962ff" fontSize="20px"><b>Revenue Report</b></Typography>
                    </Box>
                    <Grid container   >
                        <Grid item  xs={4} sx={{p:"12px",borderRight:"1px solid #bdbdbd"}}>
                        <Typography align='center'>Total Revenue</Typography>
                        <Typography align='center' color="#2962ff"><b>₹ 0</b></Typography>
                        </Grid>
                        <Grid item  xs={4} sx={{p:"12px",borderRight:"1px solid #bdbdbd"}}>
                        <Typography align='center'>COD revenue</Typography>
                        <Typography align='center' color="#2962ff"><b>₹ 0</b></Typography>
                        </Grid>
                        <Grid item  xs={4} sx={{p:"12px"}}>
                        <Typography align='center'>Pre-Paid revenue</Typography>
                        <Typography align='center'color="#2962ff"><b>₹ 0</b></Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper sx={{ p:"10px", borderRadius: '12px'}} >
                    <Box width="100%" mt="8px" p="6px" >
                        <Box>
                            <Typography color="#2962ff" fontSize="20px"><b>COD vs Prepaid Revenue</b></Typography>
                        </Box>
                        <Box textAlign="center">
                            <img src={RevenueReport} alt='dbboard' height="180px" width="230px" />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "25px", width: "75%",color:"#1a237e" }} ><b>Revenue Report</b></Typography>
                            <Typography width="75%" mt="8px" >Here you will see total revenue of the delivered orders in last 7 days and split by cod vs Prepaid</Typography>
                        </Box>
                        <Box textAlign="center" m="10px">
                            <Button variant='outlined' color="primary"><PlayCircleOutlinedIcon /> See How it works</Button>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            <Grid item lg={3.8} xs={12}  >
            <Paper sx={{ p:"10px", borderRadius: '12px',height:"100%"}}  >
                    <Box width="100%" mt="8px" p="6px">
                        <Box>
                            <Typography color="#2962ff" fontSize="20px"><b>Top 5 Location's Revenue</b></Typography>
                        </Box>
                        <Box textAlign="center" mt="20px">
                            <img src={revenue_cities} alt='dbboard' height="180px" width="230px" />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "20px",color:"#1a237e",fontWeight:800 }} ><b>Top 5 High Revenue Generating Cities</b></Typography>
                            <Typography width="82%" mt="8px" >Here you will see total revenue of the delivered orders in last 7 days and split by cod vs Prepaid</Typography>
                        </Box>
                        <Box textAlign="center">
                            <Button variant='outlined' color="primary" size='small'><PlayCircleOutlinedIcon /> See How it works</Button>
                        </Box>
                    </Box>

                </Paper>
            </Grid>
            <Grid item xs={12} >
            <Paper sx={{ p:"15px", borderRadius: '12px',height:"100%" }} >
                    <Box width="100%" mt="8px" p="6px" bgcolor="#f8f9fa" >
                        <Box textAlign="center">
                            <img src={revenue} alt='dbboard' height="300px" width="320px" />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center",m:"20px" }}>
                            <Typography sx={{ fontSize: "25px", width:"75%",color:"#1a237e" }} ><b>Best Selling SKUs</b></Typography>
                            <Typography width="75%" mt="8px" >Here you will see revenue from top SKUs and their ordered quantities.</Typography>
                        </Box>
                        <Box textAlign="center" m="10px">
                            <Button variant='outlined' color="primary"><PlayCircleOutlinedIcon /> See How it works</Button>
                        </Box>
                    </Box>

                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </>
    );
    }
  
}

export default DashRevenue;
