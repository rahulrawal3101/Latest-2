import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessRounded';
// import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';

const RadioButton = () => {
    return (
        <>
            <Grid container sx={{ bgcolor: 'rgb(237, 240, 247' }} >
                <Grid item xs={12} sx={{ border: '1px solid green', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <FormControl >

                        <RadioGroup

                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <Box sx={{ display: 'flex', border: '2px solid lightgrey', justifyContent: 'left', alignItems: 'center', width: '300px', height: '70px', m: '15px', borderRadius: '15px' }}>
                                <FormControlLabel value="a" control={<Radio />} sx={{ ml: '15px' }} />
                                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'crimson' }}><LocalShippingRoundedIcon />Cheapest courier</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', border: '2px solid lightgrey', justifyContent: 'left', alignItems: 'center', width: '300px', height: '70px', m: '15px', borderRadius: '15px' }}>
                                <FormControlLabel value="b" control={<Radio />} sx={{ ml: '15px' }} />
                                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'crimson' }}><SettingsBrightnessRoundedIcon />Cheapest courier</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', border: '2px solid lightgrey', justifyContent: 'left', alignItems: 'center', width: '300px', height: '70px', m: '15px', borderRadius: '15px' }}>
                                <FormControlLabel value="c" control={<Radio />} sx={{ ml: '15px' }} />
                                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'crimson' }}><SettingsBrightnessRoundedIcon />Cheapest courier</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', border: '2px solid lightgrey', justifyContent: 'left', alignItems: 'center', width: '300px', height: '70px', m: '15px', borderRadius: '15px' }}>
                                <FormControlLabel value="d" control={<Radio />} sx={{ ml: '15px' }} />
                                <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'crimson' }}><LocalShippingRoundedIcon />Cheapest courier</Typography>
                            </Box>

                        </RadioGroup>
                    </FormControl>

                </Grid>
            </Grid >
        </>
    )
}

export default RadioButton