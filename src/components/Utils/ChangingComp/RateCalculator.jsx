import { Box, Button, Divider, Grid, TextField, Typography, TableFooter } from '@mui/material'
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import addlogo from '../../assets/addlogo.png';
import truck from '../../assets/truck.png';
import rupee from '../../assets/rupee.svg';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import car from '../../assets/car.svg';
import icon from '../../assets/icon.svg';
import toolsapi from './ToolsApi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import './Tools.css';

import InfoIcon from '@mui/icons-material/Info';

const RateCalculator = () => {
  const [age, setAge] = useState('');
  const [aged, setAged] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    setAged(event.target.value);
  };
  return (
    <>
      <Grid item container xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mt: '20px', }}>

        <Grid item container lg={7} md={7} sm={12} xs={12} sx={{ padding: '15px', backgroundColor: 'white', borderRadius: '15px' }}>

          {/* first */}
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}><sapn style={{ color: 'red', fontSize: '18px' }}>*</sapn> <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Package/Shipment Type</Typography></Box>
            <FormControl sx={{ mt: '7px', width: { lg: '90%', md: '100%', sm: '100%', xs: '100%' } }} size="small" >

              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                // label="Forward"

                onChange={handleChange}
              >
                <MenuItem value="Forward">
                  <em>Forward</em>
                </MenuItem>
                {/* <MenuItem value={10}>Ten</MenuItem> */}
                <MenuItem value={'Reverse'}>Reverse</MenuItem>
                <MenuItem value={'Reverse with Quality Check'}>Reverse with Quality Check</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}><sapn style={{ color: 'red', fontSize: '18px' }}>*</sapn> <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Pickup Pincode</Typography></Box>
            <TextField placeholder='Enter your pickup pincode' size='small' sx={{ mt: '7px', width: { lg: '90%', md: '100%', sm: '100%', xs: '100%' } }} />
          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}><sapn style={{ color: 'red', fontSize: '18px' }}>*</sapn> <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Destination Pincode</Typography></Box>
            <TextField placeholder='Enter your destination pincode' size='small' sx={{ mt: '7px', width: { lg: '90%', md: '100%', sm: '100%', xs: '100%' } }} />
          </Grid>

          {/* second */}

          <Grid item lg={4} md={6} sm={5.5} xs={4} sx={{ mt: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}><sapn style={{ color: 'red', fontSize: '18px' }}>*</sapn> <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Dimensions(cm)</Typography></Box>
            <Box sx={{ display: 'flex', width: { lg: '220px', md: '250px', sm: '230px', xs: '140px' } }}>
              <TextField type='number' size='small' sx={{ mt: '7px' }} />
              <TextField type='number' size='small' sx={{ mt: '7px' }} />
              <TextField type='number' size='small' sx={{ mt: '7px' }} />

            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={5.8} xs={6} sx={{ mt: '20px', paddingLeft: '5px', ml: { lg: '0px', md: '0%', sm: '5%', xs: '16%' } }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}><sapn style={{ color: 'red', fontSize: '18px' }}>*</sapn> <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Weight(kg)</Typography></Box>
            <TextField type='number' size='small' sx={{ mt: '7px', width: { lg: '90%', md: '100%', sm: '100%', xs: '100%' } }} />
          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12} sx={{ mt: '20px' }} >
            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}><sapn style={{ color: 'red', fontSize: '18px' }}>*</sapn> <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Payment Mode</Typography></Box>
            <FormControl sx={{ mt: '7px', width: { lg: '90%', md: '100%', sm: '100%', xs: '100%' } }} size="small" >
              {/* <InputLabel id="demo-select-small-label">Forward</InputLabel> */}
              <Select

                value={aged}
                // label="Forward"

                onChange={handleChange}
              >
                <MenuItem value="Customer service payment..">
                  <em>Customer service payment</em>
                </MenuItem>
                {/* <MenuItem value={10}>Ten</MenuItem> */}
                <MenuItem value={'COD'}>COD</MenuItem>
                <MenuItem value={'Prepaid'}>Prepaid</MenuItem>
              </Select>
            </FormControl>
          </Grid>


          <Grid item lg={4} md={12} sm={12} xs={12} sx={{ mt: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}><sapn style={{ color: 'red', fontSize: '18px' }}>*</sapn> <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Delivery Mode</Typography></Box>
            <FormControl sx={{ mt: '7px', width: { lg: '90%', md: '100%', sm: '100%', xs: '100%' } }} size="small" >
              {/* <InputLabel id="demo-select-small-label">Forward</InputLabel> */}
              <Select

                value={aged}
                // label="Forward"

                onChange={handleChange}
              >
                <MenuItem value="Express">
                  <em>Express</em>
                </MenuItem>
                {/* <MenuItem value={10}>Ten</MenuItem> */}
                <MenuItem value={'Express'}>Express</MenuItem>
                <MenuItem value={'Heavy Surface'}>Heavy Surface</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12} sx={{ mt: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}><sapn style={{ color: 'red', fontSize: '18px' }}>*</sapn> <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Product Name</Typography></Box>
            <TextField placeholder='Enter your Product Name' size='small' sx={{ mt: '7px', width: { lg: '90%', md: '100%', sm: '100%', xs: '100%' } }} />
          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12} sx={{ mt: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}><sapn style={{ color: 'red', fontSize: '18px' }}>*</sapn> <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Invoice Value</Typography></Box>
            <TextField placeholder='Enter your Invoice Value' size='small' sx={{ mt: '7px', width: { lg: '90%', md: '100%', sm: '100%', xs: '100%' } }} />
          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12} sx={{ mt: '20px' }}>
            <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Dangerous Goods</Typography>
            <FormControl>

              <RadioGroup sx={{ display: 'flex', flexDirection: 'row', color: '#0d47a1' }} >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />

              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12} sx={{ mt: '20px' }}>
            <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Dangerous Goods</Typography>
            <FormControl>

              <RadioGroup sx={{ display: 'flex', flexDirection: 'row', color: '#0d47a1' }} >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />

              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12} sx={{ mt: '20px' }}>
            <Typography sx={{ color: '#0d47a1', fontWeight: '600', fontSize: '15px' }}>Dangerous Goods</Typography>
            <FormControl>

              <RadioGroup sx={{ display: 'flex', flexDirection: 'row', color: '#0d47a1' }} >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />

              </RadioGroup>
            </FormControl>
          </Grid>

          <Divider sx={{ border: '1px solid lightgrey', width: '100%', mt: '15px' }} />

          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: { lg: 'right', md: 'right', md: 'space-between', xs: 'space-between' }, alignItems: 'flex-end', padding: '51px 10px', }}>
            <Button variant='outlined' sx={{ mr: { lg: '20px', md: '20px', sm: '0px', xs: '0px' } }} >Reset</Button>
            <Button variant='contained' sx={{ mr: { lg: '33px', md: '33px', sm: '0px', xs: '0px' } }} >Calculate</Button>
          </Grid>

        </Grid>

        <Grid item container lg={4.8} md={4.8} sm={12} xs={12} sx={{ backgroundColor: 'white', padding: '10px', borderRadius: '15px', mt: { lg: '0px', md: '5px', sm: '5px', xs: '5px' } }}>
          <Grid item xs={12}>
            <Typography sx={{ color: '#0d47a1', fontSize: '20px', fontWeight: '600' }}>Shipment rate of your order</Typography>
            <Typography sx={{ color: '#0d47a1', fontSize: '17px', }}>Result is based on your Cheapest Rule</Typography>
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', flexDirection: { lg: 'row', md: 'column', sm: 'column', xs: 'column' }, justifyContent: 'space-between', alignContent: 'center', mt: '15px' }}>
            <Box sx={{ width: '50%' }}>
              <Typography sx={{ color: '#0d47a1', fontSize: '17px', fontWeight: '600' }}>Delivery Charges - Zone A</Typography>
              <Typography sx={{ color: 'rgb(38, 63, 151)', fontWeight: '700', fontSize: '23px' }}>₹ 30.00</Typography>
              <Typography sx={{ color: 'rgb(38, 63, 151)', fontWeight: '600' }}>Return Charges - ₹ 60</Typography>
              <Typography sx={{ color: 'rgb(38, 63, 151)', mt: '20px', fontSize: '18px' }}>Courier Partner</Typography>
              <Box sx={{ display: 'flex' }}>
                <img src={rupee} alt='rupee' />
                <Typography sx={{ color: 'rgb(38, 63, 151)', fontWeight: '600' }}>Ekart</Typography>
              </Box>
            </Box >
            <Box sx={{ width: '300px', height: '145px', mb: '15px' }}>
              <img src={truck} alt='discount' width='85%' height='100%' />
            </Box>
          </Grid>


          <Grid item container lg={12} md={12} sm={12} xs={12} >
            <Typography sx={{ color: 'rgb(38, 63, 151)' }}>View other courier’s rate details in below table</Typography>

            <Grid item xs={12} sx={{ borderRadius: '15px', padding: '10px', display: 'flex', justifyContent: 'space-between', flexDirection: { lg: 'row', md: 'column', sm: 'column', xs: 'column' }, background: 'rgb(60,109,203)', background: 'linear-gradient(90deg, rgba(60,109,203,0.9920343137254902) 38%, rgba(164,164,255,1) 68%, rgba(0,52,241,1) 96%, rgba(95,129,255,1) 100%, rgba(238,233,233,1) 100%)' }}>

              <Box >
                <Typography sx={{ color: 'white', fontSize: '22px', fontWeight: '600' }}>Latest offers</Typography>
                <Typography variant='body2' sx={{ color: 'white', fontWeight: '400' }}>Pay ₹300/- & get ₹600/- in your</Typography>
                <Typography variant='body2' sx={{ color: 'white', mt: '5px', fontWeight: '400' }}>PICKRR wallet. 100% cashback<br></br> offer.</Typography>
                <Typography sx={{ color: 'white', fontWeight: '600', mt: '20px' }}>Use code:'PICKRR300'</Typography>
                <Button variant='contained' sx={{ padding: '8px 55px 8px 55px', borderRadius: '10px', fontSize: '11px' }}>RECHARGE NOW</Button>
                <Typography sx={{ color: 'white', fontSize: '15px', fontWeight: '600', mt: '20px' }}>*Terms and condition</Typography>
              </Box>
              <Box sx={{ width: { lg: '220px', md: '380px', sm: '380px', xs: '300px' }, height: '180px', mt: '10px', mr: '20px', ml: '10px' }}>
                <img src={addlogo} alt='logo' width='100%' height='100%' />
              </Box>

            </Grid>
          </Grid>

        </Grid>

        <Grid item conatiner xs={12} sx={{ backgroundColor: 'white', mt: '20px', padding: '15px' }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#0d47a1' }}>Other Courier Options</Typography>
            <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>

              <FlashOnIcon sx={{ color: '#0d47a1', fontSize: '18px', mt: '3px' }} />
              <Typography sx={{ color: '#0d47a1', mr: '20px' }}>Fastest courier</Typography>
              <img src={rupee} alt='rupee' />
              <Typography sx={{ color: '#0d47a1' }}>Cheapest courier</Typography>
            </Box>

          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'right', }}>
            <Typography variant='body1' sx={{ color: 'rgb(128, 128, 128)', mr: '28%' }}>Charge Break up</Typography>
          </Grid>


          <Grid item xs={12} >
            <TableContainer >
              <Table stickyHeader={true} responsive='true' >
                <TableHead>
                  <TableRow >

                    <TableCell sx={{ textAlign: 'center', color: 'rgb(128, 128, 128)' }}><b>Courier Name</b></TableCell>
                    <TableCell sx={{ textAlign: 'center', color: 'rgb(128, 128, 128)' }}><b>Charged Weight</b></TableCell>
                    <TableCell sx={{ textAlign: 'center', color: 'rgb(128, 128, 128)' }}><b>Freight charge</b></TableCell>
                    <TableCell sx={{ textAlign: 'center', color: 'rgb(128, 128, 128)' }}><b>Charge</b></TableCell>
                    <TableCell sx={{ textAlign: 'center', color: 'rgb(128, 128, 128)' }}><b>Total Charge</b></TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    toolsapi.map((ele) => {
                      return (
                        <TableRow key={'ghjkl'}>
                          <TableCell sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              {ele.logo == null ? '' : <img src={ele.logo} alt='logo' />}
                              <Typography sx={{ color: '#0d47a1', ml: '7px' }}>{ele.Name == 'Ekart Air' ? <FlashOnIcon sx={{ mt: '5px', fontSize: '15px' }} /> : ''}{ele.Name}</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', mt: '10px', justifyContent: 'center', alignItems: 'flex-start' }}>
                              <img src={ele.logo1} />
                              <Typography sx={{ color: '#0d47a1', ml: '7px' }}>{ele.date}</Typography>
                            </Box>

                            {/* {ele.Name} */}
                          </TableCell>

                          <TableCell sx={{ textAlign: 'center', color: '#0d47a1' }}>{ele.weight}</TableCell>
                          <TableCell sx={{ textAlign: 'center', color: '#0d47a1', fontWeight: '600', fontSize: '18px' }}>{ele.amt}</TableCell>
                          <TableCell sx={{ textAlign: 'center', color: '#0d47a1', fontWeight: '600', fontSize: '18px' }}>{ele.cod}</TableCell>
                          <TableCell sx={{ textAlign: 'center', color: '#0d47a1', fontWeight: '600', fontSize: '18px' }}>{ele.amt}</TableCell>


                        </TableRow>
                      )
                    })
                  }





                </TableBody>
                <TableFooter>
                  <TableRow>

                  </TableRow>
                </TableFooter>
              </Table>

            </TableContainer>

          </Grid>
          <Grid item xs={12} sx={{ padding: '10px 0px 15px 10px', display: 'flex' }}>
            <InfoIcon sx={{ color: '#0d47a1' }} />
            <Typography sx={{ color: '#0d47a1', ml: '5px' }}>All prices are exclusive of GST</Typography>
          </Grid>


        </Grid>


      </Grid>
    </>
  )
}

export default RateCalculator