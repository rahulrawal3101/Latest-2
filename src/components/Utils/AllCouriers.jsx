import React from 'react'
import { Box, Button, Grid, InputBase, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import './Couriers.css';
import couriersapi from '../Utils/CouriersApi'

const AllCouriers = () => {
  return (
    <>
      <Grid item container xs={12} sx={{ padding: '15px', }}>
        <Grid item xs={12} sx={{ backgroundColor: 'rgb(249, 250, 254)', borderRadius: '15px 15px 0px 0px', }}>
          <Typography sx={{ fontSize: { lg: '32px', md: '28px', sm: '20px', xs: '18px' }, color: '#0d47a1', m: '25px', fontWeight: { lg: '600', md: '600', sm: '700', xs: '800' } }}>All Couriers</Typography>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white' }}>
          <Box sx={{ width: '50%', ml: '20px', mt: '7px' }}>
            <Typography sx={{ fontSize: { lg: '50px', md: '40px', sm: '28px', xs: '22px' }, color: '#0d47a1', fontWeight: { lg: '600', md: '600', sm: '700', xs: '800' } }}>24996</Typography>
            <Typography sx={{ color: '#0d47a1', fontSize: { lg: '17px', md: '15px', sm: '13px', xs: '12.5px' } }}>Serviceable Pin codes</Typography>
          </Box>

          <Box sx={{ width: '50%', mt: '7px', mr: '7px' }}>
            <Typography sx={{ fontSize: { lg: '50px', md: '40px', sm: '28px', xs: '22px' }, color: '#0d47a1', fontWeight: { lg: '600', md: '600', sm: '700', xs: '800' } }}>27842</Typography>
            <Typography sx={{ color: '#0d47a1', fontSize: { lg: '17px', md: '15px', sm: '13px', xs: '12.5px' } }}>Pickup Enabled Pin codes</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ padding: '15px', backgroundColor: 'white' }}>
          <Button variant='contained' sx={{ m: '7px 7px 7px 0px' }}>All Courier (43)</Button>
          <Button variant='contained' sx={{ m: '7px 7px 7px 0px' }}>Active (19)</Button>
          <Button variant='contained' sx={{ m: '7px 7px 7px 0px' }}>Inactive (24)</Button>
          <Button variant='contained' sx={{ m: '7px 7px 7px 0px' }}>Express (34)</Button>
          <Button variant='contained' sx={{ m: '7px 7px 7px 0px' }}>Surface (9)</Button>
        </Grid>

        <Grid item xs={12} sx={{ backgroundColor: 'white', padding: '15px' }}>
          <Box sx={{ border: '1px solid lightgrey', width: { lg: '17%', md: '25%', sm: '40%', xs: '96%' }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px', borderRadius: '10px' }}>
            <SearchIcon sx={{ color: '#0d47a1' }} />
            <InputBase placeholder='Search courier' />
          </Box>
        </Grid>

        <Grid item conatiner xs={12} sx={{ backgroundColor: 'white', padding: '15px' }}>



          {
            couriersapi.map((ele) => {
              return (
                <Grid item container xs={12} sx={{ border: '1px solid lightgrey', borderRadius: '13px', padding: '25px', marginBottom: '15px' }}>
                  <Grid item lg={3} md={3} sm={12} xs={12}  >
                    <Typography sx={{ color: '#0d47a1', fontSize: '18px', fontWeight: { lg: '600', md: '600', sm: '700', xs: '800' } }}>Courier Name</Typography>
                    <Typography sx={{ color: 'rgb(126, 143, 204)', mt: '13px', fontSize: '18px' }}>{ele.name}</Typography>
                  </Grid>

                  <Grid item lg={2.5} md={2.5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}  >
                    <Typography sx={{ color: '#0d47a1', fontSize: '18px', fontWeight: { lg: '600', md: '600', sm: '700', xs: '800' } }}>Serviceable Pin Codes</Typography>
                    <Box sx={{ display: 'flex', mt: '13px', alignItems: 'center' }}>
                      <Typography sx={{ color: 'rgb(126, 143, 204)', fontSize: '18px' }}> {ele.number}</Typography>
                      <Button sx={{ ml: '30px' }}>Download <DownloadIcon /> </Button>
                    </Box>
                  </Grid>

                  <Grid item lg={2.5} md={2.5} sm={12} xs={12} sx={{ textAlign: { lg: 'center', md: 'center', sm: 'left', xs: 'left' }, mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                    <Typography sx={{ color: '#0d47a1', fontSize: '18px', fontWeight: { lg: '600', md: '600', sm: '700', xs: '800' } }}>Rate Card</Typography>
                    <Typography color='error' sx={{ mt: '13px' }}>View Rate Card</Typography>
                  </Grid>

                  <Grid item lg={4} md={4} sm={12} xs={12} sx={{ textAlign: { lg: 'center', md: 'center', sm: 'left', xs: 'left' }, mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                    <Typography sx={{ color: '#0d47a1', fontSize: '18px', fontWeight: { lg: '600', md: '600', sm: '700', xs: '800' } }}>status</Typography>
                    <Box sx={{ mt: '13px' }}>
                      <label class="toggle">
                        <input type="checkbox" />
                        <span class="slider"></span>
                        <span class="labels" data-on="Active" data-off="Inactive"></span>
                      </label>
                    </Box>
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

export default AllCouriers