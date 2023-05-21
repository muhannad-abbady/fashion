import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/material";
import cssVars from '../../styles/vars.module.scss'

const ActionIconButton = ({ icon, iconFilled, onClick, active = false, text = "", isLoading = false }) => {
    const t = (word) => word
    return (
        !text
            ?
            <Grid onClick={onClick} bgcolor="#fff" display="flex" alignItems="center" justifyContent="center" width={36} height={36} borderRadius="50%" border={isLoading ? 'none' : `1px solid ${cssVars.lightGray}`} mb={1}
                sx={{ color: (active ? cssVars.primary : cssVars.gray), ":hover": { color: (active ? cssVars.hoverColor : cssVars.primary) }, cursor: onClick ? "pointer" : "default" }}>
                {
                    isLoading
                        ?
                        <CircularProgress sx={{ width: "24px !important", height: "24px !important", color: cssVars.gray }} />
                        :
                        active
                            ?
                            iconFilled
                            :
                            icon
                }
            </Grid>
            :
            <Grid onClick={onClick} display="flex" alignItems="center" mr="30px"
                sx={{ color: (active ? cssVars.primary : cssVars.black), ":hover": { color: (active ? cssVars.hoverColor : cssVars.primary) }, cursor: onClick ? "pointer" : "default" }}
            >
                <Box mr={0.6}>
                    {
                        isLoading
                            ?
                            <CircularProgress sx={{ width: "24px !important", height: "24px !important", color: cssVars.gray }} />
                            :
                            active
                                ?
                                iconFilled
                                :
                                icon
                    }
                </Box>
                <Box pt={0.15}>{t(text)}</Box>
            </Grid>
    );
}

export default ActionIconButton;