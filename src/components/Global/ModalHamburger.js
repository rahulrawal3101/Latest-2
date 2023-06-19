import {Box,Drawer,List,ListItemButton, Collapse, Typography, IconButton, Button} from '@mui/material';
import { sideItems,hoverMenu } from '../Home/SidebarData/SidebarData';
import { ExpandLess, ExpandMore} from '@mui/icons-material';
import { useModal } from './hooks/useModal';
import '../Home/Home.css'

export default function ModalHamburger({state,toggleDrawer}) {
    const {open,handleClick} = useModal()

  const list = () => (
    <Box id="bigMenuBar" sx={{ width:  250, height:"280vh",   bgcolor: '#0B2755',color:"white" }} role="presentation">
    <List>
             {sideItems.map((item,index) => (
             <div key={item.id}>
             <ListItemButton onClick={()=>handleClick(item.title)}>
                                   <IconButton ><img width="15px" src={item.logo} alt="logo" /></IconButton>
                                   <Typography fontFamily="sans-serif" fontWeight={700} fontSize="12px" flexGrow={1}>{item.title}</Typography>
                                   {hoverMenu[index].length !== 0 ? open[item.title] ? <ExpandLess /> : <ExpandMore />: undefined}
             </ListItemButton>
    
                                   {hoverMenu[index].length !== 0 ?  <Collapse in={open[item.title]} timeout="auto" unmountOnExit>
                                   {hoverMenu[index].map((ele)=>{
                                     return (
                                                  <List key={ele.id} component="div" disablePadding>
             <ListItemButton sx={{ pl: 4 }}>
                                                         <div   style={{display:'flex'}}>
                                                        <Button disableFocusRipple disableElevation disableRipple  sx={{color:"white",opacity:"0.4",fontSize:"10px",fontFamily:"sans-serif",'&:hover':{opacity:1}}} startIcon={ele.logo} id="menuItemTitle">{ele.title}</Button></div>
             </ListItemButton></List>)})}</Collapse> :undefined}</div>))}
    </List>
    </Box>
  );

  return (
        <Drawer  id="bigMenuBarMain"  anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}> {list()}</Drawer>
      )
}