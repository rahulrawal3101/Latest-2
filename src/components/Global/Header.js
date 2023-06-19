import { AppBar,Badge, Box, Button, Container,Divider, IconButton, Toolbar, Typography } from '@mui/material'
import '../Home/Home.css'
import { Add ,NotificationsNone,Download,Menu} from '@mui/icons-material'
import User from './User'
import {useState} from 'react'
import ModalHamburger from './ModalHamburger'

const Header = ({title}) => {
    const [state, setState] = useState({left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
    <ModalHamburger toggleDrawer={toggleDrawer} state={state}/>
    <AppBar elevation={1} sx={{bgcolor:"white",color:"black"}}>
<Container maxWidth="xxl">
        <Toolbar variant='dense' disableGutters>
                     <Box id="hamburger" onClick = {toggleDrawer('left', true)}>
                      <IconButton size="large"  edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
           </Box>
            <Box id="headerBoxLeft" sx={{display:"flex",flexGrow:1,ml:"30px",pl:"30px"}}>
<Typography sx={{alignItems:"center",justifyContent:"center",display:"flex"}} m="0px 10px 0px 10px"  fontSize="20px">{title}</Typography>
        <Button id="addButton"  variant="outlined" startIcon={<Add/>} size='small' sx={{textTransform:"unset "}}> Create</Button>
        <IconButton id="addIcon" variant="outlined"color="success"  > <Add/></IconButton>
            </Box>
            {/* right side */}
           <Box id="rightBeforeHamburgerLogo" sx={{mr:"-70px",pl:"25px",display:"flex",height:"50px",width:"22rem",alignItems:"center",flexWrap:"nowrap"}} >
         
              <Typography id="rightBeforeHamburgerHide"  color="error">₹ 0.00</Typography>
  <Divider id="rightBeforeHamburgerHide"  orientation="vertical"   sx={{border:"1px solid lightgray",ml:"10px",height:"25px"}}/>         
                     <Button  id="rightBeforeHamburgerHide" variant='contained' size="small" sx={{bgcolor:" #0B2755",fontSize:"10px",textTransform:"unset "}}>
                      Recharge
                    </Button>
  <Divider id="rightBeforeHamburgerHide"  orientation="vertical"   sx={{border:"1px solid lightgray",ml:"10px",mr:"10px",height:"25px"}}/>
             
              <Box id="rightBeforeHamburger" sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
         
             <Badge  badgeContent={0} color="error">
            <NotificationsNone sx={{color:"#21648A",fontSize:"26px"}}/>
          </Badge>
     

            <Divider  orientation="vertical"   sx={{ml:"10px",mr:"10px",border:"1px solid lightgray",height:"25px"}}/>
              
                           <Badge badgeContent={0} color="error">
            <Download sx={{color:"#21648A",fontSize:"26px"}}/>
          </Badge>
           
 <Divider orientation="vertical"   sx={{ml:"10px",border:"1px solid lightgray",height:"25px"}}/>
       
              </Box>
                <User/>
           </Box>
        </Toolbar>
</Container>
</AppBar>
    </>
  )
}

export default Header