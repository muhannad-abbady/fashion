import { Box } from "@mui/material";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import cssVars from "../../../../styles/vars.module.scss"

const FullDescription = ({ product }) => {
    return (
        <Box>
            {
                <Box display="flex" alignItems="center" flexDirection="column" color={cssVars.darkGray} pt={3}>
                    <Box sx={{ "&>p": { mb: { xs: "25px", lg: 0.5 }, fontSize: "24px" } }} >
                        {!product.green
                            ?
                            <Box component="P" sx={{ color: cssVars.red }}>Warning: cheap material, synthetic fibers, toxic dyes</Box>
                            :
                            <Box component="P" sx={{ color: cssVars.green }}>Slow fashion</Box>

                        }
                    </Box>
                </Box>
            }
        </Box>
    );
}

export default FullDescription;