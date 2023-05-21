import { Box } from "@mui/material";
import cssVars from '../../styles/vars.module.scss'
const CategoryBanner = ({ data = [] }) => {

    return (
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between" }} >
            {
                data.map(item =>
                    <Box
                        sx={{
                            border: "1px solid " + cssVars.lightGray,
                            borderRadius: { xs: 0, md: cssVars.radius },
                            height: { xs: '200px', sm: '230px' },
                            padding: { xs: "10px", md: '45px' },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", md: "start" },
                            backgroundImage: `url(${item.image}), linear-gradient(180deg, #221F1F00 0%, #00000000 100%)`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            marginLeft: { xs: "calc(50% - 50vw)", md: 0 },
                            width: { xs: "100%", sm: "49.5%" },
                        }}>
                        <Box component="h2" color="#fff">{item.title}</Box>
                    </Box>
                )}
        </Box>
    );
}

export default CategoryBanner;
