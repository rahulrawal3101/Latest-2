import { Button, ListItemButton} from '@mui/material'

const CustomButton = ({children,icon,opt,onClick}) => {

    const styles = {fontSize:"10px",fontFamily:"sans-serif",fontWeight:600,flexGrow:1,justifyContent:"left"}
  return (
               <ListItemButton disableRipple dense disablePadding disableGutters    id={`${opt ?'active' : ''}`}   sx={{backgroundColor:opt ?  ' #0B2755': "",height:"35px",pl: 4}} >          
<Button sx={{color:`${opt ? "white" : "rgb(38, 63, 151)"}`}} style={styles} startIcon={icon}  size='small' disableRipple onClick={onClick} >{children}</Button>
         </ListItemButton>
  )
}

export default CustomButton