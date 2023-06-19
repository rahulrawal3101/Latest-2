import { FormControl, Grid, TextField, Typography, Button, TableContainer, TableHead, TableRow, TableCell, TableBody, Table } from '@mui/material';
import Select from '@mui/material/Select';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import GetAppIcon from '@mui/icons-material/GetApp';
import Paper from '@mui/material/Paper';





const RechargeOne = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Grid item container sx={{ backgroundColor: 'rgb(237, 240, 249)', padding: '10px' }}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontWeight: '600', color: '#0d47a1', fontSize: { lg: '17px', md: '17px', sm: '15px', xs: '10px' } }}>Select and Search</Typography>
          <Typography sx={{ fontWeight: '600', color: '#0d47a1', fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '13px' } }}>Current credit :0.00</Typography>
        </Grid>


        <Grid item container xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid item container lg={6} md={9} sm={12}>
            <FormControl sx={{ color: '#0d47a1', width: { lg: '20%', md: '25%', sm: '24%', xs: '20%' } }} size='small'>
              <Select
                sx={{ borderRadius: '8px 0px 0px 8px ' }}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>Order ID</em>
                </MenuItem>
                <MenuItem value={'Tracking ID'}>Tracking ID</MenuItem>
                <MenuItem value={'Clint Order ID'}>Clint Order ID</MenuItem>
              </Select>
            </FormControl>
            <Grid item >
              <TextField placeholder='Type to serach' size='small' sx={{ backgroundColor: 'white', borderRadius: '0px 0px 0px 0px ', width: { lg: '350px', md: '300px', sm: '250px', xs: '150px' } }} />
              <SearchOutlinedIcon sx={{ backgroundColor: 'white', color: '#1565c0', height: '94%', borderRadius: '0px 8px 8px 0px ', '&:hover': { border: '2px solid crimson' } }} fontSize='large' />
            </Grid>

            <Grid item >




            </Grid>

          </Grid>
          <Grid item sx={{ mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
            <Button variant='contained' sx={{ color: 'white', backgroundColor: '#1565c0', "&hover": { backgroundColor: '#1565c0' } }} size='small'><GetAppIcon />Download</Button>
          </Grid>


        </Grid>

        <Grid item container sx={{ backgroundColor: 'rgb(237, 240, 249)', mt: '40px' }}>
          <Grid item xs={12}  >
            <TableContainer component={Paper} sx={{ border: '1px solid lightgrey' }}>
              <Table sx={{ width: '100%' }}>
                <TableHead>
                  <TableRow>
                    <TableCell align='center' sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>DATE</TableCell>
                    <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>ORDER ID</TableCell>
                    <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>TRACKING ID</TableCell>
                    <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>CLINT ORDER ID</TableCell>
                    <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>CREDIT</TableCell>
                    <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>DEBIT</TableCell>
                    <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>USABLE BALANCE</TableCell>
                    <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>REMARK</TableCell>
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
                    <TableCell align="center">sssss</TableCell>
                    <TableCell align="center">ssss</TableCell>

                  </TableRow>
                  <TableRow>
                    <TableCell align="center">sss</TableCell>
                    <TableCell align="center">sss</TableCell>
                    <TableCell align="center">sssss</TableCell>
                    <TableCell align="center">ssss</TableCell>
                    <TableCell align="center">sss</TableCell>
                    <TableCell align="center">sss</TableCell>
                    <TableCell align="center">sssss</TableCell>
                    <TableCell align="center">ssss</TableCell>


                  </TableRow>
                  <TableRow>
                    <TableCell align="center">sss</TableCell>
                    <TableCell align="center">sss</TableCell>
                    <TableCell align="center">sssss</TableCell>
                    <TableCell align="center">ssss</TableCell>
                    <TableCell align="center">sss</TableCell>
                    <TableCell align="center">sss</TableCell>
                    <TableCell align="center">sssss</TableCell>
                    <TableCell align="center">ssss</TableCell>

                  </TableRow>

                </TableBody>

              </Table>


            </TableContainer>

          </Grid>

        </Grid>

      </Grid>

    </>
  )
}

export default RechargeOne



















