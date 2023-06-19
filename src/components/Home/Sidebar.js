import './Home.css'
import { Box} from '@mui/material'
import {sideItems,hoverMenu} from './SidebarData/SidebarData'
import SidebarItem from './SidebarItem'

const Sidebar = ({changeHandler}) => {
  return (
  <Box id="sidebarBox">
    {sideItems.map((item,index)=>{
      return (
        <Box key={item.id} onClick={()=>changeHandler(item.title)} >
<SidebarItem  title={item.title} logo={item.logo} hoverMenu={hoverMenu[index]}/>
        </Box>
      )
    })}
  </Box>
  )
}

export default Sidebar
