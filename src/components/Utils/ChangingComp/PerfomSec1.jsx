import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import indiaMap from '../../../images/indiaMap.png'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const PerfomSec1 = () => {
    return (
        <>
                <Paper sx={{ p: " 7px 0px 90px 20px", borderRadius: '12px' }} elevation={3}>

                    <Typography color=" rgb(38, 63, 151);" ml="8px" fontWeight={800}>High Order Volume Cities & States</Typography>
                    <Grid container mt="50px" spacing={2}>
                        <Grid item lg={6} md={6}>
                            <Box mb="10px" sx={{justifyContent:"space-evenly",display:"flex",border:"1px solid rgb(237, 240, 249)",color:" rgb(126, 143, 204);"}}>
                                <Typography fontWeight={750}>CITIES</Typography>
                                 <Typography fontWeight={750}>ORDER COUNT</Typography>
                                  <Typography fontWeight={750}>PROPORTION</Typography>
                            </Box>
                            <Box sx={{p:"50px 10px",bgcolor:"rgb(237, 240, 249)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                               <Box width="74%" pb="10px"  sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
                              <img width="100px"  src="https://d10srchmli830n.cloudfront.net/1645780905701_Current-location-pana-2.svg"  alt='Google Map' />
                           <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <Typography textAlign="center" fontWeight={700} sx={{color:"rgb(38, 63, 151);"}}>
                                High Order Volume Cities & States
                            </Typography>
                            <Typography mb="20px" textAlign="center" sx={{color:" rgb(38, 63, 151);"}}>
                                Here you will be able to see top cities from where the maximum orders are coming.
                            </Typography>
                            <Button sx={{borderRadius:"20px"}} variant='outlined' startIcon={<PlayCircleIcon/>}>See How It Works</Button>
                           </Box>
                               </Box>
  
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <img width="290px" src={indiaMap} alt="map" />
                            </Box>
                            <Box>
                                <Box sx={{display:"flex",color:" rgb(38, 63, 151);"}}>
                                    <Typography flexGrow={1}>Low Volume</Typography>
                                      <Typography>High Volume</Typography>
                                </Box>
                                <Box>
                                    <img src="	https://d10srchmli830n.cloudfront.net/1646291570361_Rectangle-657.svg" alt="range" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
           
        </>
    );
}

export default PerfomSec1;
