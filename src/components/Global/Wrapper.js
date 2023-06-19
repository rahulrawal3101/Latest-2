import { Box } from "@mui/material"

const Wrapper = (props) => {
  return (
   <Box sx={{pt:"18px",mt:"50px",width:"100%",bgcolor:" #f4f6f9"}}>
{props.children}
</Box>
  )
}

export default Wrapper