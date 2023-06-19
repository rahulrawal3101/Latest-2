import { Box, FormControlLabel, Grid, List, ListItem, Paper, Radio, RadioGroup, Switch, Typography } from '@mui/material'
import '../../Home.css'
import { useState } from 'react'
const def ={a:"150px",b:"150px",c:"150px",d:"150px"}
const imageLinks = {
  '4*4':"https://pickrr.s3.amazonaws.com/2022-03-16T14:30:30.395439_Group%20(3).svg",
  '4.5*4.25':"https://res.cloudinary.com/pickrr/image/upload/v1623954810/label_sudque.svg",
  '4*6':"https://res.cloudinary.com/pickrr/image/upload/v1623955548/label_6_4_rswkuv.svg",
  'Old Format':"https://res.cloudinary.com/pickrr/image/upload/v1623955548/label_6_4_rswkuv.svg"
}
const LabelSettings = ({selected}) => {
const [choose,setChoose] =useState(def)
const [menu,setMenu] = useState({first:false,second:false})
const selectHandler = (e)=>{setChoose(def);if(e.target.value === "fourByFour"){
  setChoose(prev=>{return {...prev,a:"100px"}})
  setMenu(prev=>{return {...prev,first:true}})
};if(e.target.value === "fourHalfBySix"){setChoose(prev=>{return {...prev,b:"100px"}});setMenu(prev=>{return {...prev,second:false,first:false}})};if(e.target.value === "fourBySix"){setChoose(prev=>{return {...prev,c:"100px"}}); setMenu(prev=>{return {...prev,second:false,first:false}})};if(e.target.value === "old"){
  setChoose(prev=>{return {...prev,d:"100px"}})
  setMenu(prev=>{return {...prev,second:true,first:false}})
}}

const WrapperRadio = ({choose,pic,value,item,size})=>{return (<Box sx={{mr:"30px"}} component={"label"}  display="flex" flexDirection="column" p={1} mr="5px"><FormControlLabel  value={value}  control={<Radio size='small'/>}   label={<Typography fontSize="13px">{size}</Typography>}/>{choose[item] === "100px" ? <Paper  sx={{pt:4,pl:2,pr:3,pb:3}} elevation={5}><img style={{cursor:"pointer"}}  width={choose[item]} src={pic} alt="4"/></Paper> :<img style={{cursor:"pointer"}}  width={choose[item]} src={pic} alt="4"/> }</Box>)}

  if(selected){
  return (
          <Grid item lg={9} md={9} sm={12} xs={12} sx={{height:"100%"}}>
              <Paper sx={{height:"fit-content",mr:"10px",pb:"10px"}} >
                  <Box id="generalDetailsKycBox" >
                        <Typography  variant='h1' sx={{color: 'rgb(38, 63, 151)',p: '30px 20px',fontSize:"23px",fontWeight:'bold'}}>Label Settings</Typography>
                </Box>
       <Grid container pl="20px" mt="50px">
        <Grid item lg={12} md={12} sm={12} xs={12} >
          <Box><Typography mb="15px" sx={{color:"rgb(38, 63, 151);"}} fontWeight="bold" fontSize="15px">Label Size</Typography></Box>
          <RadioGroup row aria-labelledby="demo-row" name="row-radio" defaultValue={false} onChange={selectHandler}>
            <WrapperRadio size="4*4" item='a' choose={choose} pic={imageLinks['4*4']} value="fourByFour"/>
            <WrapperRadio size="4.5*4.25" item='b' choose={choose} pic={imageLinks['4.5*4.25']} value="fourHalfBySix"/>
            <WrapperRadio size="4*6" item='c' choose={choose} pic={imageLinks['4*6']} value="fourBySix"/>
            <WrapperRadio size="Old Format" item='d' choose={choose} pic={imageLinks['Old Format']} value="old"/>
          </RadioGroup>
        </Grid>
        <Grid item>
          {!menu.first? <Box sx={{mt:"20px",display:"flex"}}>
            <div style={{display:"flex",alignItems:"center"}}>
  <input name="page" id="single" type="radio" />
            <label htmlFor="single" style={{color: 'rgb(38, 63, 151)',fontSize:"11px",fontWeight:550}}>Single page label</label>
            </div>
         <div style={{display:"flex",alignItems:"center"}}>
    <input name="page" id="single" type="radio" />
            <label htmlFor="multiple" style={{color: 'rgb(38, 63, 151)',fontSize:"11px",fontWeight:550}}>Multiple page label</label>
         </div>
          </Box>:""}
          {!menu.second ?   <Box sx={{mt:"20px"}}>
            <Typography ml="7px" fontWeight={700} sx={{color: 'rgb(38, 63, 151)'}}>File Type</Typography>
            <div style={{display:"flex"}}>
                <div style={{display:"flex",alignItems:"center"}}>
  <input name="cat" id="HTML" type="radio" />
            <label htmlFor="HTML" style={{color: 'rgb(38, 63, 151)',fontSize:"11px",fontWeight:550}}>HTML</label>
            </div>
         <div style={{display:"flex",alignItems:"center"}}>
    <input  name="cat" id="PDF" type="radio" />
            <label htmlFor="PDF" style={{color: 'rgb(38, 63, 151)',fontSize:"11px",fontWeight:550}}>PDF</label>
         </div>
            </div>
          </Box>:""}
        
          <Box>
             <RadioGroup  aria-labelledby="demo-row" name="row-radio" defaultValue={false}>
            <FormControlLabel   control={<Switch />}   label={<Typography fontSize="13px">Custom Product Name</Typography>}/>
            <FormControlLabel   control={<Switch />}   label={<Typography fontSize="13px">Hide Invoice Value</Typography>}/>
            <FormControlLabel   control={<Switch />}   label={<Typography fontSize="13px">Hide Contact number</Typography>}/>
            <FormControlLabel   control={<Switch />}   label={<Typography fontSize="13px">Show Invoice Barcode</Typography>}/>
            <FormControlLabel   control={<Switch />}   label={<Typography fontSize="13px">Hide Gst Number</Typography>}/>
          </RadioGroup>
          </Box>
        </Grid>
       </Grid>
        </Paper>
    </Grid>
  )
  }
}

export default LabelSettings