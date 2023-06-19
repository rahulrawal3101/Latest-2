import { Avatar, Box, Button, Checkbox, Container, Grid, OutlinedInput, Typography } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import google from '../images/google.png'
import faceBook from '../images/faceBook.png'
import map from '../images/map.png'
import logo from '../images/pickrr_logo@2x.png';
import '../css/SignUp.css';
import facebook2 from '../images/facebook2.jpg';
// import google2 from '../src/images/google2.jpg'
import google3 from '../images/google3.png'

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Constant';


const Signup = () => {
  const navigate = useNavigate();
  const [isRegisterLoading,setIsRegisterLoading] = useState(false);
  const [isVerifyLoading,setIsVerifyLoading] = useState(false);
  const [inputField, setInputField] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    password: '',
    privacyNpolicyAgreed: false,
    mobile: ''
});
const [step, setStep] = useState(1);
const [apiResp,setApiResp]=useState('');
const [otp,setOtp]=useState('')
console.log(apiResp);

const handleChange = (event) => {
    let { name, value } = event.target;
    setInputField({ ...inputField, [name]: value });
}

const handleCheckBox = (e) => {
    if (inputField.privacyNpolicyAgreed == true) {
        setInputField({ ...inputField, privacyNpolicyAgreed: false });
    }
    if (inputField.privacyNpolicyAgreed == false) {
        setInputField({ ...inputField, privacyNpolicyAgreed: true });
    }
    console.log(e.target.checked)
}

const verifyOtp=()=>{
  setIsVerifyLoading(true);
    const bodyData = {
        id:apiResp,
        otp:otp
    }
    if(otp.length==6){
      axios.post(BASE_URL+'/verifyotp',bodyData).then((res)=>{
        console.log(res);
        console.log(BASE_URL+'/api/verify');
        if(res.data.message=="Otp Verified Successfully"){
            // alert(res.data.message);
            navigate('/login');
            setIsVerifyLoading(false);
        }
        else{
            setIsVerifyLoading(false);
            alert(res.data.message);
        }
    }).catch((error)=>{
        console.log(error)
        alert('Something Went Wrong.');
        setIsVerifyLoading(false);
    })
    }
    else{
      setIsVerifyLoading(false);
      alert('Please Enter 6 Digit OTP.')
    }
    console.log(bodyData);
    setIsVerifyLoading(false);
}

