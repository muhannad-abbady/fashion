import { Badge, Box } from "@mui/material";
import cssVars from '../../styles/vars.module.scss'

const MyBadge = ({ count, children }) => {
    return (
        <Badge
            sx={{
                "& .MuiBadge-badge": {
                    bgcolor: cssVars.primary, color: cssVars.white, fontWeight: 600, right: { xs: "12px", lg: (count > 9 ? '-12px' : "-8px") }, top: { xs: "0", lg: "2px" }, height: "16px", minWidth: "16px", padding: `2px ${count > 9 ? '6px' : '2px'} !important`
                }
            }}
            max={99} badgeContent={count}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}>
            <Box display="flex" alignItems="center">
                {children}
            </Box>
        </Badge>
    );
}

export default MyBadge;