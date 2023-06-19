import { Grid, Typography, } from '@mui/material'
import React, { useState } from 'react';
import './Tools.css';
import RateCalculator from './RateCalculator';
import ToolsOne from '../ToolsOne';


const Tools = () => {
  const [change, setChange] = useState('Rate Calculator')

  const changeHandler = (ele) => {
    console.log(ele)
    setChange(ele)
  }



  return (
    <>
      <Grid container sx={{ padding: '10px', backgroundColor: 'rgb(237, 240, 249)' }}>
        <Grid item xs={12} sx={{ display: 'flex', padding: '10px' }}>
          <Typography sx={{ color: '#0d47a1', fontWeight: '800', padding: '5px', fontSize: '15px', borderBottom: change == 'Rate Calculator' ? '2px solid crimson' : '' }} onClick={() => { changeHandler('Rate Calculator') }}>RATE CALCULATOR</Typography>
          <Typography sx={{ color: '#0d47a1', fontWeight: '800', padding: '5px', ml: '20px', fontSize: '15px', borderBottom: change == 'Serviceable pincode' ? '2px solid crimson' : '' }} onClick={() => { changeHandler('Serviceable pincode') }}>SERVICEABLE PINCODE</Typography>
        </Grid>

        {
          change == 'Rate Calculator' ? <RateCalculator /> : ''
        }

        {
          change == 'Serviceable pincode' ? <ToolsOne /> : ''
        }





      </Grid>

    </>
  )
}

export default Tools