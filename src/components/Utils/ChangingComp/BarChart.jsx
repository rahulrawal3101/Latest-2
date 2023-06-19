import { Box,  Paper} from '@mui/material';
import { useState } from 'react';
import {Bar} from 'react-chartjs-2';
import {UserData} from './BarData';
import { Chart } from 'chart.js/auto';

const BarChart = () => {
  const [data, _]=useState({
    labels:UserData.map((item)=>item.year),
    datasets:[{
      label:"All Data Sets",
      data:UserData.map((item)=>item.userGain),
      backgroundColor:["red","green","yellow","blue",],
      borderColor:["black"],
      borderWidth:2
    },
  ],
  })

  return (
      <Paper>
      <Box height="100%" width="100%" border="1px solid yellow"> 
          <Bar data={data}/>
      </Box>
      </Paper>
  );
}

export default BarChart;
