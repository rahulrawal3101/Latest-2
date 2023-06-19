import { Box, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import reverse from '../assets/reverse.svg';
import Paper from '@mui/material/Paper';


const Reverse = () => {
    const [category, setCategory] = useState('');
    const changeHandler = (e) => {
        setCategory(e.target.value)

    }
    return (
        <>
            <Grid container sx={{ bgcolor: 'rgb(237, 240, 249)', padding: '10px' }}>
                <Grid item xs={12} sx={{ bgcolor: 'rgb(249, 250, 254)', padding: '10px', borderRadius: '15px 15px 0px 0px' }}>
                    <Button>{'< Back'}</Button>
                    <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: { lg: '28px', md: '25px', sm: '22px', xs: '18px' }, fontWeight: { lg: '600', md: '600', sm: '700', xs: '800' } }}>Reverse QC Product Catalogue</Typography>
                </Grid>

                <Grid item xs={12} sx={{ bgcolor: 'white', padding: '15px' }}>
                    <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: { lg: '22px', md: '20px', sm: '18px', xs: '17px' }, fontWeight: '800' }}>Add Quality Check :</Typography>

                </Grid>
                <Grid container sx={{ bgcolor: 'white', padding: '10px 25px 25px 25px' }}  >
                    <Grid item xs={12}>
                        <Typography sx={{ color: 'rgb(38, 63, 151)', display: 'flex', justifyContent: 'left', alignItems: 'flex-start', fontSize: '17px', fontWeight: { lg: '600', md: '700', sm: '700', xs: '700' } }}><span style={{ color: 'crimson', marginRight: '3px' }}>*</span> category</Typography>
                        <FormControl sx={{ minWidth: { lg: 500, md: 450, sm: 400, xs: 295 }, mt: '10px', }} size='small'>
                            <InputLabel>Selct Category</InputLabel>
                            <Select
                                value={category}
                                label='Selct Category'
                                onChange={changeHandler}
                                sx={{ borderRadius: '7px' }}
                            >
                                <MenuItem value=''><em>Select Category</em></MenuItem>
                                <MenuItem value='APPARELS'>APPARELS</MenuItem>
                                <MenuItem value='ELECTRONICS'>ELECTRONICS</MenuItem>
                                <MenuItem value='OTHERS'>OTHERS</MenuItem>

                            </Select>

                        </FormControl>
                        <Typography sx={{ color: 'rgb(0, 81, 191)', fontSize: '15px', mt: '10px' }}>Note: Please add at least one category.</Typography>
                    </Grid>
                    <Divider sx={{ width: '100%', color: 'lightgrey', mt: '11px' }}></Divider>
                    <Grid item xs={12} sx={{ mt: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: { lg: '19px', md: '17px', sm: '15px', xs: '16px' }, color: 'rgb(38, 63, 151)', fontWeight: { lg: '600', md: '600', sm: '700', xs: '700' } }}>Enter Item Details</Typography>
                        <Button variant='contained' sx={{ fontSize: '' }}>Add Bulk Sku</Button>
                    </Grid>
                    <Grid container spacing={3} sx={{ mt: '1px' }}>
                        <Grid item lg={3} md={4} sm={6} xs={12} sx={{ padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', }}>
                            <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '17px', fontWeight: { lg: '600', md: '600', sm: '600', xs: '650' } }}><span style={{ color: 'crimson', marginRight: '3px' }}>*</span> Product SKU</Typography>
                            <TextField placeholder='Enter Product Sku' size='small' sx={{ mt: '7px', }} fullWidth />


                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} sx={{ padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', }}>
                            <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '17px', fontWeight: { lg: '600', md: '600', sm: '600', xs: '650' } }}><span style={{ color: 'crimson', marginRight: '3px' }}>*</span> Item Name</Typography>
                            <TextField placeholder='Enter Item Name' size='small' sx={{ mt: '7px', }} fullWidth />


                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} sx={{ padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', }}>
                            <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '17px', fontWeight: { lg: '600', md: '600', sm: '600', xs: '650' } }}>Product Description</Typography>
                            <TextField placeholder='Enter Product Description' size='small' sx={{ mt: '7px', }} fullWidth />


                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} sx={{ padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', }}>
                            <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '17px', fontWeight: { lg: '600', md: '600', sm: '600', xs: '650' } }}>Size</Typography>
                            <TextField placeholder='Enter Size' size='small' sx={{ mt: '7px', }} fullWidth />


                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} sx={{ padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', }}>
                            <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '17px', fontWeight: { lg: '600', md: '600', sm: '600', xs: '650' } }}>IMEI NO./Serial NO.</Typography>
                            <TextField placeholder='Enter IMEI NO./Serial No' size='small' sx={{ mt: '7px', }} fullWidth />

                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} sx={{ padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', }}>
                            <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '17px', fontWeight: { lg: '600', md: '600', sm: '600', xs: '650' } }}>Color</Typography>
                            <TextField placeholder='Enter Color' size='small' sx={{ mt: '7px', }} fullWidth />
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} sx={{ padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', }}>
                            <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '17px', fontWeight: { lg: '600', md: '600', sm: '600', xs: '650' } }}><span style={{ color: 'crimson', marginRight: '3px' }}>*</span> Brand</Typography>
                            <TextField placeholder='Enter Brand' size='small' sx={{ mt: '7px', }} fullWidth />
                        </Grid>


                    </Grid>
                    <Grid container sx={{ mt: '3px', display: 'flex', }} spacing={2}>
                        <Grid item xs={12}>
                            <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '18px', fontWeight: '600' }}>Upload Images</Typography>

                        </Grid>
                        <Grid item lg={1.5} md={3} sm={4} xs={5.3} >
                            <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '14px', fontWeight: { lg: '600', md: '600', sm: '600', xs: '650' } }}><span style={{ color: 'crimson', marginRight: '3px' }}>*</span> Top View</Typography>
                            <Box sx={{ cursor: 'pointer', bgcolor: 'rgb(237, 240, 249)', border: '2px dashed lightgray', width: { lg: '70%', md: '70%', sm: '70%', xs: '80%' }, height: '100px', borderRadius: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Box sx={{ width: '50px', height: '50px', borderRadius: '50%', }}><img src={reverse} alt='image3' width='100%' height='100%' /></Box>
                                <Button><FileUploadOutlinedIcon />Upload</Button>

                            </Box>


                        </Grid>
                        <Grid item lg={1.5} md={3} sm={4} xs={5.3} >
                            <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '14px', fontWeight: { lg: '600', md: '600', sm: '600', xs: '650' } }}> Rear View</Typography>
                            <Box sx={{ cursor: 'pointer', bgcolor: 'rgb(237, 240, 249)', border: '2px dashed lightgray', width: { lg: '70%', md: '70%', sm: '70%', xs: '80%' }, height: '100px', borderRadius: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Box sx={{ width: '50px', height: '50px', borderRadius: '50%', }}><img src={reverse} alt='image2' width='100%' height='100%' /></Box>
                                <Button><FileUploadOutlinedIcon />Upload</Button>

                            </Box>


                        </Grid>
                        <Grid item lg={1.5} md={3} sm={4} xs={5.3} >
                            <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '14px', fontWeight: { lg: '600', md: '600', sm: '600', xs: '650' } }}>Bottom View</Typography>
                            <Box sx={{ cursor: 'pointer', bgcolor: 'rgb(237, 240, 249)', border: '2px dashed lightgray', width: { lg: '70%', md: '70%', sm: '70%', xs: '80%' }, height: '100px', borderRadius: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Box sx={{ width: '50px', height: '50px', borderRadius: '50%', }}><img src={reverse} alt='image1' width='100%' height='100%' /></Box>
                                <Button><FileUploadOutlinedIcon />Upload</Button>

                            </Box>


                        </Grid>


                    </Grid>

                </Grid>
                <Grid container >
                    <Grid item xs={12} sx={{ bgcolor: 'rgb(249, 250, 254)', display: 'flex', justifyContent: { lg: 'right', md: 'right', sm: 'right', xs: 'space-between' }, alignItems: 'flex-end', padding: '25px', }}>
                        <Button variant='outlined' sx={{ mr: '20px' }}>Reset</Button>
                        <Button variant='contained'>Save and Proceed</Button>
                    </Grid>
                    <Grid item xs={12} sx={{ bgcolor: 'white', padding: '20px' }}>
                        <Typography sx={{ color: 'rgb(38, 63, 151)', fontSize: '18px', fontWeight: { lg: '600', md: '600', sm: '600', xs: '650' } }}>Added SKU for Quality Check</Typography>

                    </Grid>
                    <Grid item xs={12}  >
                        <TableContainer component={Paper} sx={{ border: '1px solid lightgrey' }}>
                            <Table sx={{ width: '100%' }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center' sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>Image</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>Category</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>Product SKU</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>Item name</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>Product description</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>IMEI NO. / Serial NO.	</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>Brand</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>Color</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>Size</TableCell>
                                        <TableCell align="center" sx={{ fontSize: '16px', color: 'rgba(38, 63, 151, 0.6)', fontWeight: '600' }}>Actions</TableCell>
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
                                        <TableCell align="center">sssss</TableCell>
                                        <TableCell align="center">ssss</TableCell>

                                    </TableRow>

                                </TableBody>

                            </Table>


                        </TableContainer>

                    </Grid>
                </Grid>





            </Grid >
        </>
    )
}

export default Reverse;