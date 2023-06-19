import {useState} from 'react'
import './Home.css'
import {Box,Menu,Typography, Button } from '@mui/material'
const SidebarItem = ({title,logo,hoverMenu}) => {

 const [anchorEl, setAnchorEl] = useState(null);
 const [ev,setEv] = useState(null)
const [open,setOpen] = useState(false);
const handleOver = (event) => {setOpen(true);setAnchorEl(event.currentTarget);};
const getAncEl = (e)=>{setEv(e.currentTarget);setOpen(false)}
const putAncEl = ()=>{setAnchorEl(ev);setOpen(open)}
const outAncEl = ()=>{setAnchorEl(null);setOpen(false)}

  return (
    <>
      <Box  id="sidebarBoxItems" onMouseLeave={(e)=>getAncEl(e)}   onMouseOver={handleOver} sx={{display: 'flex', alignItems: 'center', textAlign: 'center',flexDirection:"column",justifyContent:"center" }}>
            <img width="30px" height="30px" src={logo} alt="logo" />
            <Typography fontFamily="sans-serif" fontWeight="600" fontSize="12px" >{title}</Typography>
      </Box>
{hoverMenu.length !== 0 ?  <Menu onMouseOver={putAncEl} onMouseLeave={outAncEl} anchorEl={anchorEl} open={open} onClose={outAncEl} PaperProps={{elevation: 0,sx: {overflow: 'hidden',bgcolor:"transparent"},}}
transformOrigin={{ horizontal: 'left', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        {hoverMenu.map((item)=>{
            return (
 <div  key={item.id} style={{display:'flex',backgroundColor:"#0B2755"}}>
     <Button onClick={outAncEl}  sx={{color:"white",opacity:"0.4",fontSize:"10px",fontFamily:"sans-serif",'&:hover':{opacity:1}}} startIcon={item.logo} id="menuItemTitle">{item.title}</Button>
 </div>
            )
        })}
      </Menu>:undefined}

    </>
  );
}

export default SidebarItem