import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import cssVars from '../../styles/vars.module.scss'

const ListButton = ({ onBtnClick, icon, text }) => {
    return (
        <ListItemButton sx={{ color: cssVars.black , '&:last-child': {color: cssVars.red } }} onClick={onBtnClick}>
            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }} >
                {icon}
            </ListItemIcon>
            <ListItemText sx={{ 'span' : {fontWeight: 500} }} primary={text} />
        </ListItemButton>
    )
}
export default ListButton;