const submitRegister = () => {
  if(inputField.firstName && inputField.lastName && inputField.company && inputField.email.length>5 && inputField.mobile.length==10 && inputField.password){
    setIsRegisterLoading(true);
    const payloadBody = {
        firstName: inputField.firstName,
        lastName: inputField.lastName,
        company: inputField.company,
        email: inputField.email,
        password: inputField.password,
        privacyNpolicyAgreed: inputField.privacyNpolicyAgreed,
        mobile: inputField.mobile
    }
    // console.log(payloadBody);
    axios.post(BASE_URL+'/user', payloadBody).then((res) => {
        console.log(res);
        console.log(res.data.message);
        if (res.data.message == 'User Already Exist on this Email, Please use New Email to create Account') {
            alert(res.data.message);
            setIsRegisterLoading(false);
        }
        if (res.data.message == 'Register Successfully but Failed to send OTP') {
            // setStep(2);
            alert(res.data.message);
            setIsRegisterLoading(false);
        }
        if (res.data.message == 'Register Successfully and OTP Sent on Email') {
            setApiResp(res.data.response);
            setIsRegisterLoading(false);
            setStep(2);
            // alert(res.data.message);
        }
        else{
            alert(res.data.message);
            setIsRegisterLoading(false);
        }
    }).catch((error) => {
        console.log(error);
        setIsRegisterLoading(false);
        alert('Something Issue Occured');
    })
    console.log(payloadBody);
  }
  else{
    alert('Incomplete Form, Please Fill it Properly');
    setIsRegisterLoading(false);
  }  
}
if(step==1){
  return (
    <>
     <Container maxWidth='xl' disableGutters sx={{ background: 'linear-gradient(to right bottom, #3b1a76,#705cdf)', }}>
      <Box sx={{ backgroundImage: `url(${map})`,backgroundRepeat:"no-repeat" }}>
        <Box id="head" sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: "10px", bgcolor: "	#32CD32" }} maxWidth='xl'>
          <Typography align='center' >250K+ sellers are shipping their products with Shiprocket.📦 Hurry...Ship your first order now!🚚</Typography>
          <Button variant="contained" sx={{ bgcolor: "blue", color: "white", fontSize: "10px" }}>Click Here to Sign Up</Button>
        </Box>
        <Box id="head2" sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: "10px", bgcolor: "#32CD32" }} maxWidth='xl'>
          <Typography align='center'>250K+ sellers are shipping their products with Shiprocket.🚚</Typography>
          
        </Box>
        
        <Grid container wrap='wrap-reverse' mt="20px"  id="mainGrid" >
          <Grid item xs={12} md={6}  id="firstItem"  >
            <Box mb="20px" id="box">
              <img src={logo} width="80%" />
            </Box>

            <Box m="5px">
              <Typography variant="h4" fontWeight={800} color="white">Coming Together To Become Your Growth Partner!</Typography>
            </Box>

               <Box width="50%">
              <Typography align='center' sx={{ bgcolor: "#bcffc8", border: "1px solid #18f040", color: "#3f1f7e", m: "5px",mt:"15px", borderRadius: "7px",fontSize:"18px"}} >Pickrr now powered Shipocket</Typography>
              </Box>
            <Box m="30px 0px 25px 5px ">
              <Typography color='#bcffc8' variant="h6">Offering Digital Retailers An End-to-End <br/>Customer experience Solution</Typography>
            </Box>
            <Box m="8px">

              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>Reach 24000+ Pin Code Pan India</b></Typography>
              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>Deliver Across 220+ Countries & Territories</b></Typography>
              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>AI-Powered Courier Selection</b></Typography>
              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>Branded Order Tracking Page</b></Typography>
              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>Automated NDR Management</b></Typography>
              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>Up to 45% Lesser RTO</b></Typography>
            </Box>
          </Grid>
            

             {/* second box */}
          <Grid item id="secondItem" xs={12} md={6} >
           <Box mb="20px" id="box2" display="flex" justifyContent="center">
              <img src={logo} width="100%"  />
            </Box>
            <Box bgcolor='white' p="20px" sx={{borderRadius:"15px"}} >
            <Box>
              <Typography align="center" variant="h4">Get started with a free account</Typography>
            </Box>

            <Box m="10px" display="flex" justifyContent="center" alignItems="center" id="abc">
              <Button variant="outlined" sx={{ mr: "10px", border: "1px solid #D3D3D3", mb: "10px" }}><Avatar alt="google" src={google} sx={{ width: 24, height: 24, mr: "5px"}} />Google</Button>
              <Button variant="outlined" sx={{ mr: "10px", border: "1px solid #D3D3D3", mb: "10px" }}><Avatar alt="google" src={faceBook} sx={{ width: 24, height: 24, mr: "5px" }} />Facebook</Button>
            </Box>
            
              <Box display="flex" justifyContent="center" id="box2">
                <Box sx={{mr:"15px"}} >
                <img src={google3} height="50px" width="50px" style={{border:" 1px solid #D3D3D3",borderRadius:"50px"}}/>
                <Typography fontSize="10px" align='center'>Google</Typography>
                </Box >
                <Box sx={{ml:"15px"}} >
                <img src={facebook2}  height="50px" width="50px" style={{border:" 1px solid #D3D3D3",borderRadius:"50px"}}/>
                <Typography fontSize="10px" align='center'>faceBook</Typography>
                </Box>
              </Box> 

            <Box  display="flex" justifyContent="space-between" >
              <Box mr="10px">
                <Typography >First Name</Typography>
                <OutlinedInput onChange={handleChange} value={inputField.firstName} name="firstName" placeholder="Enter First name" />
              </Box>
              <Box mb="0px" ml="10px">
                <Typography >Last Name</Typography>
                <OutlinedInput onChange={handleChange} value={inputField.lastName} name="lastName" placeholder="Enter Last name" />
              </Box>
            </Box>

            <Box mt="8px"  display="flex" justifyContent="space-between" flexDirection="column" >
              <Box  mt="10px" >
                <Typography>Company Name</Typography>
                <OutlinedInput onChange={handleChange} value={inputField.company} name="company" placeholder="Enter Company name" fullWidth />
              </Box>

              <Box  mt="10px">
                <Typography>Email ID</Typography>
                <OutlinedInput onChange={handleChange} value={inputField.email} name="email" placeholder="Enter Email id" fullWidth />
              </Box>
              <Box  mt="10px">
                <Typography>Mobile</Typography>
                <OutlinedInput onChange={handleChange} value={inputField.mobile} name="mobile" placeholder="Mobile Number" fullWidth />
              </Box>
              <Box mt="10px">
                <Typography>Password</Typography>
                <OutlinedInput onChange={handleChange} value={inputField.password} name="password" placeholder="Enter Password" type="password" fullWidth />
              </Box>
            </Box>
            <Box  ml="-9px">
              <Checkbox onChange={handleCheckBox} checked={inputField.privacyNpolicyAgreed} /><span style={{ fontSize: "12px" }}>By clicking Sign up for Free, you agree to Shiprocket's <a href="#"> Terms of Services  </a>  and <a href="#"> Privacy Policy.</a></span>
            </Box>
            <Box mt="15px" >
              <Button onClick={submitRegister} variant="contained" sx={{ backgroundColor: isRegisterLoading?"#ef5350":"#745be7" }} fullWidth >{isRegisterLoading?'Please Wait':'Signup for free'}</Button>
            </Box>
            <Box mt="10px">
              <Typography onClick={()=>{navigate('/login')}} align="center">Already have an account? <a href="#">Login</a></Typography>
            </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </Container>
    </>
  );
}

