import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';

const RechargeTwo = () => {
  return (
    <Grid item container sx={{ backgroundColor: 'rgb(237, 240, 249)', mt: '40px', padding: '0px 0px 0px 0px' }}>
      <Grid item xs={12}  >
        <TableContainer component={Paper} sx={{ border: '1px solid lightgrey' }}>
          <Table sx={{ width: '100%' }}>
            <TableHead>
              <TableRow>
                <TableCell align='center' sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>TRANSACTION AMOUNT (₹)</TableCell>
                <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>	TRANSACTION TYPE</TableCell>
                <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>DATE</TableCell>
                <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>REMARKS</TableCell>
                <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>TRANSACTION ID</TableCell>
                <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>TRANSACTION STATUS</TableCell>

              </TableRow>

            </TableHead>
            <TableBody >
              <TableRow>
                <TableCell align="center">sss</TableCell>
                <TableCell align="center">sss</TableCell>
                <TableCell align="center">sssss</TableCell>
                <TableCell align="center">ssss</TableCell>
                <TableCell align="center">sss</TableCell>
                <TableCell align="center">sss</TableCell>


              </TableRow>
              <TableRow>
                <TableCell align="center">sss</TableCell>
                <TableCell align="center">sss</TableCell>
                <TableCell align="center">sssss</TableCell>
                <TableCell align="center">ssss</TableCell>
                <TableCell align="center">sss</TableCell>
                <TableCell align="center">sss</TableCell>



              </TableRow>
              <TableRow>
                <TableCell align="center">sss</TableCell>
                <TableCell align="center">sss</TableCell>
                <TableCell align="center">sssss</TableCell>
                <TableCell align="center">ssss</TableCell>
                <TableCell align="center">sss</TableCell>
                <TableCell align="center">sss</TableCell>

              </TableRow>

            </TableBody>

          </Table>


        </TableContainer>

      </Grid>

    </Grid>
  )
}

export default RechargeTwo;

















