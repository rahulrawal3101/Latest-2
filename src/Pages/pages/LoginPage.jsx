import { Typography, Grid, Box, Button } from '@mui/material';
import logo from '../images/logo.png'
import bgimg from '../images/bgimg.jpg'
import OutlinedInput from '@mui/material/OutlinedInput';
import '../pages/LoginPage.css';


const LoginPage = () => {

  return (
    <>
      <Grid container sx={{ backgroundColor: 'rgb(255, 117, 108)' }}>
        <Grid item xs={12} sx={{ padding: '15px', textAlign: 'center' }}>
          <Typography id='upperbox' fontWeight={700} sx={{ color: 'white' }}>Get Guaranteed Rs.100 Cashback on Your First Recharge With Pickrr | Use Code: 'PICKRR100' | *T&C Apply</Typography>
        </Grid>
      </Grid>

      <Grid container sx={{position:'relative'}}>
        <Grid item xs={12} >
          <img src={bgimg} width='100%' height='100%' id='bgimg' />
        </Grid>
        <Grid item id='logo' mt="10px"  xs={12} sx={{position:'absolute',left:'50%',transform: 'translate(-50% )'}}  >
          <img src={logo} />
        </Grid>

        <Grid item xs={12} id="inputGrid" sx={{ position: 'absolute', left: '50%', top: '45%', transform: 'translate(-50%, -50%)', width: '50%' }} >

          <Grid item  >
            <Typography variant='h3' fontWeight={800} color="white" align='center'>Login</Typography>
          </Grid>
          <Box id="inputGridBox" display="flex" justifyContent="center" alignItems="center" flexDirection="column" m='13px auto'>
            <Box id='card' sx={{ bgcolor: "white", width: '100%', borderRadius: "20px", boxShadow: '0px 4px 5px 0px rgba(50,0,125,1)', boxSizing: "border-box" }}>


              <Box id='inputSpan' sx={{ padding: '20px 100px 20px 100px' }}>
                <span style={{ display: "flex" }}>
                  <Typography mt="3px" color="red"><b>*</b></Typography>
                  <Typography color="#2408A4"><b> Email ID</b></Typography>
                </span>
                <OutlinedInput sx={{ width: "100%" }} />
                <span style={{ display: "flex" }}>
                  <Typography mt="3px" color="red"> <b>*</b></Typography>
                  <Typography color="#2408A4"><b> Password</b></Typography>
                </span>
                <OutlinedInput sx={{ width: "100%" }} />
                <Typography align='right' fontSize="15px"><a href='#'>Forgot Password</a></Typography>
                <Button fullWidth variant='contained' sx={{ bgcolor: "rgb(255, 117,108)" }} >Login</Button>
              </Box>
            </Box>
            <Box item display="flex" alignItems="center" justifyContent="center" bgcolor="#d0e1e1" mt="10px" borderRadius="15px" sx={{ width: '100%', padding: '10px 5px 10px 5px', boxSizing: "border-box" }} >
              <Typography color="blue" fontWeight={600} mr='8px' id="SignupText" sx={{ fontSize: '22px' }}>Don,t have an account?</Typography>
              <Button sx={{ bgcolor: "white" }} >sign up</Button>
            </Box>
          </Box>

        </Grid>

      </Grid>



    </>
  )
}

export default LoginPage;







// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
// import FormControl from '@mui/material/FormControl';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import React, { useState } from 'react';
// import bgimg from '../images/bgimg.jpg';
// import logo from '../images/logo.png';
// import '../pages/LoginPage.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { BASE_URL } from '../../Constant';


// const LoginPage = () => {

//   const navigate = useNavigate();
//   const [inputField, setInputField] = useState({
//     email: '',
//     password: ''
//   });
//   console.log(inputField);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleChange = (event) => {
//     let { name, value } = event.target;
//     setInputField({ ...inputField, [name]: value });
//   }

//   const registeHandler = () => {
//     navigate('/register');
//   }
//   const loginHandler = () => {
//     if (inputField.email && inputField.password) {
//       axios.post(BASE_URL+'/verifyuser',{email:inputField.email,password:inputField.password}).then((res) => {
//         console.log(res);
//         if(res.data.message == 'User Verified Successfully'){
//           navigate('/');
//         }
//         else{
//           alert(res.data.message);
//         }
//       }).catch((err) => {
//         console.log(err);
//       })
//     }
//     else{
//       alert('Fill Email or Password Properly');
//     }
//   }
//   return (
//     <>
//       {/* <Box sx={{height:'100vh',width:'100%',border:'3px solid red'}} > */}


