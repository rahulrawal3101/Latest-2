import { Box, Button, Divider, Grid, InputBase, Typography } from '@mui/material';
import pickrrlogo from '../assets/pickrrlogo.png';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import api from '../Utils/FaqGeneralEnquiryApi';




const FaqGeneralEnquiry = () => {
  return (
    <>
      <Grid container sx={{ backgroundColor: 'rgb(237, 240, 249)', paddingBottom: '20px' }}>
        <Grid item container xs={12} sx={{ border: '1px solid blue', backgroundColor: 'white', justifyContent: 'space-between', borderBottom: '1px solid lightgray' }}>
          <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '7px 0px 14px 0px' }} >
            <Box>
              <img src={pickrrlogo} alt='pickrrlogo' />
            </Box>
            <Typography sx={{ color: 'gray', fontSize: '20px', ml: '10px' }}>Pickrr Technologies Pvt. Ltd.</Typography>
          </Grid>
          <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', padding: '7px 0px 14px 0px' }} >
            <Typography sx={{ color: 'gray', fontSize: '16px', textAlign: 'right', ml: '6rem' }}>Welcome</Typography>
            <Box sx={{ display: 'flex' }}>
              <Button variant='contained' color='success' sx={{ mr: '10px' }}>LOGIN</Button>
              <Button variant='contained' >SIGN UP</Button>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ backgroundColor: 'white', display: 'flex', justifyContent: 'left', alignItems: 'center', boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.75);' }}>
          <Typography sx={{ borderTop: '3px solid green', ml: '10%', mr: '40px', padding: '5px 16px', fontWeight: '600', fontSize: '15px' }}>Home</Typography>
          <Typography sx={{ borderTop: '3px solid green', padding: '5px 16px', fontWeight: '600', fontSize: '15px' }}>Solution</Typography>

        </Grid>

        <Grid item container xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '1px' }} spacing={2} >
          <Grid item xs={9.5} sx={{ border: '1px solid red' }}>
            <Typography sx={{ fontSize: '25px', color: '#183247' }}>How can we help you today?</Typography>
          </Grid>
          <Grid item xs={9.5} >
            <Box sx={{ borderRadius: '4px', backgroundColor: 'white', border: '1px solid lightgrey', width: '60%', display: 'flex', justifyContent: 'space-between', alignContent: 'center', padding: '4px' }}>
              <InputBase placeholder='Enter your search term here' />
              <SearchIcon sx={{ color: 'lightgrey', mt: '4px' }} />
            </Box>
          </Grid>

          <Grid item xs={9.5} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', borderBottom: '1px solid lightgrey', padding: '20px' }}>
            <Box sx={{ display: 'flex' }}>
              <AddBoxIcon sx={{ color: 'grey' }} />
              <Typography sx={{ ml: '10px', color: 'grey' }}>New Support Ticket</Typography>
            </Box>
            <Box sx={{ display: 'flex', ml: '20px' }}>
              <MonitorHeartIcon sx={{ color: 'grey' }} />
              <Typography sx={{ ml: '10px', color: 'grey' }}>Check Ticket Status</Typography>
            </Box>
          </Grid>

        </Grid>

        {/* api work */}

        <Grid container sx={{ bgcolor: 'rgb(237, 240, 249)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '25px' }}>
          <Grid item xs={9.5} sx={{ backgroundColor: 'white', borderRadius: '15px 15px 0px 0px', padding: '20px 20px 0px 20px' }}>
            <Typography sx={{ fontSize: '23px', fontWeight: '600' }}>{api.mainTitle}</Typography>

          </Grid>

          {
            api.contents.map((ele) => {
              return (
                <Grid item xs={9.5} sx={{ bgcolor: 'white', padding: '20px' }}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Box><Typography sx={{ fontSize: '20px', color: 'grey' }}>{ele.title}</Typography></Box>
                    </Grid>
                    <Divider sx={{ border: '0.5px solid green', width: '100%', mt: '10px' }}></Divider>
                    <Grid container>
                      {
                        ele.elements.map((ele1) => {
                          return (
                            <Grid item xs={6}>
                              <Typography sx={{ fontSize: '18px', fontWeight: '600', mt: '15px' }}>{ele1.heading}</Typography>
                              <Grid container>

                                {
                                  ele1.question.map((ele2) => {
                                    return (

                                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', mt: '5px', fontSize: '15px' }}><MenuBookIcon sx={{ color: 'grey', mr: '10px' }} />{ele2.q}</Grid>
                                    )

                                  })
                                }

                              </Grid>

                            </Grid>
                          )

                        })
                      }

                    </Grid>
                  </Grid>

                </Grid>

              )
            })
          }


        </Grid>

      </Grid>

    </>
  )
}

export default FaqGeneralEnquiry;










// {
//         api.map((ele)=>{console.log(ele.query); return(
//           <>
//             {
//               ele.query.map((elenew)=>{return(
//                 <>
//                 <Typography>
//               {elenew.q}
//             </Typography>
//             <br />
//             <Typography>
//               {elenew.a}
//             </Typography>
//             <Divider/>
//                 </>
//               )})
//             }
//           </>
//         )})
//        }