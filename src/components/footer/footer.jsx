import { Box } from "@mui/material";
import cssVars from "../../styles/vars.module.scss"
const Footer = () => {
    return (
        <Box sx={{
            height: "80px",
            textAlign: "center",
            bgcolor: cssVars.black
        }} >
            <Box sx={{ lineHeight: "80px", color: cssVars.extraLightGray, fontSize: 14 }}>Sana Fashion © 2023 </Box>
        </Box>

    );
}

export default Footer;