//       <Grid container sx={{ backgroundColor: 'rgb(255, 117, 108)' }}>
//         <Grid item xs={12} sx={{ padding: '15px', textAlign: 'center' }}>
//           <Typography variant='body' fontWeight={700} sx={{ color: 'white' }}>Get Guaranteed Rs.100 Cashback on Your First Recharge With Pickrr | Use Code: 'PICKRR100' | *T&C Apply</Typography>
//         </Grid>
//       </Grid>

//       <Box sx={{ position: 'absolute' }}>
//         <Grid container>
//           <Grid item xs={12}>
//             <img src={bgimg} width='100%' height='110%' id='bgimg' alt="bgimage" />
//           </Grid>
//           <Grid item xs={12} sx={{ position: 'absolute', left: '50%', top: '40px', transform: 'translate(-50%, -50%)' }}>
//             <img src={logo} alt={"logo"} />
//           </Grid>

//           <Grid item id='paperBox' sm={6} margin='auto' sx={{ position: 'absolute', left: '25%', top: '28%', width: '65%' }}>
//             <Grid item xs={12} sx={{ textAlign: 'center', padding: '0px 0px 20px 10px' }}>
//               <Typography variant='h3' sx={{ color: 'white' }}>Login</Typography>
//             </Grid>

//             <Paper elevation={5} sx={{ borderRadius: '10px' }} >
//               <Grid conatiner >


//                 <Grid item xs={12} sx={{ m: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '15px' }} >
//                   <span>

//                     <Box sx={{ display: 'flex', alignItems: 'center' }}><span style={{ color: 'red', marginTop: '3px' }}><b>*</b></span> <span style={{ color: '#2408A4', fontSize: '15px' }}><b>Email ID</b></span> </Box>
//                     <TextField onChange={handleChange} value={inputField.email} name="email" type="email" sx={{ width: '300px', height: '50px', borderRadius: '5px', marginTop: '7px' }} />
//                   </span>
//                 </Grid>


//                 <Grid item xs={12} sx={{ m: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '15px' }}>
//                   <span>

//                     <Box sx={{ display: 'flex', alignItems: 'center' }}><span style={{ color: 'red', marginTop: '3px' }}><b>*</b></span> <span style={{ color: '#2408A4', fontSize: '15px' }}><b>Password</b></span> </Box>


//                     <FormControl sx={{ width: '300px', marginTop: '10px' }} variant="contained">
//                       <OutlinedInput
//                         onChange={handleChange} value={inputField.password} name="password"
//                         type={showPassword ? 'text' : 'password'}
//                         endAdornment={
//                           <InputAdornment position="end">
//                             <IconButton
//                               onClick={handleClickShowPassword}
//                               onMouseDown={handleMouseDownPassword}
//                               edge="end"
//                             >
//                               {showPassword ? <Visibility /> : <VisibilityOff />}
//                             </IconButton>
//                           </InputAdornment>
//                         }

//                       />
//                     </FormControl>
//                   </span>
//                 </Grid>
//                 <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '170px', marginTop: '15px' }}>
//                   <Typography variant='body2'><a href='#'>Forgot Password?</a></Typography>
//                   {/* <span style={{color:'blue'}}><a href='#'>Forgot Password?</a></span> */}
//                 </Grid>
//                 <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', m: 1 }}>
//                   <Button onClick={loginHandler} variant='contained' color='error' size='large' sx={{ width: '300px', marginBottom: '35px', marginTop: '20px' }}><b>Login</b></Button>
//                 </Grid>
//               </Grid>
//             </Paper>
//             <Grid item xs={12}>
//               <Paper id='signUp' sx={{ marginTop: '9px', backgroundColor: '#d0e1e1', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 10px' }}>
//                 <Typography variant='body1' mr='5px' sx={{ color: 'blue', position: 'relative' }} fontWeight={600}>Don't have an account? </Typography>
//                 <Button variant='contained' size='small' onClick={registeHandler} >Sign Up</Button>
//               </Paper>
//             </Grid>


//           </Grid>
















//         </Grid>





//       </Box>





//     </>



//   )
// }

// export default LoginPage