import StepperV from '../../../Global/Stepper'
import {Info, PhotoCamera,AddHome ,Description} from '@mui/icons-material'
import { Box, Button, Divider,FormControlLabel, Grid, IconButton, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import '../../Home.css'
import { useEffect, useState } from 'react';

const KYCSection = ({selected}) => {
   const [stepHandler,setStepHandler] = useState(0)
   const [kycDone,setKycDone] = useState(false)
   const [kycUserData,setKycUserData] = useState({panImage:"",adBacImage:"",adFrontImage:"",isGST:false,companyType:"",aadharNo:"",aadharName:"",panName:"",panNumber:"",bankName:"",acHolderName:"",acNumber:"",ifsc:"",checkImage:""})

   useEffect(()=>{const checkKYC = localStorage.getItem('kycDone');if(checkKYC){setKycUserData(JSON.parse(checkKYC));setKycDone(true)}},[])

useEffect(()=>{if(kycUserData.companyType){setStepHandler(1)}if(kycUserData.companyType && kycUserData.aadharNo && kycUserData.aadharName){setStepHandler(2)}if(kycUserData.companyType && kycUserData.aadharNo && kycUserData.aadharName && kycUserData.panName && kycUserData.panNumber){setStepHandler(3)}if(kycUserData.companyType && kycUserData.aadharNo && kycUserData.aadharName && kycUserData.panName && kycUserData.panNumber && kycUserData.bankName && kycUserData.acHolderName && kycUserData.acNumber && kycUserData.ifsc){setStepHandler(4)}},[kycUserData])

const submitHandler =(e)=>{e.preventDefault();if(stepHandler === 3 || stepHandler === 4){
   setKycDone(true);console.log(kycUserData);
   localStorage.setItem("kycDone",JSON.stringify(kycUserData))
}}

if(selected){
   
  return (
        <Grid item lg={9} md={9} sm={12} xs={12} >
         <form onSubmit={submitHandler}>
        <Paper sx={{height:"100%",mr:"10px",p:"10px",pl:"18px"}} >
            <Box sx={{display:'flex'}}>
               <Typography  id="successKycText" fontWeight={600} sx={{ color:"rgb(0, 81, 191)"}}>
                  Complete KYC Verification
               </Typography>
               <Typography id="successKycText" ml="10px" fontWeight={700} sx={{color:`${kycDone ?"green" : "red"}`}}>{kycDone ?"SUCCESS" :"Pending"}</Typography>
            </Box>
            <Box sx={{p:"7px",border:'1px solid  #b7eb8f',backgroundColor:" #f6ffed;",mt:"12px",mb:"20px"}}>
               <Typography id="successKycText" fontSize="12px" sx={{color:kycDone ?"green" : "red" }}>
                  <strong style={{color:"green"}}>{kycDone ?"Congratulation ! " : "Ufff!!!"} </strong>{kycDone ? "Your KYC verification is done, now you can start placing your orders":"Your KYC verification is pending, please complete to explore all features."} 
                  </Typography>
            </Box>

            <Box sx={{backgroundColor:"rgb(245, 249, 255)",display:'flex'}}>
               <Grid item container  >
                  <Grid item  lg={6} md={6} sm={12} xs={12} sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
                  <Box >
               <Typography align='center'  fontSize={'12px'} fontWeight={800}>Do you have GST Number for your Business ?</Typography>
            <Box  sx={{display:'flex',alignItems:"center",justifyContent:"center"}}>
      <RadioGroup  row 
   aria-labelledby="row-radio-buttons"
   name="row-radio-buttons-group" >
            <FormControlLabel disabled={kycDone ?true:false} name='gstYes'  style={{fontSize:"14px"}} onChange={(e)=>setKycUserData(prev=>{return {...prev,isGST: true}})} value="true" control={<Radio size="small" />} label={<Typography fontSize="12px">Yes, I have GST</Typography>} />
        <FormControlLabel disabled={kycDone ?true:false} name='gstNo'  style={{fontSize:"14px"}} onChange={(e)=>setKycUserData(prev=>{return {...prev,isGST: false}})}   value="false" control={<Radio size="small" />} label={<Typography fontSize="12px">No, I don't Have</Typography>} />
      </RadioGroup>
            </Box>
            </Box>
            </Grid>
                  <Grid item lg={6} md={6}  sm={12} xs={12} sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
                                 <Box >
               <img src="https://pickrr.s3.amazonaws.com/2022-10-11T13:20:17.814731_GST-Certificate.png" alt="gst" />
            </Box>
                  </Grid>
               </Grid>
            </Box>
            <Grid item container>

               {/* kyc process steper */}
               <Grid id="kycProcessBox" mt="12px" pr="5px" pl="5px" item lg={2} md={3} sm={3} xs={12} sx={{bgcolor:"rgb(245, 249, 255)"}}>
                  <Typography fontWeight={800} sx={{color:" rgb(0, 81, 191)"}} align='center'>KYC Process</Typography>
                    <StepperV stepsCopm={kycDone ? 3 :stepHandler}/>
               </Grid>

               {/* kyc registration form */}
               <Grid mt="12px" pr="5px" pl="5px" item lg={9} md={9} sm={9} xs={12} sx={{overflowY:"scroll",height:"20rem"}}>
                  <Box sx={{p:"7px",display:'flex',alignItems:"center", bgcolor:" #e6f7ff",border:"1px solid #91d5ff"}}>
                     <Info sx={{color:" #1976d2",fontSize:"10px"}}/>
                     <Typography ml="5px" fontSize="10px">
                        Note: All the uploaded documents should belong to the same person
                     </Typography>
                  </Box>
                  {/* company type */}
                  <Box sx={{pt:"10px",flexDirection:"column",pb:"10px"}}>
                     <Box sx={{display:"flex",alignItems:"center",mb:"10px"}}>
                        <img src="https://pickrr.s3.amazonaws.com/2022-10-11T15:00:54.483069_one.png" alt="one" />
                                        <Typography ml="10px" fontWeight={800} fontSize="12px">
                          Company Type
                        </Typography>
                             </Box>
                             <Grid item container spacing={2}>
                          <Grid item>
                        <Button disabled={kycDone ?true:false} onClick={()=>setKycUserData(prev=>{return {...prev,companyType: "Individual"}})} size='small' variant='outlined' sx={{textTransform:"unset",bgcolor:`${kycUserData.companyType ==="Individual"? "green" :""}`,color:`${kycUserData.companyType ==="Individual"? "white" :""}`,'&:hover':{bgcolor:"green",color:"white"}}} startIcon={<Description/>} >Individual</Button>
                        </Grid>
                        <Grid item>
                        <Button disabled={kycDone ?true:false} onClick={(e)=>setKycUserData(prev=>{return {...prev,companyType: "Small Enterprise"}})}  size='small' variant='outlined' sx={{textTransform:"unset",bgcolor:`${kycUserData.companyType  ==="Small Enterprise"? "green" :""}`,color:`${kycUserData.companyType ==="Small Enterprise"? "white" :""}`,'&:hover':{bgcolor:"green",color:"white"}}} startIcon={<AddHome/>}>Small Enterprise</Button>
                        </Grid>
                             </Grid>
                  </Box>
                               <Divider/>
{/* adhar details */}
                  <Box sx={{pt:"10px",flexDirection:"column",pb:"10px"}}>
                     <Box sx={{display:"flex",alignItems:"center",mb:"10px"}}>
                        <img src="	https://pickrr.s3.amazonaws.com/2022-10-11T15:07:35.507765_two.png" alt="two" />
                                        <Typography ml="10px" fontWeight={800} fontSize="12px">
                          Aadhar Details
                        </Typography>
                             </Box>
                             <Grid item container spacing={2}>
                          <Grid item >
                       <Typography fontSize="12px" mb="5px" fontWeight="600">Aadhar Number</Typography>
                       <Box sx={{display:'flex'}}>
                       <TextField value={kycUserData.aadharNo} disabled={kycDone ?true:false} name='aadharno' type="number" onChange={(e)=>setKycUserData(prev=>{return {...prev,aadharNo:e.target.value}})}  size='small' required label={!kycDone && "Aadhar Number"} variant="outlined" />
                       <IconButton color="primary" aria-label="upload picture" component="label"><input onChange={e=>setKycUserData(prev=>{return {...prev,adFrontImage:e.target.files[0]}})} disabled={kycDone ?true:false} required name="aadharfront"  hidden accept="image/jpg" type="file" /><PhotoCamera /></IconButton>
                       </Box>
                        </Grid>
                            <Grid item>
                       <Typography fontSize="12px"  mb="5px" fontWeight="600">Aadhar Name</Typography>
                          <Box sx={{display:'flex'}}>
                       <TextField value={kycUserData.aadharName} disabled={kycDone ?true:false} name='aadharname' size='small' required onChange={(e)=>setKycUserData(prev=>{return {...prev,aadharName:e.target.value}})}  label={!kycDone && "Aadhar Name"}  variant="outlined" />
                      <IconButton color="primary" aria-label="upload picture" component="label"><input onChange={e=>setKycUserData(prev=>{return {...prev,adBacImage:e.target.files[0]}})} disabled={kycDone ?true:false} required name="aadharback"  hidden accept="image/jpg" type="file" /><PhotoCamera /></IconButton>
                          </Box>
                        </Grid>
                             </Grid>
                  </Box>
                               <Divider/>
                  {/* pan details */}
                                    <Box sx={{pt:"10px",flexDirection:"column",pb:"10px"}}>
                     <Box sx={{display:"flex",alignItems:"center",mb:"10px"}}>
                        <img src="https://pickrr.s3.amazonaws.com/2022-10-11T15:10:33.211631_three.png" alt="three" />
                                        <Typography ml="10px" fontWeight={800} fontSize="12px">
                          PAN Details
                        </Typography>
                             </Box>
                             <Grid item container spacing={2}>
                          <Grid item >
                       <Typography fontSize="12px" mb="5px" fontWeight="600">Legal Name</Typography>
                       <Box sx={{display:'flex'}}>
                       <TextField value={kycUserData.panName} disabled={kycDone ?true:false} name='panname' size='small' required onChange={(e)=>setKycUserData(prev=>{return {...prev,panName:e.target.value}})} label= {!kycDone && "Legal Name"} variant="outlined" />
                        <IconButton color="primary" aria-label="upload picture" component="label"><input onChange={e=>setKycUserData(prev=>{return {...prev,panImage:e.target.files[0]}})} disabled={kycDone ?true:false} name="pancard" required hidden accept="image/jpg" type="file" /><PhotoCamera /></IconButton>
                       </Box>
                        </Grid>
                            <Grid item>
                       <Typography fontSize="12px"  mb="5px" fontWeight="600">PAN Number</Typography>
                       <TextField value={kycUserData.panNumber} disabled={kycDone ?true:false} name='pannumber' size='small' required onChange={(e)=>setKycUserData(prev=>{return {...prev,panNumber:e.target.value}})} label= {!kycDone && "PAN Number"} variant="outlined" />
                        </Grid>
                             </Grid>
                  </Box>
                  <Divider/>
                  {/* bank details */}
                                                    <Box sx={{pt:"10px",flexDirection:"column",pb:"10px"}}>
                     <Box sx={{display:"flex",alignItems:"center",mb:"10px"}}>
                        <img src="https://pickrr.s3.amazonaws.com/2022-10-18T13:24:55.843068_four.png" alt="four" />
                                        <Typography ml="10px" fontWeight={800} fontSize="12px">
                          Bank Details <span style={{fontWeight:"200"}}> (Optional)</span>
                        </Typography>
                             </Box>
                             <Grid item container spacing={2}>
                          <Grid item >
                       <Typography fontSize="12px" mb="5px" fontWeight="600">Account Holder Name</Typography>
                       <Box sx={{display:'flex'}}>
                       <TextField name='acholdername' size='small'  label="Full Name" onChange={(e)=>setKycUserData(prev=>{return {...prev,acHolderName:e.target.value}})} variant="outlined" />
                        <IconButton color="primary" aria-label="upload picture" component="label"><input  onChange={e=>setKycUserData(prev=>{return {...prev,checkImage:e.target.files[0]}})} name="acholdername"  hidden accept="image/jpg" type="file" /><PhotoCamera /></IconButton>
                       </Box>
                        </Grid>
                            <Grid item>
                       <Typography fontSize="12px"  mb="5px" fontWeight="600">Bank Name</Typography>
                       <TextField name='bankname' size='small'  label="Bank Name" onChange={(e)=>setKycUserData(prev=>{return {...prev,bankName:e.target.value}})} variant="outlined" />
                        </Grid>
                        <Grid item>
                       <Typography fontSize="12px"  mb="5px" fontWeight="600">Account Number</Typography>
                       <TextField name='acnumber' type='number' size='small'  label="Account Number" onChange={(e)=>setKycUserData(prev=>{return {...prev,acNumber:e.target.value}})} variant="outlined" />
                        </Grid>
                          <Grid item>
                       <Typography fontSize="12px"  mb="5px" fontWeight="600">IFSC Code</Typography>
                       <TextField name='ifsc' size='small'  label="IFSC Code" onChange={(e)=>setKycUserData(prev=>{return {...prev,ifsc:e.target.value}})} variant="outlined" />
                        </Grid>
                        <Button type='submit' size='small' sx={{m:"20px"}} variant='contained'>Submit Bank Details</Button>
                             </Grid>
                  </Box>
                  <Divider/>
               <Button type='submit' size='small' sx={{mt:"10px",mb:"10px",bgcolor:"green"}} variant='contained'>Submit</Button>
               </Grid>
               {/* kyc registration form  end*/}

            </Grid>
        </Paper>
        </form>
    </Grid>
  )
}
}

export default KYCSection