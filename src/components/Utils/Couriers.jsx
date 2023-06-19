import { Grid, Typography } from '@mui/material'
import React from 'react';
import './Couriers.css';
import AllCouriers from './AllCouriers';
import CouriersPriority from './CouriersPriority';
import { useState } from 'react'
import RateCalculator from './ChangingComp/RateCalculator';




const Couriers = () => {
  const [change, setChange] = useState('All Couriers')

  const changeHandler = (ele) => {
    console.log(ele);
    setChange(ele)
  }
  return (

    <>
      <Grid container sx={{ backgroundColor: 'rgb(237, 240, 249)', padding: '10px' }}>
        <Grid item xs={12} sx={{ color: '#0d47a1', display: 'flex', padding: '15px', }}>
          <Typography sx={{ fontSize: { lg: '18px', md: '14px', sm: '12px', xs: '11px' }, borderBottom: change == 'All Couriers' ? '2px solid crimson' : '', fontWeight: { lg: '600', md: '600', sm: '600', xs: '800' } }} onClick={() => { changeHandler('All Couriers') }}> ALL COURIERS </Typography>
          <Typography sx={{ fontSize: { lg: '18px', md: '14px', sm: '12px', xs: '11px' }, borderBottom: change == 'Courier priority' ? '2px solid crimson' : '', fontWeight: { lg: '600', md: '600', sm: '600', xs: '800' }, ml: '20px' }} onClick={() => { changeHandler('Courier priority') }}>COURIER PRIORITY</Typography>
          <Typography sx={{ fontSize: { lg: '18px', md: '14px', sm: '12px', xs: '11px' }, borderBottom: change == 'Rate Calculator' ? '2px solid crimson' : '', fontWeight: { lg: '600', md: '600', sm: '600', xs: '800' }, ml: '20px' }} onClick={() => { changeHandler('Rate Calculator') }}>RATE CALCULATOR</Typography>
        </Grid>

        {
          change == 'All Couriers' ? <AllCouriers /> : ''
        }

        {
          change == 'Courier priority' ? <CouriersPriority /> : ''
        }

        {
          change == 'Rate Calculator' ? <RateCalculator /> : ''
        }

      </Grid>
    </>

  )
}

export default Couriers