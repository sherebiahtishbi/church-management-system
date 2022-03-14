import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


const GraceMenuItem = ({ icon, text, onclick }) => {
  return (
    <ListItemButton onClick={onclick}>
        <ListItemIcon sx={{p:0}}>
        {icon}
        </ListItemIcon>
        <ListItemText primary={ text }/>
    </ListItemButton>
  )
}

export default GraceMenuItem