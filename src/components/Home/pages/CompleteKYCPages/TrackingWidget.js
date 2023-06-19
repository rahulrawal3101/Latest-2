import { Box, Button, FormControlLabel, Grid, Paper, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import '../../Home.css'
import { useState } from 'react'

const TrackingWidget = ({selected}) => {
  const [customBtn,setCustomBtn] = useState({font:"#000000",border:"#FDAF23",background:"#FDAF23"})
  
if(selected){
  return(  
      <Grid item lg={9} md={9} sm={12} xs={12} sx={{height:"100%"}}>
        <Paper sx={{height:"520px",mr:"10px"}} >
          <Box id="generalDetailsKycBox" >
            <Typography  variant='h1' sx={{color: 'rgb(38, 63, 151)',p: '30px 20px',fontSize:"23px",fontWeight:'bold'}}>Tracking Widgets</Typography>
            </Box>
       <Grid container pl="20px" mt="50px" spacing={1}>
        <Grid item lg={7} md={7} sm={7} xs={12}>
          <Box><Typography mb="15px" sx={{color:"rgb(38, 63, 151);"}} fontWeight="bold" fontSize="15px">Setup tracking button</Typography></Box>
          <Box><Typography mb="10px" sx={{color:"rgb(38, 63, 151);"}}  fontSize="11px">Tracking button size</Typography>
            <RadioGroup row aria-labelledby="demo-row" name="row-radio">
        <FormControlLabel value="small" control={<Radio />} label={<Button sx={{border:`1px solid ${customBtn.border}`,color:customBtn.font,textTransform:"unset" ,height:"25px",bgcolor:customBtn.background}} variant='contained' size='small'>Track</Button>} />
        <FormControlLabel value="medium" control={<Radio />} label={<Button  sx={{border:`1px solid ${customBtn.border}`,color:customBtn.font,textTransform:"unset",height:"30px",bgcolor:customBtn.background}} variant='contained' size='medium'>Track</Button>}  />
        <FormControlLabel value="large" control={<Radio />} label={<Button  sx={{border:`1px solid ${customBtn.border}`,color:customBtn.font,textTransform:"unset",height:"35px",bgcolor:customBtn.background}} variant='contained' size="large">Track</Button>} />
      </RadioGroup>
          </Box>
          <Box><Typography mt="10px" mb="10px" sx={{color:"rgb(38, 63, 151);"}}  fontSize="11px">Color</Typography>
          <Stack direction="row" spacing={2}>
            <Stack alignItems="center"> <input onChange={(e)=>setCustomBtn(prev=>{return {...prev,font:e.target.value}})} type='color' value={customBtn.font}/><Typography fontSize="10px">Font</Typography></Stack>
           <Stack alignItems="center"> <input onChange={(e)=>setCustomBtn(prev=>{return {...prev,border:e.target.value}})} type='color' value={customBtn.border}/><Typography  fontSize="10px">Border</Typography></Stack>
           <Stack alignItems="center"> <input onChange={(e)=>setCustomBtn(prev=>{return {...prev,background:e.target.value}})} type='color' value={customBtn.background}/><Typography  fontSize="10px">Background</Typography></Stack>
          </Stack>
          </Box>
        </Grid>
         <Grid item  lg={4.5} md={4.5} sm={4.5} xs={12} border="1px solid rgb(223, 224, 235)" borderRadius="10px" >
                 <Box><Typography mb="15px" sx={{color:"rgb(38, 63, 151);"}} fontWeight="bold" fontSize="15px">Tracking button code</Typography></Box>
                 <Box><Typography mb="10px" sx={{color:"rgb(38, 63, 151);"}}  fontSize="11px">Copy & Paste the code below in your website HTML page</Typography></Box>
                 <Box sx={{border:"1px dotted black",p:1}}>
                  <Typography fontSize="10px">&lt;div id="pickrr-tracking-container"&gt; &lt;div id="pickrr-tracking-radio-group"&gt; &lt;input type="radio" id="tracking_id" name="pickrr-query-type" value="tracking_id" checked /&gt; &lt;label for="tracking_id"&gt;Track ID&lt;/label&gt; &lt;input type="radio" id="client_order_id" name="pickrr-query-type" value="client_order_id" /&gt; &lt;label for="client_order_id"&gt;Order ID&lt;/label&gt; &lt;/div&gt; &lt;input id="pickrr-tracking-input" data-id="857678" /&gt; &lt;button id="pickrr-tracking-btn" style="height: 24px; width: 70px; font-size: 12px; padding: 4px 36px; border-radius: 5px; color: #272727; border: 1px solid #fdaf23; background: #fdaf23;" &gt; Track &lt;/button&gt; &lt;/div&gt; &lt;script src="https://widget.pickrr.com/script.js"&gt;&lt;/script&gt;</Typography>
                 </Box>
        </Grid>
       </Grid>
        </Paper>
    </Grid>
  )
}
}

export default TrackingWidget