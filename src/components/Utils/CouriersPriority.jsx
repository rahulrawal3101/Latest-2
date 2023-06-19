import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import pic6 from '../assets/pic6.svg';
import pic5 from '../assets/pic5.svg';
import pic7 from '../assets/pic7.svg';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessRounded';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const CouriersPriority = () => {
  const [change, setChange] = useState('Cheapest Courier');
  const changeHandler = (ele) => {
    console.log(ele);
    setChange(ele);
  }
  return (
    <>
      <Grid container sx={{ backgroundColor: 'rgb(237, 240, 249)', padding: '15px' }}>

        <Grid item container xs={12} sx={{ backgroundColor: 'white', padding: '15px', borderRadius: '15px', justifyContent: 'space-around', alignItems: 'center' }}>

          <Grid item lg={2.7} md={5} sm={12} xs={12} sx={{ border: change == 'Cheapest Courier' ? '2px solid crimson' : '2px solid lightgrey', borderRadius: '15px', padding: '20px 0px 20px 0px ', mb: { lg: '0px', md: '15px', sm: '15px', xs: '15px' } }} onClick={() => { changeHandler('Cheapest Courier') }}>
            <FormControl sx={{ display: 'flex', justifyContent: { lg: 'center', md: 'center', sm: 'left', xs: 'left' }, ml: { lg: '0px', md: '0px', sm: '10px', xs: '10px' }, alignItems: 'center', flexDirection: 'row', color: 'rgb(255, 117, 108)' }}>

              <FormControlLabel value="Cheapest courier" control={<Radio />} />
              <FormLabel sx={{ color: '#b71c1c', display: 'flex', alignItems: 'center' }} ><LocalShippingRoundedIcon fontSize='large' sx={{ mr: '4px' }} /> Cheapest courier</FormLabel>
            </FormControl>
          </Grid>

          <Grid item lg={2.7} md={5} sm={12} xs={12} sx={{ border: change === 'Fastest courier' ? '2px solid crimson' : '2px solid lightgrey', borderRadius: '15px', padding: '20px 0px 20px 0px ', mb: { lg: '0px', md: '15px', sm: '15px', xs: '15px' } }} onClick={() => { changeHandler('Fastest courier') }}>
            <FormControl sx={{ display: 'flex', justifyContent: { lg: 'center', md: 'center', sm: 'left', xs: 'left' }, ml: { lg: '0px', md: '0px', sm: '10px', xs: '10px' }, alignItems: 'center', flexDirection: 'row', color: 'rgb(255, 117, 108)' }}>

              <FormControlLabel value="Fastest courier" control={<Radio />} />
              <FormLabel sx={{ color: '#b71c1c', display: 'flex', alignItems: 'center' }} ><SettingsBrightnessRoundedIcon fontSize='large' sx={{ mr: '4px' }} /> Fastest courier</FormLabel>
            </FormControl>
          </Grid>

          <Grid item lg={2.7} md={5} sm={12} xs={12} sx={{ border: change === 'Custom rule' ? '2px solid crimson' : '2px solid lightgrey', padding: '20px', borderRadius: '15px', padding: '20px 0px 20px 0px ', mb: { lg: '0px', md: '15px', sm: '15px', xs: '15px' } }} onClick={() => { changeHandler('Custom rule') }}>
            <FormControl sx={{ display: 'flex', justifyContent: { lg: 'center', md: 'center', sm: 'left', xs: 'left' }, ml: { lg: '0px', md: '0px', sm: '10px', xs: '10px' }, alignItems: 'center', flexDirection: 'row', color: 'rgb(255, 117, 108)' }}>

              <FormControlLabel value="Custom rule" control={<Radio />} />
              <FormLabel sx={{ color: '#b71c1c', display: 'flex', alignItems: 'center' }} ><SettingsBrightnessRoundedIcon fontSize='large' sx={{ mr: '4px' }} /> Custom rule</FormLabel>
            </FormControl>
          </Grid>

          <Grid item lg={2.7} md={5} sm={12} xs={12} sx={{ border: change === 'Pickrr Select' ? '2px solid crimson' : '2px solid lightgrey', borderRadius: '15px', padding: '20px 0px 20px 0px ', mb: { lg: '0px', md: '15px', sm: '15px', xs: '15px' } }} onClick={() => { changeHandler('Pickrr Select') }}>
            <FormControl sx={{ display: 'flex', justifyContent: { lg: 'center', md: 'center', sm: 'left', xs: 'left' }, ml: { lg: '0px', md: '0px', sm: '10px', xs: '10px' }, alignItems: 'center', flexDirection: 'row', color: 'rgb(255, 117, 108)' }}>

              <FormControlLabel value="Pickrr Select" control={<Radio />} />
              <FormLabel sx={{ color: '#b71c1c', display: 'flex', alignItems: 'center' }} ><LocalShippingRoundedIcon fontSize='large' sx={{ mr: '4px' }} />Pickrr Select</FormLabel>
            </FormControl>
          </Grid>

          <Grid item xs={12} sx={{ padding: '20px' }}>
            <Typography sx={{ color: 'rgb(38, 63, 151)' }}>Select the cheapest courier for your selected service type for all orders</Typography>
            <Button variant='contained' sx={{ mt: '10px' }}><DoneAllRoundedIcon />Select</Button>
          </Grid>

        </Grid>








        {
          change === 'Cheapest Courier' ?
            <Grid item container xs={12} sx={{ backgroundColor: 'white', marginTop: '10px', borderRadius: '15px' }}>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <img src={pic5} alt='logo' />
                <Typography sx={{ textAlign: 'center', color: 'rgb(38, 63, 151)' }}>Cheapest courier selected. We will automatically select the <br></br>cheapest courier to service the order.</Typography>
              </Grid>
            </Grid> : ''
        }

        {
          change === 'Fastest courier' ?
            <Grid item container xs={12} sx={{ backgroundColor: 'white', marginTop: '10px', borderRadius: '15px', }}>
              <Grid item xs={12} sx={{ textAlign: 'center', m: '35px 0px 35px 0px' }}>
                <img src={pic6} alt='logo' />
                <Typography sx={{ textAlign: 'center', color: 'rgb(38, 63, 151)', padding: '15px' }}>Fastest courier selected. For your pin codes, we will automatically<br></br> select the courier with the fastest delivery.</Typography>
              </Grid>

            </Grid> : ''

        }

        {
          change == 'Custom rule' ?
            <Grid item container xs={12} sx={{ backgroundColor: 'white', marginTop: '10px', borderRadius: '15px', }}>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgb(249, 250, 254)', alignItems: 'center', padding: '20px' }}>
                <Typography sx={{ color: 'crimson', fontSize: '20px', fontWeight: '600' }}>Custom Courier Priority</Typography>
                <Button variant='contained'>CREATE NEW RULE</Button>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center', m: '35px 0px 35px 0px' }}>
                <img src={pic7} alt='logo' />
                <Typography sx={{ textAlign: 'center', color: 'rgb(38, 63, 151)', padding: '15px' }}>Click on Create New rule to Create your own rules for courier selection.</Typography>
              </Grid>

            </Grid> : ''
        }


        {
          change == 'Pickrr Select' ?
            <Grid item container xs={12} sx={{ backgroundColor: 'white', mt: '20px', borderRadius: '20px' }}>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgb(249, 250, 254)', alignItems: 'center', padding: '20px', borderRadius: '20px 20px 0px 0px' }}>
                <Typography sx={{ color: 'crimson', fontSize: '20px', fontWeight: '600' }}>Pickkr Select</Typography>
                <Button variant='contained' sx={{ borderRadius: '20px' }}>CREATE NEW RULE</Button>
              </Grid>
              <Grid item xs={12} sx={{ padding: '17px' }}>
                <TableContainer>
                  <Table stickyHeader={true} responsive='true'  >
                    <TableHead >
                      <TableRow>
                        <TableCell sx={{ textAlign: 'center', color: 'rgb(125, 140, 193)', fontSize: '16px', fontWeight: '600' }}>Rule Name</TableCell>
                        <TableCell sx={{ textAlign: 'center', color: 'rgb(125, 140, 193)', fontSize: '16px', fontWeight: '600' }}>Added Criteria</TableCell>
                        <TableCell sx={{ textAlign: 'center', color: 'rgb(125, 140, 193)', fontSize: '16px', fontWeight: '600' }}>Couriers</TableCell>
                        <TableCell sx={{ textAlign: 'center', color: 'rgb(125, 140, 193)', fontSize: '16px', fontWeight: '600' }}>Active</TableCell>
                        <TableCell sx={{ textAlign: 'center', color: 'rgb(125, 140, 193)', fontSize: '16px', fontWeight: '600' }}>Actiions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody  >

                      <TableRow>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sssss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>ssss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sss</TableCell>

                      </TableRow>
                      <TableRow>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sssss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>ssss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sss</TableCell>

                      </TableRow>
                      <TableRow>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sssss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>ssss</TableCell>
                        <TableCell align="center" sx={{ color: '#ef9a9a' }}>sss</TableCell>

                      </TableRow>


                    </TableBody>

                  </Table>
                </TableContainer>
              </Grid>
            </Grid> : ''
        }


      </Grid>
    </>
  )
}

export default CouriersPriority