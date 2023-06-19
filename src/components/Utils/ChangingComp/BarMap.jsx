import { Box, Grid, Paper, Typography } from '@mui/material';


const BarMap = () => {
  return (
    <>
    <Paper>
      <Grid container >
        <Grid item xs={12}>
          <Typography sx={{fontWeight:"800"}}>
            High Order Volume Cities & States
          </Typography>
        </Grid>
        <Grid item  xs={6}>
          <Box  sx={{display:"flex", color:"#8c9eff",justifyContent:"space-between" }}>
            <Typography sx={{fontWeight:"800"}}>CITIES</Typography>
            <Typography sx={{fontWeight:"800"}}>ORDER COUNT</Typography>
            <Typography sx={{fontWeight:"800"}}>PROPORTION</Typography>
          </Box>
        </Grid>
        <Grid item  xs={6}>
          
        </Grid>
      </Grid>
    </Paper>
    </>
  );
}

export default BarMap;