if(step==2){
  return(
    <>
    <Container maxWidth='xl' disableGutters sx={{ background: 'linear-gradient(to right bottom, #3b1a76,#705cdf)', }}>
      <Box sx={{ backgroundImage: `url(${map})`,backgroundRepeat:"no-repeat" }}>
        <Box id="head" sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: "10px", bgcolor: "	#32CD32" }} maxWidth='xl'>
          <Typography align='center' >250K+ sellers are shipping their products with Shiprocket.📦 Hurry...Ship your first order now!🚚</Typography>
          <Button variant="contained" sx={{ bgcolor: "blue", color: "white", fontSize: "10px" }}>Click Here to Sign Up</Button>
        </Box>
        <Box id="head2" sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: "10px", bgcolor: "#32CD32" }} maxWidth='xl'>
          <Typography align='center'>250K+ sellers are shipping their products with Shiprocket.🚚</Typography>
          
        </Box>
        
        <Grid container wrap='wrap-reverse' mt="20px"  id="mainGrid" >
          <Grid item xs={12} md={6}  id="firstItem"  >
            <Box mb="20px" id="box">
              <img src={logo} width="80%" />
            </Box>

            <Box m="5px">
              <Typography variant="h4" fontWeight={800} color="white">Coming Together To Become Your Growth Partner!</Typography>
            </Box>

               <Box width="50%">
              <Typography align='center' sx={{ bgcolor: "#bcffc8", border: "1px solid #18f040", color: "#3f1f7e", m: "5px",mt:"15px", borderRadius: "7px",fontSize:"18px"}} >Pickrr now powered Shipocket</Typography>
              </Box>
            <Box m="30px 0px 25px 5px ">
              <Typography color='#bcffc8' variant="h6">Offering Digital Retailers An End-to-End <br/>Customer experience Solution</Typography>
            </Box>
            <Box m="8px">

              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>Reach 24000+ Pin Code Pan India</b></Typography>
              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>Deliver Across 220+ Countries & Territories</b></Typography>
              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>AI-Powered Courier Selection</b></Typography>
              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>Branded Order Tracking Page</b></Typography>
              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>Automated NDR Management</b></Typography>
              <Typography sx={{ color: "white", display: "flex", alignItems: "center", mt: "20px" }}><CheckRoundedIcon fontSize="small" sx={{ mr: "12px", borderRadius: '50px', backgroundColor: '#bcffc8', color: '#3f1f7e' }} /><b>Up to 45% Lesser RTO</b></Typography>
            </Box>
          </Grid>
            

             {/* second box */}
          <Grid item id="secondItem" xs={12} md={6} >
           <Box mb="20px" id="box2" display="flex" justifyContent="center">
              <img src={logo} width="100%"  />
            </Box>
            <Box bgcolor='white' p="20px" sx={{borderRadius:"15px",boxShadow:" 2px 2px 14px 2px rgba(250,247,250,1)"}} >
                <Box>
                    <Typography align='center' variant='h3' fontWeight={700}>
                        Verify OTP
                    </Typography>
                </Box>
                <Box textAlign="center" mt="20px">
                    <Typography variant='h5'>Enter OTP</Typography>
                    <OutlinedInput onChange={(e)=>{setOtp(e.target.value)}} value={otp} placeholder="6 Digit OTP" fullWidth />
                    <Typography color="red" fontSize="12px" align='left'> Check Email Spam For 6-Digit OTP If Not Found in Inbox </Typography>
                </Box>
                <Box textAlign="center" mt="10px">
                    <Button onClick={verifyOtp} sx={{ bgColor: isVerifyLoading?"#ef5350":"#745be7" }}  variant='contained'>{isVerifyLoading?'Please Wait':'Verify'}</Button>
                </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
}


}

export default Signup;
