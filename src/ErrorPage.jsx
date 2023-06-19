import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import sadface from '../src/images/sadFace.gif'
import '../src/css/Errorpage.css'

const ErrorPage = () => {
  return (
    <>
      {/* <Container maxWidth={"xl"} disableGutters> */}
        <Grid container >
            <Grid item xs={12}  height="40vh" display="flex"  justifyContent="center" alignItems="flex-end" sx={{background:'linear-gradient(to right bottom, #3b1a76,#705cdf)' }}  >
              <Typography variant='h1' sx={{ fontWeight:"600px",fontSize:"200px",mb:"-35px" }} fontFamily="cursive" color="#d3d3d3" ><b>404</b></Typography>
            </Grid>
            <Grid item xs={12} height="60vh" bgcolor="#d3d3d3"  display="flex" justifyContent="center" flexDirection="column"  >
               <Box marginTop="30px" id="firstBox">
                <Typography variant='h3'id="sorry1" fontFamily="Comic Sans MS" align='center'>Sorry, Page Not Found</Typography>
                <Typography variant='h5'id="sorry2" fontFamily="Comic Sans MS" align='center'>Sorry, Page Not Found</Typography>

                <Typography variant='h6'id="sorry3" align='center'>The page you requested could not be found</Typography>
                <Typography id="sorry4" align='center'>The page you requested could not be found</Typography>
               </Box>
               <Box textAlign="center">
                <img src={sadface} height="130px" width="130px"/>
            
               </Box>
            </Grid>
        </Grid>
      {/* </Container> */}
    </>
  );
}

export default ErrorPage;
